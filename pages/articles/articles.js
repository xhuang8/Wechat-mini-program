// pages/articles/articles.js
var config = require("../../articles.js");
var app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.title = options.type || 'Event Details';
    var that = this;
	  that.setData({article:config.articles[options.id-1]});
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
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

  },

  /**
     * 用户点击右上角分享
     */
    onBindblur: function (e) {
        console.log(e.detail.value);
    },

    onBindConfirm: function (event) {
        wx.navigateTo({
            // url: '../index/index?text=' + event.detail.value
            url: '../index/index?text='
        })
    }

})