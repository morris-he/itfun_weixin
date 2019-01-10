//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    slide_courses:[],
    recommended_courses:[],
    new_courses:[],
    likes_courses:[],
    currentSwiper: 0,
  },




  swiperChange(e){
    console.log(e)
    this.setData({
      currentSwiper: e.detail.current
    })
  },

// 读取数据
onLoad: function (options) {
  wx.request({
    url: 'https://itfun.tv/api/v1/home.json',
    success:(res)=> {
      console.log(res.data)
      this.setData({
        slide_courses: res.data.slide_courses,
        recommended_courses: res.data.recommended_courses,
        new_courses: res.data.new_courses,
        likes_courses: res.data.likes_courses
      })
    }
  })
  }
})
