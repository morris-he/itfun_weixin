// pages/login/login.js
Page({
  data: {
    currentTab: 0,
    items: [{
      name: 'man',
      value: '男',
      checked: 'true'
    },
    {
      name: 'woman',
      value: '女'
    }
    ]
  },
  formSubmit_login: function (e) {
    console.log(e.detail.value)
    let data = {
      // 固定字段
      grant_type: 'password',
      client_id: 'c60de69e571fae852bea53e347a2be36503ebba84247a054cb7eb6549d161ac9',
      client_secret: 'd8491d666ee8749bc348eb25035ed0195dbd6cff586327ba9304013eb0d92734',
      // 自己的字段
      username: e.detail.value.username,
      password: e.detail.value.password
    }
    wx.request({
      url: 'https://itfun.tv/oauth/token',     //接口地址
      method: "POST",   //请求方式
      data: data,       //将第5行的data赋值给data
      success: function (res) {
        // 成功后将 res.data.access_token 数据存到 Storage ，并定义名字 access_token
        wx.setStorageSync('access_token', res.data.access_token)
        wx.setStorageSync('token_type', res.data.token_type)
        console.log(res.data)

        wx.switchTab({
          url: '../find/find'   // 跳转到首页
        })

      }
    })

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
  },
  
})