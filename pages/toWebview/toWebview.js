// pages/toWebview/toWebview.js
Page({
  data: {
    src: ''
  },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      src: options.url
    })
  }
})