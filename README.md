# 925 Originals Shopify Theme

A high-performance, modern Shopify theme built for 925 Originals denim brand, featuring advanced collection filtering, dynamic product galleries, and seamless user experience.

## 🚀 Key Features

### ⚡ Real-Time Collection Filtering
- **Alpine.js powered filtering** - Instant product filtering without page reloads
- **Smart toggle interface** - Collapsible filters with active filter badges  
- **Advanced sorting** - Price, date, alphabetical, and best selling options
- **Product type filtering** - Filter by Jeans, T-shirts, and other categories
- **URL state management** - Bookmarkable filtered states
- **Mobile optimized** - Responsive design with proper touch targets

### 🖼️ Dynamic Product Image Gallery
- **Collection-specific images** - Custom metafield support for mens/womens/unisex collections
- **Variant persistence** - Custom collection images persist during size/color changes
- **Smart fallbacks** - Graceful degradation to standard product media
- **Seamless switching** - No image flashing during variant selection

### 🎨 Enhanced Navigation
- **Smooth megamenu animations** - Professional Alpine.js transitions
- **Improved hover states** - Polished interaction feedback
- **Performance optimized** - Efficient Alpine.js component architecture

### 🛠️ Technical Excellence
- **X-cloak protection** - Prevents flash of unstyled content
- **Modern build system** - Vite + Shopify CLI integration
- **TypeScript support** - Type-safe JavaScript for better maintainability
- **Tailwind CSS** - Utility-first styling with custom components
- **Git workflow** - Proper version control and deployment pipeline

## 🔧 Development Setup

### Prerequisites
- Node.js 18+
- Shopify CLI
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/Howler-LA/925originals.git
cd 925originals

# Install dependencies
npm install

# Configure Shopify CLI (create shopify.theme.toml)
# See configuration section below
```

### Configuration

Create `shopify.theme.toml` in the root directory:

```toml
[environments.development]
store = "ef632c-b2"
theme = "175559147811"

[environments.staging]
store = "ef632c-b2"
theme = "177624875299"
ignore = ["templates/*", "config/*"]

[environments.production]
store = "ef632c-b2"
theme = "175559147811"
ignore = ["templates/*", "config/*"]
```

## 📋 Available Commands

| Command | Purpose | Environment |
|---------|---------|-------------|
| `npm run dev` | Local development with live reload | Development theme |
| `npm run deploy` | Interactive production deploy | Production (with confirmation) |
| `npm run deploy:staging` | Deploy to staging | Staging theme |
| `npm run deploy:production` | Deploy to production | Live theme |
| `npm run build` | Build assets only | Local build |

## 🎯 Recent Improvements

### Collection Filtering System
- **Real-time filtering** replaces slow page-based filtering
- **Alpine.js components** for smooth interactions
- **Smart state management** with URL synchronization
- **Performance optimized** client-side filtering

### Product Experience
- **Custom collection images** enhance brand storytelling
- **Variant switching** maintains collection context
- **Responsive gallery** adapts to all screen sizes
- **Professional animations** improve perceived performance

### Code Quality
- **Modern JavaScript** with ES6+ features
- **Component architecture** for maintainable code
- **Git workflow** with proper commit messages
- **Performance monitoring** and optimization

## 🔍 Architecture

### Frontend Stack
- **Alpine.js** - Reactive components and state management
- **Tailwind CSS** - Utility-first styling framework
- **Vite** - Modern build tool and development server
- **TypeScript** - Type safety for critical components

### Shopify Integration
- **Custom metafields** for collection-specific content
- **Liquid templates** optimized for performance
- **Section groups** for flexible page building
- **Theme settings** for merchant customization

### Key Files

```
├── sections/
│   ├── main-collection.liquid      # Collection page with filtering
│   ├── block-hero-image.liquid     # Homepage hero sections
│   └── header.liquid               # Navigation with megamenu
├── snippets/
│   ├── collection-filters-alpine.liquid  # Alpine.js filtering component
│   ├── product-image-gallery.liquid      # Dynamic image gallery
│   ├── card-product-single.liquid        # Product card component
│   └── header-menu.liquid               # Megamenu component
├── src/
│   ├── js/prodify/                 # Variant switching logic
│   ├── css/                        # Tailwind and custom styles
│   └── entrypoints/                # JavaScript entry points
```

## 🚀 Deployment

### Staging Deployment
```bash
npm run deploy:staging
```

### Production Deployment
```bash
npm run deploy:production
# or interactive with confirmation
npm run deploy
```

### Git Workflow
```bash
# Make changes, then:
git add .
git commit -m "feat: description of changes"
git push origin main

# Deploy to live theme
npm run deploy:production
```

## 💡 Best Practices

### Performance
- **Lazy loading** for below-fold images
- **Critical CSS** inlined for faster rendering
- **Component splitting** for smaller bundles
- **Alpine.js optimization** with x-cloak protection

### Maintainability
- **Semantic commit messages** following conventional commits
- **Component-based architecture** for reusable code
- **TypeScript integration** for type safety
- **Comprehensive documentation** in code comments

### User Experience
- **Mobile-first design** with responsive breakpoints
- **Accessibility standards** with proper ARIA attributes
- **Progressive enhancement** for JavaScript features
- **Graceful degradation** when features aren't available

## 🤝 Contributing

1. Create feature branch from `main`
2. Make changes following code style
3. Test thoroughly on development theme
4. Submit pull request with description
5. Deploy to staging for review
6. Merge and deploy to production

## 📞 Support

For technical support or questions about the 925 Originals theme:
- **Repository**: [Howler-LA/925originals](https://github.com/Howler-LA/925originals)
- **Issues**: Create GitHub issues for bugs or feature requests
- **Development**: Howler LA team

---

*Built with ❤️ for 925 Originals by Howler LA*