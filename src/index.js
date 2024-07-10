// drawer.js
Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    direction: {
      type: String,
      value: 'bottom' // default direction
    }
  },
  data: {},
  lifetimes: {
    attached() {
      this.validateDirection()
    }
  },
  methods: {
    handleBackgroundClick() {
      // Handle click on the background to close the drawer
      this.setData({show: false})
      // Trigger a custom event for notifying the parent component about drawer close
      this.triggerEvent('close')
    },
    preventBubble() {
      // Do nothing here, just prevent event bubbling
    },
    validateDirection() {
      // Handle valid Direction, default: bottom
      const validDirections = ['bottom', 'top', 'left', 'right']
      if (!validDirections.includes(this.data.direction)) {
        this.setData({direction: 'bottom'})
      }
    },
  }
})
