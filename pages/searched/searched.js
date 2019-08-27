// pages/searched/searched.js
Page({
  data: {
    courses: []
  },
  onLoad: function (options) {
    let keyWord = options.keyWord
    wx.request({
      url: `https://itfun.tv/api/v1/search.json?q=${keyWord}`,
      success: res => {
        this.setData({
          courses: res.data.courses
        })
      }
    })
  }
})
