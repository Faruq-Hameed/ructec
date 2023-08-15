/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font: ['Lato', 'sans-serif'],
      } ,
      colors:{
        blue02: ' #30A8E3',
        blue03: '#0797DE',
        blue05: '#056594',
        grey10: '#222222',
        blue04: '#067EB9',
        white02: '#F6F6F6',
        white01: '#FFFFFF',
        grey11: '#151414',
        grey08: '#454443',
        blue06: '#044C6F',
        grey01: '#EDEDED ',
        grey07: '#565554',
        grey09: '#343333'
      } ,
    },
  },
  plugins: [],
}