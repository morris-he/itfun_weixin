// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chapters:[],
    course:{},
    tags:[],
    relation_courses:[],
    teacher:{},
    index:'',
    isFold: true,
  },
  showAll: function (e) {
    this.setData({
      isFold: !this.data.isFold,
    })
  },
  onLoad: function (options) {
    console.log(options)
    let id = options.id
    wx.request({
      url: `https://itfun.tv/api/v1/courses/${id}.json`,
      success: (res) => {
        console.log(res.data)
        this.setData({
          chapters: res.data.chapters,
          course: res.data.course,
          tags:res.data.course.tags,
          relation_courses: res.data.relation_courses,
          teacher: res.data.teacher
        })
      }
    })
  },

})