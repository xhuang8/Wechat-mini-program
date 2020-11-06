//index.js

//获取应用实例
const app = getApp()

Page({
  //轮播
  data: { 
    movies:[  
      {url:'http://usjus.org/wp-content/uploads/2016/10/1080418.jpg'} ,  
      {url:'http://usjus.org/wp-content/uploads/2016/10/header.jpg'} ,  
      {url:'http://usjus.org/wp-content/uploads/2016/10/organizations03.png'}  
    ], 
    //事件
    notice: [
      {
        "id": 1,
        "image": "http://usjus.org/wp-content/uploads/2020/01/WeChat-Image_20200110170628-150x150.jpg", 
        "title": "USJ The 4th USJ Education Annual Meeting and 2020 New Year Reception Topic： AI and Community Economy",
        "desc": "USJ The 4th USJ Education Annual Meeting ..."
      },
      {
        "id": 2,
        "image": "http://usjus.org/wp-content/uploads/2019/11/WeChat-Image_20191120133108-150x150.jpg", 
        "title": "USJ Non-Profit Activities: 2020 H1B Bootcamp ",
        "desc": "USJ Non-Profit Activities: 2020 H1B Bootcamp Expert Opinion ..."
      },
      {
        "id": 3,
        "image": "http://usjus.org/wp-content/uploads/2019/11/PDA1107-150x150.jpg", 
        "title": "PDA Startup Workshop Event #6 ",
        "desc": "PDA Startup Workshop Event #6 was successfully hold at the Afternoon of Nov 2,2019 ..."
      }
    ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //四个图标
    navs: [
      {
        url: '/pages/course/course',
        image: '/images/i1.png',
        text: 'Courses'
      }, 
      {
        url: '/pages/tdetails/tdetails',
        image: '/images/i2.png',
        text: 'Instructors'
      },
      {
        url: '/pages/history/history',
        image: '/images/i3.png',
        text: 'History'
      },
      {
        url: '/pages/contact/contact',
        image: '/images/i4.png',
        text: 'Contact'
      }
    ]
  },
  
  //点击四个图标
  gotopage: function(event) {
    wx.reLaunch({
      url: event.currentTarget.dataset.hi
    });
  },

  moreurl:function(){
    wx.reLaunch({
      url: "/pages/course/course"}); 
   },

  go: function(event) {
    wx.navigateTo({
      url: '../list/index?type=' + event.currentTarget.dataset.type
    })
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  onPullDownRefresh(){
    console.log("Pull down refresh！！！！");
    wx.showNavigationBarLoading();
    /* 在这里重新加载页面数据 */
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
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

