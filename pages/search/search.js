// pages/search/search.js
Page({
  data: {
    hot: [
      'Laravel', 'WorkerMan', 'HTML', 'CSS', 'JavaScript', 'ECMAScript 6',
      'Web', 'MySQL', 'React Native', 'Vue', 'React', 'WebPack', 'PHP',
      'Ruby On Rails'  
    ]
  },
  onLoad: function (options) {
    // this.search()
  },
  search(e){
    // console.log(e.detail.value)
    let keyWord = e.detail.value
    wx.navigateTo({
      url: `/pages/searched/searched?keyWord=${keyWord}`,
    })
  },
  searchHot(e){
    console.log(e.currentTarget.dataset.keyword)
    let keyWord = e.currentTarget.dataset.keyword
    wx.navigateTo({
      url: `/pages/searched/searched?keyWord=${keyWord}`,
    })
  }
})