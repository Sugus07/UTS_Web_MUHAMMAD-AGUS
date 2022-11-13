/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        "signup":"#8992FA;",
        "just" : "#FFD31D;",
      },
      backgroundImage: {
        "header": "url('./public/img/bg-header.png')",
        "progress": "url('./public/img/bg-progress.png)"
      },
      spacing: {
        "card" : "48%",
        "footer": "90%",
        "lg-progress-30" : "30%",
        "lg-progress-70" : "70%"
      }
    },
  },
  plugins: [],
}
