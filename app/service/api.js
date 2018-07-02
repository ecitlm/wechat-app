import {
  API_DOMAIN
} from './api.config'
const fetch = require('./fetch')
/**
 * @param  {String} 接口地址
 * @param  {Objece} params 接口参数参数
 */
function fetchApi (action, params) {
  return fetch(API_DOMAIN, action, params)
}

/**
 * 用户登录接口
 * @param {object} 接口参数
 * @returns
 */
function Login (params) {
  return fetchApi('User/login', params).then(res => res.data)
}

module.exports = {
  Login
}
