import { defineConfig } from 'unocss'

/**
 * handl UnoCSS extension.
 *
 * Slidev merges this with its own config, so the tokens in `tokens.css`
 * become first-class utilities: `bg-background`, `text-primary`,
 * `border-edge`, `font-display`, `text-link-primary-hover`, …
 */
export default defineConfig({
  theme: {
    fontFamily: {
      display: 'Source Sans 3, sans-serif',
      flex: 'Source Sans 3, sans-serif',
      mono: 'Source Code Pro, monospace',
    },
    fontSize: {
      '10xl': '10rem',
      '11xl': '11rem',
      '12xl': '12rem',
      '13xl': '13rem',
      '14xl': '14rem',
      '15xl': '15rem',
      '16xl': '16rem',
      '17xl': '17rem',
    },
    colors: {
      'gray-1': 'var(--gray-1)',
      'gray-2': 'var(--gray-2)',
      'gray-3': 'var(--gray-3)',

      background: 'var(--background)',
      foreground: 'var(--foreground)',
      'background-secondary': 'var(--background-secondary)',
      'foreground-secondary': 'var(--foreground-secondary)',

      primary: {
        DEFAULT: 'var(--primary)',
        foreground: 'var(--primary-foreground)',
      },
      secondary: {
        DEFAULT: 'var(--secondary)',
        foreground: 'var(--secondary-foreground)',
      },
      muted: {
        DEFAULT: 'var(--muted)',
        foreground: 'var(--muted-foreground)',
      },
      accent: {
        DEFAULT: 'var(--accent)',
        foreground: 'var(--accent-foreground)',
      },
      destructive: 'var(--destructive)',

      card: {
        DEFAULT: 'var(--card)',
        foreground: 'var(--card-foreground)',
      },
      popover: {
        DEFAULT: 'var(--popover)',
        foreground: 'var(--popover-foreground)',
      },
      input: 'var(--input)',
      border: 'var(--border)',
      ring: 'var(--ring)',

      edge: 'var(--edge)',
      'edge-soft': 'var(--edge-soft)',

      link: {
        primary: 'var(--link-primary)',
        'primary-hover': 'var(--link-primary-hover)',
      },

      chart: {
        1: 'var(--chart-1)',
        2: 'var(--chart-2)',
        3: 'var(--chart-3)',
        4: 'var(--chart-4)',
        5: 'var(--chart-5)',
      },
    },
  },
  shortcuts: {
    'bg-main': 'bg-background text-foreground',
    'border-main': 'border-edge',
    'text-hover': 'hover:text-link-primary-hover transition-colors',
  },
})
