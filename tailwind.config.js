/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', 'class'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        signature: ['agustina', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      screens: {
        xs: '375px',
      },
      colors: {
        bg: 'var(--color-bg)',
        'bg-secondary': 'var(--color-bg-secondary)',
        accent: 'var(--color-accent)',
        'accent-light': 'var(--color-accent-light)',
        text: 'var(--color-text)',
        'dark-1': 'var(--color-dark-1)',
        'dark-2': 'var(--color-dark-2)',
        'dark-3': 'var(--color-dark-3)',
      },
      transitionTimingFunction: {
        'in-scroll': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      gridTemplateColumns: {
        'auto-300': 'repeat(auto-fill, minmax(300px, 1fr))',
        'auto-250': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      backgroundImage: {
        torch:
          'radial-gradient(525px at 50% 50%, var(--color-accent-torch), transparent 80%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
