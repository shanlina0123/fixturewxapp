// pages/Bproject/projectlist.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        setshow: false,
        on1: true,
        on2: false,
        modalFlag: true,
        sharebgimg: ''
    },
    //显示设置弹窗
    showsetting: function () {
        this.setData({
            setshow: !this.data.setshow
        })
    },
    //隐藏弹窗
    closepop: function () {
        this.setData({
            setshow: false
        })
    },
    //弹窗删除
    deletepro: function () {
        this.setData({
            setshow: false
        })
        wx.showModal({
            title: '确认删除吗？',
        })
    },
    //是否公开项目
    switch1Change: function (e) {
        if (e.detail.value) {
            wx.showToast({
                title: '项目已公开',
            })
        } else {
            wx.showToast({
                title: '项目公开已关闭',
            })
        }
        this.setData({
            setshow: false
        })
    },
    //项目完工
    overpro: function () {
        wx.showToast({
            title: '设置完工成功',
        })
        this.setData({
            setshow: false
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
    showerweima: function () {
        this.setData({
            modalFlag: false
        })
    },
    //隐藏永久二维弹窗
    modalOk: function () {
        this.setData({
            modalFlag: true
        })
    },
    //点击获取生成图片
    comtoimg: function () {

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //显示分享按钮
        wx.showShareMenu({
            withShareTicket: true
        });
        wx.getImageInfo({
            src: 'https://fixture.yygsoft.com/uploads/default/wx/projectbg.png',
            success: function (res) {
                const ctx = wx.createCanvasContext('shareCanvas');
                //绘制底图
                ctx.drawImage(res.path, 0, 0, 285, 398);
                //绘制文字
                ctx.setTextAlign("center");
                ctx.setFillStyle("#0c0a0a");
                ctx.setFontSize(22);
                ctx.fillText("积木家",285/2,90);
                //绘制二维码
                ctx.draw();
            }
        })
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