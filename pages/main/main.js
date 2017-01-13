//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onPullDownRefresh:function(){
    console.log("下拉了");
  },
  onReachBottom:function(){
    console.log("触底了");
  },
  onShow:function(){
    console.log("显示了");
  },
  //分享
  onShareAppMessage:function(){
    return {
      title:"自定义分享标题",
      desc:"自定义分享描述",
      path:"pages/main/main"
    }
  },
  //viewTap
  viewTap:function(){
    wx.navigateTo({
      url: '../logs/logs',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    console.log("viewTap");
  }
})

App({
  onLaunch: function () {
    console.log(app.globalData);
    console.log("chenfenglong-onLauch");
  },
  onShow: function () {
    console.log("chenfenglong-onShow");
  },
  onHide: function () {
    console.log("chenfenglong-onHide");
  },
  onError: function (msg) {
    console.log("chenfenglong-onError");
  }
})

