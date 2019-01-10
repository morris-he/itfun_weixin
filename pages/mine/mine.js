// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{},
    // tab切换 
    currentTab: 0,
    id:''
  },

  onLoad: function () {
    let access_token = wx.getStorageSync('access_token')  //定义token为storage缓存的token
    let token_type = wx.getStorageSync('token_type')
    if (access_token) {
      wx.request({
        url: 'https://itfun.tv/api/v1/users/me.json',
        header: {
          'Authorization': `${token_type} ${access_token}`
        },
        success: (res) => {
          console.log(res.data.user)
          this.setData({
            user: res.data.user,
            id: res.data.user.id
          })
          console.log(this.data.id)
          
        }
      })
    } else {
      wx.redirectTo({
        url: '../login/login'
      })
    }
  },

  bindChange: function (e) {
    this.setData({ currentTab: e.detail.current });
  },

  swichNav: function (e) {
    var that = this
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})