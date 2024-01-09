/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/*.ejs'],
  theme: {
    extend: {
      colors: {
        "dark-gray": "hsl(0, 0%, 17%)",
        "gray": "hsl(0, 0%, 59%)"
      },
      backgroundImage: {
        "mobile": "url('/images/pattern-bg-mobile.png')",
        "desktop": "url('/images/pattern-bg-desktop.png')"
      },
      fontFamily: {
        "rubik": ["Rubik, sans-serif"]
      }
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    }
    
  ],
}

