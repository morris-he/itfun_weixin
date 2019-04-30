// pages/courses/courses.js
Page({
  data: {
    course: {},
    chapters: [],
    teacher: {},
    relation_courses: [],
    isShow: false
  },
  onLoad: function (options) {
    let id = options.id
    wx.request({
      url: `https://itfun.tv/api/v1/courses/${id}.json`,
      success: res => {
        console.log(res)
        this.setData({
          course: res.data.course,
          chapters: res.data.chapters,
          teacher: res.data.teacher,
          relation_courses: res.data.relation_courses
        })
      }
    })
  },
  toCourse(e){
    // console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/courses/courses?id=${id}`
    })
  },
  changeBody(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  toChapters(e){
    console.log(e)
    let id = e.currentTarget.dataset.item.id
    // console.log(id)
    if(e.currentTarget.dataset.item.publish === false){
      wx.showModal({
        title: '观看失败',
        content: '该课程还未发布！',
        confirmText:'再等等~',
        confirmColor:"#1F99B0"
      })
    }else{
      wx.navigateTo({
        url: `/pages/chapters/chapters?id=${id}`
      })
    }
  }
})
