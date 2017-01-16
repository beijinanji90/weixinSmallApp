//index.js
//获取应用实例
var common = require("../index/common.js")
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    id:"1234",
    condition:true,
    a:2,
    b:3,
    c:12,
    array:[
      {message:"abc"},
      {message:"def"}
    ],

    objectArray: [
      {id: 5, unique: 'unique_5'},
      {id: 4, unique: 'unique_4'},
      {id: 3, unique: 'unique_3'},
      {id: 2, unique: 'unique_2'},
      {id: 1, unique: 'unique_1'},
      {id: 0, unique: 'unique_0'},
    ],
    numberArray: [1, 2, 3, 4],

    item: 
    {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
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
  },
  helloMINA: function(){
    common.sayHello("MINA");
  },
  goodByeMINA: function(){
    common.sayGoodbye("MINA");
  },
  tapTemplate: function(event){
    console.log(event);
  },
  switch: function(e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function(e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{id: length, unique: 'unique_' + length}].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function(e){
    this.data.numberArray = [ this.data.numberArray.length + 1 ].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
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

