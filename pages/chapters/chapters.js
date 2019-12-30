// pages/chapters/chapters.js
const app = getApp();
Page({
  data: {
    chapter: {},
    chapters: [],
    course: {},
    showSide: false,
    body: '',
    chapter_id:''
  },
  onLoad: function (options) {
    let id = options.id
    console.log(id)
    this.setData({
      chapter_id:id
    })
    wx.request({
      url: `https://itfun.tv/api/v1/chapters/${id}.json`,
      success: res => {
        let data = app.towxml.toJson(
          res.data.chapter.body,               // `markdown`或`html`文本内容
          'markdown'              // `markdown`或`html`
        );
        this.setData({
          chapter: res.data.chapter,
          chapters: res.data.chapters,
          course: res.data.course,
          body: data,
        })
      }
    })
  },
  showSide(){
    this.setData({
      showSide: !this.data.showSide
    })
  },
  toCourse(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/chapters/chapters?id=${id}`
    })
  }
})
