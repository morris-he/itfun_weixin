Page({
  data: {
    slide_courses:[],
    likes_courses:[],
    new_courses:[],
    recommended_courses:[],
    currentSwiper: 0,
    autoplay: true
  },
  swiperChange: function (e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  },
  // intervalChange: function (e) {
  //   this.setData({
  //     interval: e.detail.value
  //   })
  // },

  onLoad: function (options) {
    wx.request({
      url: 'https://itfun.tv/api/v1/home.json', 
      success: (res)=> {
        console.log(res)
        this.setData({
          slide_courses:res.data.slide_courses,
          likes_courses:res.data.likes_courses,
          new_courses:res.data.new_courses,
          recommended_courses:res.data.recommended_courses
        })
      }
    })
  },
})