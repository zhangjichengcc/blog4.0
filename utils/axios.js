import axios from 'axios'

const callApi = (url, method, data, isServer = false, options = {}) => {
  const opts = { ...options }
  return axios(Object.assign({}, {
    baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:5001/api/' : 'http://118.190.52.53/api/',
    url,
    method,
    params: method === 'get' ? data : {},  // 添加在请求URL后面的参数
    data: method !== 'get' ? data : {},    // 适用于 PUT POST PATCH
    withCredentials: false,                 // 请求时是否携带cookie
  }, opts)).then(res => res.data).catch(e => e)
}

export default {
  callApi,
  get: (url, data = {}, isServer) => callApi(url, 'get', data, isServer),
  put: (url, data = {}, isServer) => callApi(url, 'put', data, isServer),
  post: (url, data = {}, isServer) => callApi(url, 'post', data, isServer),
  delete: (url, data = {}, isServer) => callApi(url, 'delete', data, isServer),
}