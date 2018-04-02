const Promise = require('./bluebird'); //为了兼容问题

/**
 * 请求API接口
 * @param  {String} api    api 根地址
 * @param  {String} path   请求路径
 * @param  {Objece} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */
module.exports = function(api, path, params) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${api}/${path}`,
            data: Object.assign({}, params), //如果这里需要合并签名时间戳参数时候可以这么写
            header: { 'Content-Type': 'json' },
            success: (res) => {
                resolve(res.data)
            },
            fail: (err) => {
                reject(err)
            },
        });
    });
};