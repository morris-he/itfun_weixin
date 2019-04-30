// pages/about/about.js
// pages/about/about.js
Page({
  data: {
    url1: 'https://itfun.tv/premiums',
    url2: 'https://itfun.tv/about',
    url3: 'https://www.canon4ever.com/',
    url4: 'https://itfun.tv/trains',
    url5: 'https://itfun.tv//trains/frontend',
    url6: 'https://itfun.tv//trains/php'
  },
  onLoad: function (options) {

  },
  quit(){
    wx.showLoading({ title: '退出登陆中'})
    wx.removeStorageSync('access_token')
    wx.removeStorageSync('token_type')
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
})
