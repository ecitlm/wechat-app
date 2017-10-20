const fetch = require('./fetch')
const API_DOMAIN = "https://api.it919.cn/"


/**
 * @param  {String} 接口地址   
 * @param  {Objece} params 接口参数参数
 */
function fetchApi(api, params) {
    return fetch(API_DOMAIN, api, params)
}



/**
 * 用户登录接口
 * @returns 
 */
function Login(params) {
    return fetchApi('User/login', params)
        .then(res => res.data)
}

