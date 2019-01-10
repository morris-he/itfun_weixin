// pages/category/category.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    courses: [],
    height:0,
    categories: [],
  },
  swichNav: function(e) {
    console.log(e)
    var that = this;
    if (this.data.currentTab == e.target.dataset.index) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.index
      })
      wx.request({
        url: `http://itfun.tv/api/v1/categories/${e.target.dataset.slug}.json`,
        success: (res) => {
          var length= res.data.courses.length
          this.setData({
            courses: res.data.courses,
            height: 520 * length
          })
        }
      })
    }
  },//如果是当前页就不执行，不是当前页就请求读取当前页面

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
        url: `http://itfun.tv/api/v1/categories.json`,
        success: (res) => {
          console.log(res)
          this.setData({
            categories: res.data.categories
          })
        }
    })//获取每一页的data-slug的值，进行绑定
      wx.request({
        url: `http://itfun.tv/api/v1/categories/front_end.json`,
        success: (res) => {
          var length = res.data.courses.length
          this.setData({
            courses: res.data.courses,
            height: 520* length
          })
        }
      })//第一页要点击才显示

  },
  bindChange: function(e) {
    console.log(e)
    this.setData({
      currentTab: e.detail.current
    })//切换页面
    
  },
  stopTouchMove: function () {
    return false;
  }
})