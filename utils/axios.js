import axios from 'axios'

const callApi = (url, method, data, options = {}) => {
  const opts = { ...options }
  return axios(Object.assign({}, {
    baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:5001/api/' : 'http://118.190.52.53/api/',
    url,
    method,
    params: method === 'get' ? data : {},  // 添加在请求URL后面的参数
    data: method !== 'get' ? data : {},    // 适用于 PUT POST PATCH
    withCredentials: true,                 // 请求时是否携带cookie
  }, opts)).then(res => res.data).catch(e => e)
}

export default {
  callApi,
  get: (url, data = {}) => callApi(url, 'get', data),
  put: (url, data = {}) => callApi(url, 'put', data),
  post: (url, data = {}) => callApi(url, 'post', data),
  delete: (url, data = {}) => callApi(url, 'delete', data),
}