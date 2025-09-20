/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-primary': '#810ffa',
        'purple-dark': '#2c0b57',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #000000 0%, #810ffa 50%, #2c0b57 100%)',
        'gradient-dark': 'linear-gradient(135deg, #000000 0%, #2c0b57 100%)',
        'gradient-purple': 'linear-gradient(135deg, #810ffa 0%, #2c0b57 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
