export default {
  name: 'infiniteScroll',
  component() {
    return {
      loading: false,
      hasMore: true,
      currentPage: 1,
      totalPages: 1,
      productsPerPage: 24,
      collectionHandle: '',
      sectionId: '',
      gridContainer: null,
      
      init() {
        // Get initial data from the page
        this.collectionHandle = this.$el.dataset.collectionHandle || '';
        this.sectionId = this.$el.dataset.sectionId || '';
        this.productsPerPage = parseInt(this.$el.dataset.productsPerPage) || 24;
        
        // Find the grid container
        this.gridContainer = this.$el.querySelector('[data-product-grid]');
        
        // Get total pages from initial pagination if available
        const paginationInfo = this.$el.querySelector('[data-pagination-info]');
        if (paginationInfo) {
          this.totalPages = parseInt(paginationInfo.dataset.totalPages) || 1;
        }
        
        // Set up scroll listener
        this.setupScrollListener();
      },
      
      setupScrollListener() {
        const handleScroll = window[window.slayedNamespace].helpers.throttle(() => {
          if (this.loading || !this.hasMore) return;
          
          // Check if user is near bottom (within 500px)
          const scrollPosition = window.innerHeight + window.scrollY;
          const documentHeight = document.documentElement.scrollHeight;
          
          if (scrollPosition >= documentHeight - 500) {
            this.loadNextPage();
          }
        }, 200);
        
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup on component destroy
        this.$el.addEventListener('alpine:destroyed', () => {
          window.removeEventListener('scroll', handleScroll);
        });
      },
      
      async loadNextPage() {
        if (this.loading || !this.hasMore || this.currentPage >= this.totalPages) {
          return;
        }
        
        this.loading = true;
        this.currentPage++;
        
        try {
          // Build the URL for the next page, preserving existing query parameters
          const url = new URL(window.location.href);
          url.searchParams.set('page', this.currentPage);
          url.searchParams.set('section_id', this.sectionId);
          
          // Fetch the next page
          const response = await fetch(url.toString());
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const html = await response.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          
          // Find the product grid in the response
          // Shopify returns sections wrapped in #shopify-section-{section_id}
          const sectionElement = doc.querySelector(`#shopify-section-${this.sectionId}`);
          if (!sectionElement) {
            throw new Error('Section not found in response');
          }
          
          const responseGrid = sectionElement.querySelector('[data-product-grid]');
          if (!responseGrid) {
            throw new Error('Product grid not found in response');
          }
          
          // Extract product cards from the response
          const productCards = responseGrid.querySelectorAll('[data-product-id]');
          
          if (productCards.length === 0) {
            // No more products
            this.hasMore = false;
            this.loading = false;
            return;
          }
          
          // Append new products to the grid
          productCards.forEach(card => {
            // Clone and append to avoid issues with event listeners
            const clonedCard = card.cloneNode(true);
            this.gridContainer.appendChild(clonedCard);
          });
          
          // Update total pages if available in response
          const responsePagination = sectionElement.querySelector('[data-pagination-info]');
          if (responsePagination) {
            this.totalPages = parseInt(responsePagination.dataset.totalPages) || this.totalPages;
          }
          
          // Check if we've loaded all pages
          if (this.currentPage >= this.totalPages || productCards.length < this.productsPerPage) {
            this.hasMore = false;
          }
          
        } catch (error) {
          console.error('Error loading next page:', error);
          this.currentPage--; // Revert page increment on error
          this.hasMore = false; // Stop trying if there's an error
        } finally {
          this.loading = false;
        }
      }
    }
  }
}

