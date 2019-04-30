// pages/login/login.js
Page({
  data: {
    buttonData: ['登录', '会员注册'],
    currentIndex: 0,
    radioData: [{
        name: '男',
        value: 1
      },
      {
        name: '女',
        value: 2
      },
      {
        name: '其他',
        value: 3
      }
    ],

    error_email: '',
    error_password: ""

  },
  onLoad: function() {},
  change(e) {
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    })
  },
  login(e) {
    console.log(e)
    const data = {
      grant_type: 'password',
      client_id: 'c60de69e571fae852bea53e347a2be36503ebba84247a054cb7eb6549d161ac9',
      client_secret: 'd8491d666ee8749bc348eb25035ed0195dbd6cff586327ba9304013eb0d92734',
      username: e.detail.value.user,
      password: e.detail.value.password
    }
    wx.request({
      url: `https://itfun.tv/oauth/token`,
      method: 'POST',
      data: data,
      success: res => {
        wx.setStorageSync('token_type', res.data.token_type, )
        wx.setStorageSync('access_token', res.data.access_token)
        if (res.statusCode === 200) {
          wx.switchTab({
            url: '/pages/mine/mine'
          })
        } else {
          wx.removeStorageSync('access_token')
          wx.removeStorageSync('token_type')
          wx.showModal({
            title: '登录信息有误',
            content: '请重新登录',
          })
        }
      }
    })
  },

  register(e) {
    const user = {
      user: {
        last_name: e.detail.value.last_name,
        first_name: e.detail.value.first_name,
        email: e.detail.value.email,
        password: e.detail.value.password,
        sex: e.detail.value.sex ? e.detail.value.sex:3
      }
    }
    console.log(user)
    wx.request({
      url: `https://itfun.tv/api/v1/users.json`,
      method: 'post',
      data: user,
      success: res => {
        console.log(res)
        if (res.statusCode == 200) {
          wx.setStorageSync('token_type', res.data.token_type)
          wx.setStorageSync('access_token', res.data.access_token)
          wx.showModal({
            title: '注册成功',
            content: '快去学习吧~',
            showCancel:false,
            success(res) {
              if (res.confirm) {
                wx.switchTab({
                  url: '/pages/mine/mine'
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        } else {
          let errors = res.data.errors
          console.log(errors)
          this.setData({
            error_email: errors.email ? "* "+errors.email:'',
            error_password: errors.password ? "* " +errors.password : ''
          })
        }
      }
    })
  },

  toIndex() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
})
