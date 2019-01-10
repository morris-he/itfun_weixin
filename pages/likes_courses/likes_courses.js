
Page({

  /**
   * 页面的初始数据
   */
  data: {
    like_courses: [],
    like_chapters:[],
    // tab切换 
    currentTab: 0
  },
  onLoad: function () {
    let access_token = wx.getStorageSync('access_token')  //定义token为storage缓存的token
    let token_type = wx.getStorageSync('token_type')
    if (access_token) {
      wx.request({
        url: `https://itfun.tv/api/v1/users/like_courses.json`,
        header: {
          'Authorization': `${token_type} ${access_token}`
        },
        success: (res) => {
          console.log(res.data)
          this.setData({
            like_courses: res.data.like_courses
          })
        }
      })
      wx.request({
        url: `https://itfun.tv/api/v1/users/like_chapters.json`,
        header: {
          'Authorization': `${token_type} ${access_token}`
        },
        success: (res) => {
          console.log(res.data.like_chapters)
          this.setData({
            like_chapters: res.data.like_chapters
          })
        }
      })
    } else {
      wx.redirectTo({
        url: '../login/login'
      })
    }
  },


  bindChange: function (e) {
    // var that = this;
    this.setData({ currentTab: e.detail.current });
  },

  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})