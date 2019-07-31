import fetch from '../utils/fetch'
import jsonp from '../utils/jsonp'

export function getDiscList (params) {
  return fetch({
    url: '/api/getDiscList',
    method: 'get',
    params
  })
}

export function getJsonp (data) {
  return jsonp(data.url, data.data, data.options)
}
