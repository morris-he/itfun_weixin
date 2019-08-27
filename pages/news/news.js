// pages/news/news.js
Page({
  data: {
    notices: []
  },
  onLoad: function () {
    this.init()
  },
  init(){
    wx.request({
      url: `https://itfun.tv/api/v1/news.json`,
      success: res => {
        this.setData({
          notices: res.data.notices
        })
      }
    })
  },
  toIndex(){
    wx.navigateBack({
      delta: 1
    })
  },
  go(e){
    wx.navigateTo({
      url:  `../toWebview/toWebview?url=https://itfun.tv/news/${e.currentTarget.dataset.id}`,
    })
  }
})
