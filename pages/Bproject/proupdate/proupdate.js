// pages/Bproject/proupdate.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        maxlength: 300,
        nowlength: 0
    },
    //跟踪输入的文字数字改变
    textareachange: function (e) {
        var value = e.detail.value,length = parseInt(value.length);
        if(length > this.data.maxlength){
            return;
        }else{
            this.setData({
                content:value,
                nowlength:length
            })
        }
    },
    //上传普通照片
    uploadimg:function(){
        wx.chooseImage({
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {}
        })
    },
    //上传视频
    uploadvideo:function(){
        var that = this;
        wx.chooseVideo({
            sourceType: ['album', 'camera'],
            maxDuration: 6,
            camera:'back',
            success:function(res){
                that.setData({
                    videosrc:res.tempFilePath
                })
            }
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
