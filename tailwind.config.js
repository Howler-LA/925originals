/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require('path')
let plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  safelist: [
    'skip-to-content-link'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '40px',
        sm: '80px',
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'var(--color-stone-400)',
            iframe: {
              width: '100%',
              height: '100%',
              aspectRatio: '16/9'
            },
            a: {
              color: 'var(--color-secondary-500)',
              '&:hover': {
                color: 'var(--color-secondary-200)',
              },
            },
          },
        },
      },
      colors: {
        'background': 'var(--color-white)',
        'foreground': 'var(--color-stone-800)',
        'subtle': 'var(--color-stone-400)',
        'cloud-burst': {
          DEFAULT: '#79716b',
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a6a09b',
          500: '#79716b',
          600: '#57534d',
          700: '#44403b',
          800: '#292524',
          900: '#1c1917',
        },
        woodland: {
          DEFAULT: '#595425',
          50: '#C4BC71',
          100: '#BEB563',
          200: '#AFA649',
          300: '#938A3D',
          400: '#766F31',
          500: '#595425',
          600: '#312F15',
          700: '#0A0904',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography')(),
    plugin(function ({ addVariant }) {
      addVariant('scrolled', '.scrolled &'),
        addVariant('mobile-menu-visible', '.mobile-menu-visible &')
    }),
  ],
}
