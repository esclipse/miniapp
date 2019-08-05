// pages/register/register.js;
import WxValidate from '../../utils/wxvalidate.js';
Page({

  /**
   * Page initial data
   */
  data: {
    form: {
      username: '',
      password: ''
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  // onLoad: function (options) {

  // },


  onLoad() {
    console.log('hello world test')
    // this.getuser()
    this.initValidate()//验证规则函数
  },

//onLoad中只有一个函数的写法
  // onLoad: function () {
  //   rules: { }
  //   messages: { }
  // },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

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

  },
  // validate
  showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false,
    })
  },
  //验证函数
  initValidate() {
    const rules = {
      name: {
        required: true,
        minlength: 2
      },
      phone: {
        required: true,
        tel: true
      }
    }
    const messages = {
      name: {
        required: '请填写姓名',
        minlength: '请输入正确的名称'
      },
      phone: {
        required: '请填写手机号',
        tel: '请填写正确的手机号'
      }
    }
    this.WxValidate = new WxValidate(rules, messages)
  },


 formSubmit: function (e) {
    console.log('form发生了submit事件，携带的数据为：', e.detail.value)
    const params = e.detail.value
    //校验表单
    if (!this.WxValidate.checkForm(params)) {
      const error = this.WxValidate.errorList[0]
      console.log(error,'error')
      this.showModal(error)
      return false
    }
    this.showModal({
      msg: '提交成功'
    })
 }
})