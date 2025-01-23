import { defineConfig } from 'vite'
import path from 'path'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint'

export default defineConfig({
  root: './src',
  build: {
    manifest: 'manifest.json',
    outDir: '../dist',
    assetsDir: 'public',
    rollupOptions: {
      input: {
        main: './src/main.js',
        thirdParty: './src/thirdParty.js',
      },
      output: {
        format: 'es',
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      output: {
        comments: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  },
  plugins: [
    eslint(),
    stylelint({
      files: ['**/*.scss']
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
      }
    }
  }
})
