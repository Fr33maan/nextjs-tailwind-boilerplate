module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {
      transitionProperty: {
        maxHeight: 'max-height'
      },
      animation: {
        slideIn: "slideIn 0.5s forwards",
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: 'translateX(-100%)',
            opacity: 0
          },
          "100%": {
            transform: 'translateX(0%)',
            opacity: 1
          }
        }
      }
    },
    aspectRatio: {
      none: 0,
      square: [ 1, 1 ],
      "16/9": [ 16, 9 ],
      "4/3": [ 4, 3 ],
      "21/9": [ 21, 9 ]
    }
  },
  variants: {
    aspectRatio: [ 'responsive' ],
    animation: [ "motion-safe" ],
  },
  plugins: [
    require("tailwindcss-responsive-embed"),
    require("tailwindcss-aspect-ratio"),
  ],
  experimental: {
    extendedSpacingScale: true
  },
}