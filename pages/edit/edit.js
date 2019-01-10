// pages/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  sex:"女性"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
// 性别切换卡
  chooseSex: function () {
    let itemList = ['男性', '女性'];
    wx.showActionSheet({
      itemList: itemList,
      success:(res)=> {
        this.setData({
          sex: itemList[res.tapIndex]
        })
      },
      fail:  (res)=> {
        console.log(res.errMsg)
      }
    })
  },
// 提交表单
  bindFormSubmit: function (e) {
    console.log(e)
  }
})