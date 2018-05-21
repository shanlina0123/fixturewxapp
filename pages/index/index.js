//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow:false,
    inputisshow:false
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
  /**删除自己的评论 */
  deletetext:function(){
    wx.showModal({
        title: '确认删除吗？',
    })
  },
  /** */
  bindconfirm:function(){
      this.setData({
          inputisshow: false
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
