// pages/mine/mine.js
Page({
  data: {
    access_token: '',
    navData:['我的主页','喜欢的课程','观看历史'],
    currentIndex: 0,
    user: {},
    likeCourse: [],
    learned: []
  },
  onLoad: function () {
    this.getUser()
  },
  onShow: function () {
    this.getUser()
  },
  toLogin(){
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },
// 判断用户是否登录，未登录则不执行加载
  getUser(){
    let token_type = wx.getStorageSync('token_type')
    let access_token = wx.getStorageSync('access_token')
    this.setData({
      access_token: access_token
    })
    if (access_token) {
      wx.request({
        url: `https://itfun.tv/api/v1/users/me.json`,
        header: {
          'Authorization': `${token_type} ${access_token}`
        },
        success: res => {
          if (res.statusCode === 401) {
            wx.removeStorageSync('access_token')
            wx.removeStorageSync('token_type')
            wx.navigateTo({
              url: '/pages/login/login'
            })
            return
          }
          this.setData({
            user: res.data.user,
            access_token: access_token
          })
          this.getLikeCourse()
          this.getLearnings()
        }
      })
    } else {
      return false
    }
  },

  getLikeCourse(){
    let token_type = wx.getStorageSync('token_type')
    let access_token = wx.getStorageSync('access_token')
    wx.request({
      url: `https://itfun.tv/api/v1/users/like_courses.json`,
      header: {
        'Authorization': `${token_type} ${access_token}`
      },
      success: res => {
        this.setData({
          likeCourse: res.data.courses
        })
      }
    })
  },

  getLearnings(){
    let token_type = wx.getStorageSync('token_type')
    let access_token = wx.getStorageSync('access_token')
    wx.request({
      url: `https://itfun.tv/api/v1/users/learnings.json`,
      header: {
        'Authorization': `${token_type} ${access_token}`
      },
      success: res => {
        this.setData({
          learned: res.data.courses
        })
      }
    })
  },

  changeNav(e){
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    })
  },
  changItem(e){
    this.setData({
      currentIndex: e.detail.current
    })
  }
})