/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textColor : 'var(--text))',
        backgroundColor : 'var(--background)',
        primaryColor : 'var(--primary)',
        secondaryColor : 'var(--secondary)',
        accentColor : 'var(--accent)',
      }
    }
  },
  plugins: [],
}


