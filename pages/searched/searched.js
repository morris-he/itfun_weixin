// pages/searched/searched.js
Page({
  data: {
    courses: []
  },
  onLoad: function (options) {
    console.log(options)
    let keyWord = options.keyWord
    wx.request({
      url: `https://itfun.tv/api/v1/search.json?q=${keyWord}`,
      success: res => {
        console.log(res)
        this.setData({
          courses: res.data.courses
        })
      }
    })
  }
})