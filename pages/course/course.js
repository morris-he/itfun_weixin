// pages/course/course.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    body: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let id = options.id
    const _ts = this;

    //请求markdown文件，并转换为内容
    wx.request({
      url: `https://itfun.tv/api/v1/chapters/${id}.json`,
      success: (res) => {
        //将markdown内容转换为towxml数据
        let data = app.towxml.toJson(
          res.data.chapter.body, // `markdown`或`html`文本内容
          'markdown' // `markdown`或`html`
        );
        //设置文档显示主题，默认'light'
        // data.theme = 'dark';

        //设置数据
        _ts.setData({
          body: data
        });
      }
    });
  }

})