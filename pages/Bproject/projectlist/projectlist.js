// pages/Bproject/projectlist.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        setshow: false,
        on1: true,
        on2: false,
        modalFlag:true
    },
    //显示设置弹窗
    showsetting: function () {
        this.setData({
            setshow: !this.data.setshow
        })
    },
    //切换
    shownow: function () {
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
    //分享给微信好友
    onShareAppMessage: function (res) {
        if (res.from === 'button') {
            // 来自页面内转发按钮
        }
        return {
            title: '当直播遇上装修，会发生什么？',
            path: '/pages/index/index?pageid=111',
            success: function (res) {
                // 转发成功
            },
            fail: function (res) {
                // 转发失败
            }
        }
    },
    //显示永久二维码
    showerweima:function(){
        this.setData({
            modalFlag: false
        })
    },
    //隐藏永久二维弹窗
    modalOk: function(){
        this.setData({
            modalFlag: true
        })
        //http://m.qpic.cn/psb?/V13O0eLb4OHVil/QxOSf.tV.HPyc1gPtoQFp6DV3sVoBAbv6LBb6FuIvA8!/b/dDABAAAAAAAA&bo=6AN0BQAAAAADB7g!&rf=viewer_4
    },
    //点击获取生成图片
    comtoimg:function(){

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.showShareMenu({
            withShareTicket: true
        });
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

    }

})