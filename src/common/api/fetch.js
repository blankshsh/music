import axios from 'axios'
import qs from 'qs'

const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 6000
})

service.interceptors.request.use(config => {
  config.method === 'post'
    ? config.data = qs.stringify({ ...config.data })
    : config.params = { ...config.params }
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    if (response.data.result === 'TRUE') {
      return response.data
    } else {
      // app.$vux.toast.show({
      //   type: 'warn',
      //   text: response.data.data.msg
      // })
    }
  },
  error => {
    console.log('error')
    console.log(error)
    console.log(JSON.stringify(error))
    // let text = JSON.parse(JSON.stringify(error)).response.status === 404
    //   ? '404'
    //   : '网络异常，请重试'
    return Promise.reject(error)
  }
)
export default service
