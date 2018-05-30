// pages/Bproject/projectlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setshow:false,
    on1:true,
    on2:false
  },
    //显示设置弹窗
  showsetting:function(){
      this.setData({
          setshow:!this.data.setshow 
      })
  },
  //切换
  shownow:function(){
      this.setData({
          on1: true,
          on2: false
      })
  },
  showover: function () {
      this.setData({
          on1: false,
          on2: true
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