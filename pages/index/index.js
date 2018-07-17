//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow:false,
    inputisshow:false,
    imgnumber:1,
    videonumber:0,
    videoshow:false
  },
  /**显示点赞和评论按钮 */
  showimage:function(e){
      var that = this;
      if (!that.data.isshow)
      {
          that.setData({
              isshow : true
          })
      }else{
          that.setData({
              isshow : false
          })
      }
  },
  /**点击评论显示评论输入框 */
  showinput:function(){
      var that = this;
      if (!that.data.inputisshow) {
          that.setData({
              inputisshow: true,
              isshow:false
          })
      } else {
          that.setData({
              inputisshow: false
          })
      }
  },
  /**关闭输入框 */
  closeinput:function(){
    this.setData({
        inputisshow: false
    })
  },
  /**B端删除动态 */
  isdelete:function(){
    wx.showModal({
        title: '确认删除吗？',
    })
  },
  /** 键盘上完成按钮的回调*/
  bindconfirm:function(){
      this.setData({
          inputisshow: false
      })
  },
  /**回复和删除评论*/
  backtext:function(){
      this.setData({
          inputisshow: true
      })
  },
  /**打开视频播放 */
  showvideo: function (e) {
      this.setData({
          videoshow: true
      })
  },
  closevideo:function(e){
      this.setData({
          videoshow: false
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      if (options.pageid){
          wx.navigateTo({
              url: '../projectdetail/projectdetail?pageId=' + options.pageId,
          })
      }
  },
  //触摸开始时间
  touchStartTime:0,
  // 触摸结束时间
  touchEndTime:0,
  /// 按钮触摸开始触发的事件
  mytouchstart: function (e) {
      this.touchStartTime = e.timeStamp
  },
  /// 按钮触摸结束触发的事件
  mytouchend: function (e) {
      this.touchEndTime = e.timeStamp
  },
  /// 单击
  backtext: function (e) {
      var that = this;
      var times = parseInt(that.touchEndTime) - parseInt(that.touchStartTime);
      if (times<350){
          that.setData({
              inputisshow: true
          })
      }else{
          wx.showModal({
              title: '确认删除吗？',
          })
      }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
