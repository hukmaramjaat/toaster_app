/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  
  theme: {
    extend: {
      keyframes: {
        wiggler: {
          '0%': { transform: 'translateX(150%)' },
          '100%': { transform: 'translateX(0%)' },
        },
       wiggle: {
          '0%': { transform: 'translateX(-150%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      }
    },
  },
  
  plugins: [],
}

