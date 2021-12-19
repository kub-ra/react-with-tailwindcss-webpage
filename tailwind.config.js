module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      gray:'rgba(38, 40, 60, 1)',
      footer_c:'#72759A',
      green:'#00EB7A'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
