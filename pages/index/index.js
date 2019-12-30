
Page({
  data: {
    slide_courses: [],
    new_courses: [],
    likes_courses: [],
    recommended_courses: [],
    sliderIndex: 0
  },
  onLoad: function () {
    wx.request({
      url: `https://itfun.tv/api/v1/home.json`,
      success:(res)=> {
        this.setData({
          slide_courses: res.data.slide_courses,
          new_courses: res.data.new_courses,
          likes_courses: res.data.likes_courses,
          recommended_courses: res.data.recommended_courses
        })
      }
    })
  },
  changeDots(e){ 
    console.log(e)   
    this.setData({
      sliderIndex: e.detail.current
    })
  },

  // 首页顶部跳转部分
  toNews(e) {
    console.log(e)
    wx.navigateTo({
      url: `/pages/news/news`,
    })
  },
  toAbout(){
    wx.navigateTo({
      url: `/pages/about/about`,
    })
  },
  toSearch() {
    wx.navigateTo({
      url: `/pages/search/search`,
    })
  }
})
