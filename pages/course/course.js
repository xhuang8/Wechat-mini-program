// pages/course/course.js
var config = require("../../lists.js");

Page({

  /**
   * Page initial data
   */
  data: {
    //轮播
    movies:[  
      {url:'http://usjus.org/wp-content/uploads/2016/10/1080418.jpg'} ,  
      {url:'http://usjus.org/wp-content/uploads/2016/10/header.jpg'} ,  
      {url:'http://usjus.org/wp-content/uploads/2016/10/organizations03.png'}  
    ], 
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.title = options.type || 'Course Introduction';
    this.setData({courses:config.courses});
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.title
    })
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})