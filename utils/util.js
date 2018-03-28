const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const Toast = {
    warn: function(val) {
        wx.showToast({
            title: val,
            icon: 'none',
            duration: 2000,
            mask: true
        })
    },
    loading: function() {
        wx.showToast({
            icon: 'loading',
            duration: 2000,
            mask: true
        })
    },
    success: function(val) {
        wx.showToast({
            title: val,
            icon: 'success',
            duration: 1500,
            mask: true
        })
    },
    error: function(val) {
        wx.showToast({
            title: val,
            image: '/images/others/icon-error.png',
            duration: 1500,
            mask: true
        })
    },
    alert: function(param) {
        wx.showModal({
            content: param,
            showCancel: false
        })
    },
    showLoading: function(param = "Loading") {
        wx.showLoading({
            title: param,
            mask: true
        });
    },
    hideLoading: function() {
        setTimeout(() => {
            wx.hideLoading();
        }, 100);
    },
    showModal:function (param="msg") { 
        wx.showModal({
            title: "",
            content: param,
            showCancel: false
        });
     }
}
module.exports = {
  formatTime,
  Toast
}
