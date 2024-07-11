Component({
  properties: {
    fontSize: {
      type: String,
      value: '16px'
    },
    fontStyle: {
      type: String,
      value: 'normal'
    },
    color: {
      type: String,
      value: '#000000'
    },
    textDecoration: {
      type: String,
      value: 'none'
    },
    fontVariant: {
      type: String,
      value: 'normal'
    },
    fontWeight: {
      type: String,
      value: 'normal'
    },
    lineHeight: {
      type: String,
      value: 'normal'
    }
  },
  observers: {
    fontSize(fontSize) {
      this.validateFontSize(fontSize)
    },
    fontStyle(fontStyle) {
      this.validateFontStyle(fontStyle)
    },
    color(color) {
      this.validateColor(color)
    },
    textDecoration(textDecoration) {
      this.validateTextDecoration(textDecoration)
    },
    fontVariant(fontVariant) {
      this.validateFontVariant(fontVariant)
    },
    fontWeight(fontWeight) {
      this.validateFontWeight(fontWeight)
    },
    lineHeight(lineHeight) {
      this.validateLineHeight(lineHeight)
    }
  },
  methods: {
    validateFontSize(fontSize) {
      const validFontSizes = /^(\d+(?:\.\d+)?(rpx|px|em|rem|%)|inherit)$/
      if (!validFontSizes.test(fontSize)) {
        this.setData({
          fontSize: '16px'
        })
      }
    },
    validateFontStyle(fontStyle) {
      const validFontStyles = ['normal', 'italic', 'oblique', 'inherit']
      if (!validFontStyles.includes(fontStyle)) {
        this.setData({
          fontStyle: 'normal'
        })
      }
    },
    validateColor(color) {
      const validColors = /^#[0-9a-fA-F]{6}$/
      if (!validColors.test(color)) {
        this.setData({
          color: '#000000'
        })
      }
    },
    validateTextDecoration(textDecoration) {
      const validTextDecorations = ['none', 'underline', 'overline', 'line-through', 'underline overline', 'inherit']
      if (!validTextDecorations.includes(textDecoration)) {
        this.setData({
          textDecoration: 'none'
        })
      }
    },
    validateFontVariant(fontVariant) {
      const validFontVariants = ['normal', 'small-caps', 'inherit']
      if (!validFontVariants.includes(fontVariant)) {
        this.setData({
          fontVariant: 'normal'
        })
      }
    },
    validateFontWeight(fontWeight) {
      const validFontWeights = ['normal', 'bold', 'bolder', 'lighter', 'inherit', 'initial', 'unset']
      const numericWeight = /^\d{3}$/
      const isNumericWeightValid = (
        numericWeight.test(fontWeight) && fontWeight >= 100 && fontWeight <= 900
      )
      if (!validFontWeights.includes(fontWeight) && !isNumericWeightValid) {
        this.setData({
          fontWeight: 'normal'
        })
      }
    },
    validateLineHeight(lineHeight) {
      const validLineHeights = /^(\d+(?:\.\d+)?(rpx|px|em|rem|%)|normal|inherit)$/
      if (!validLineHeights.test(lineHeight)) {
        this.setData({
          lineHeight: 'normal'
        })
      }
    }
  }
})
