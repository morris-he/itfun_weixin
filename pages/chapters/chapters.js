// pages/chapters/chapters.js
const app = getApp();
Page({
  data: {
    chapter: {},
    chapters: [],
    course: {},
    showSide: false,
    body: ''
  },
  onLoad: function (options) {
    // console.log(options.id)
    let id = options.id
    wx.request({
      url: `https://itfun.tv/api/v1/chapters/${id}.json`,
      success: res => {
        console.log(res)
        let data = app.towxml.toJson(
          res.data.chapter.body,               // `markdown`或`html`文本内容
          'markdown'              // `markdown`或`html`
        );
        this.setData({
          chapter: res.data.chapter,
          chapters: res.data.chapters,
          course: res.data.course,
          body: data
        })
        console.log(this.data)
      }
    })
  },
  showSide(){
    this.setData({
      showSide: !this.data.showSide
    })
  },
  toCourse(e) {
    // console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/chapters/chapters?id=${id}`
    })
  }
})