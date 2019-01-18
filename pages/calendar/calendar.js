// pages/calendar/calendar.js
Page({
  data: {
    courses: []
  },
  onLoad: function () {
    this.init()
  },
  init(){
    wx.request({
      url: `https://itfun.tv/api/v1/calendar.json`,
      success: res => {
        // console.log(res)
        this.setData({
          courses: res.data.courses
        })
        console.log(this.data)
      }
    })
  }
})