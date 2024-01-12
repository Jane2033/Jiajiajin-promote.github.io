/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'bg-pattern': "url('./src/img/background.svg')",
      },
      colors: {
        'primary': '#0052CC',
        'on-surface': '#000A1A',
        'primary-container': '#EBF1FA',
        'secondary': '#FACC15',
        'secondary-container': '#FAF4DC',
        'tertiary': '#44E3BD',
        'tertiary-container': '#DFF7F2',
      },
      spacing: {
        '150vh': '150vh',
        '200vh': '200vh',
        '300vh': '300vh',
      },
    },
  },
  plugins: [],
}

