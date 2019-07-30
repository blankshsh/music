import fetch from './fetch'

export function getDiscList (params) {
  return fetch({
    url: '/api/getDiscList',
    method: 'get',
    params
  })
}
