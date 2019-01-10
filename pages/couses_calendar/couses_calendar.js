// pages/couses_calendar/couses_calendar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://itfun.tv/api/v1/calendar.json',
      success: (res) => {
        console.log(res.data.courses)
        this.setData({
          courses:res.data.courses
        })
      }
    })
  },
})