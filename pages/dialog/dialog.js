// pages/dialog/dialog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow: true,/**语音输入和文字输入切换 */
    ishandel:false,
    // 触摸开始时间
    touchStartTime: 0,
    // 触摸结束时间
    touchEndTime: 0
  },
    // 按钮触摸开始触发的事件
    touchStart: function (e) {
        this.touchStartTime = e.timeStamp
    },
    // 按钮触摸结束触发的事件
    touchEnd: function (e) {
        this.touchEndTime = e.timeStamp
    },
    /**语音和文字切换 */
    changetext:function(e){
        var that = this;
        that.setData({
            isshow: !that.data.isshow
        })
    },
    /**发送图片或者拍图片 */
    showimg:function(e){
        var that = this
        wx.chooseVideo({
            sourceType: ['album', 'camera'],
            maxDuration: 60,
            camera: 'back',
            success: function (res) {
                that.setData({
                    src: res.tempFilePath
                })
            }
        })
    },
    /**显示表情 */
    showface:function(e){

    },
    /**点击隐藏复制、删除和撤回消息功能 */
    closehandle: function () {
        if (this.touchEndTime - this.touchStartTime < 350){
            this.setData({
                ishandel: false
            })
        }
    },
    /**长按功能复制、删除、撤回 */
    texthandle: function () {
        this.setData({
            ishandel: true
        })
    },
  
})
