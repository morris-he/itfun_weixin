// pages/lesson/lesson.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notices:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://itfun.tv/api/v1/news.json',
      success: (res) => {
        console.log(res.data.notices)
        this.setData({
          notices: res.data.notices
        })
      }
    })
  }
})