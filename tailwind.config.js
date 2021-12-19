module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      gray:'rgba(38, 40, 60, 1)',
      footer_c:'#26283C', //footer gray
      green:'#00EB7A',
      green2:'rgba(0, 235, 122, 1)',
      colourful:'#FF4F4F',
      gray_h:'#26283C',//gray header
      white:'#FFFFFF',
      gray_text:'#72759A'
      
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
