/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'akshar': ['Akshar', 'system-ui'],
        'open': ['Open Sans', 'system-ui']
      }
    },
  },
  plugins: [],
}