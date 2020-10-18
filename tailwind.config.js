module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [
  ],
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif']
    },
    colors: {
      black: '#000',
      gray: {
        500: '#ccc',
        100: '#919191',
      },
    },
    extend: {
      fontSize: {
        base: ['18px', '27px']
      },
    }
  },
  variants: {},
  plugins: []
}
