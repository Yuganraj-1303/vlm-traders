import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import purgecss from '@fullhuman/postcss-purgecss'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  server: {
    host: true,
    port: 5173,
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: command === 'build' ? [
        purgecss({
          content: [
            './index.html',
            './src/**/*.{js,jsx,ts,tsx}',
          ],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          safelist: {
            // Bootstrap classes that are dynamically applied or generated
            standard: [
              /^modal/,
              /^collapse/,
              /^collapsing/,
              /^show/,
              /^fade/,
              /^offcanvas/,
              /^dropdown/,
              /^navbar/,
              /^nav-/,
              /^tab-/,
              /^tooltip/,
              /^popover/,
              /^carousel/,
              /^accordion/,
              /^spinner/,
              /^visually-hidden/,
              /^btn-close/,
              /^active/,
              /^disabled/,
              // Theme classes applied dynamically
              /^theme-/,
              /^bi-/,
              // Framer motion classes
              /^framer/,
            ],
            greedy: [
              /modal/,
              /offcanvas/,
              /dropdown-menu/,
              /navbar-collapse/,
            ]
          }
        })
      ] : []
    }
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'vendor-react',
              test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
              priority: 20,
            },
            {
              name: 'vendor-motion',
              test: /[\\/]node_modules[\\/](framer-motion|motion)[\\/]/,
              priority: 15,
            },
            {
              name: 'vendor-bootstrap',
              test: /[\\/]node_modules[\\/](bootstrap)[\\/].*\.js/,
              priority: 10,
            },
          ]
        }
      }
    }
  }
}))
