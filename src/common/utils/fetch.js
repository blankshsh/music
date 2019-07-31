import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_URL,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  timeout: 6000
})

service.interceptors.request.use(config => {
  console.log(config)
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response.data
}, error => {
  console.log(error)
  console.log(JSON.stringify(error))
  return Promise.reject(error)
})
export default service
