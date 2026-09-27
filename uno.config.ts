import { defineConfig } from 'unocss'

/**
 * LFDS UnoCSS extension.
 *
 * Slidev merges this with its own config, so the tokens in `tokens.css`
 * become first-class utilities: `bg-background`, `text-accent`,
 * `border-edge`, `font-display`, `bg-primary-foreground`, …
 */
export default defineConfig({
  theme: {
    fontFamily: {
      display: 'Roboto Condensed, sans-serif',
      flex: 'Roboto Flex, sans-serif',
    },
    colors: {
      black: 'var(--black)',
      white: 'var(--white)',
      blue: 'var(--blue)',
      cyan: 'var(--cyan)',
      green: 'var(--green)',
      magenta: 'var(--magenta)',
      red: 'var(--red)',
      yellow: 'var(--yellow)',
      orange: 'var(--orange)',
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
  },
})
