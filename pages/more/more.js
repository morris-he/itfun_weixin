// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url1:"https://itfun.tv/teachers",
    url2:'https://itfun.tv/about',
    url3:'https://itfun.tv/premiums',
    url4:'https://itfun.tv/trains#faq'
  },  

 exit: function(e) {
   wx.removeStorageSync('access_token')
   wx.removeStorageSync('token_type')

   wx.switchTab({
     url: '../find/find'   // 跳转到首页
   })
 }
})