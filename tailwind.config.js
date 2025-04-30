/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ef',
          100: '#dcf1db',
          200: '#bde4bb',
          300: '#94d191',
          400: '#68b964',
          500: '#4a9d45',
          600: '#2E7D32', // main primary
          700: '#276e2c',
          800: '#235727',
          900: '#1f4922',
          950: '#0f2911',
        },
        secondary: {
          50: '#f8f5f2',
          100: '#eee7e1',
          200: '#dfd0c6',
          300: '#cbb4a3',
          400: '#b7967f',
          500: '#a68268',
          600: '#8D6E63', // main secondary
          700: '#735750',
          800: '#614a44',
          900: '#523e39',
          950: '#2d211e',
        },
        accent: {
          50: '#fff1f0',
          100: '#ffe0dd',
          200: '#ffc5bf',
          300: '#ff9d94',
          400: '#ff6b5c', // main accent
          500: '#ff3f2b',
          600: '#ff1500',
          700: '#d61200',
          800: '#b21100',
          900: '#921200',
          950: '#500600',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce8',
          200: '#bbf7d1',
          300: '#86efac',
          400: '#4ade80', // main success
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef5c7',
          200: '#feeb8a',
          300: '#fdd84c',
          400: '#fbbf24', // main warning
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444', // main error
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'grow': 'grow 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        grow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
    },
  },
  plugins: [],
};