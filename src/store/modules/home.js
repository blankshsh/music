import * as api from '@/common/api/home.js'

const home = {
  state: {

  },
  actions: {
    GetDiscList ({ commit }, data) {
      return new Promise((resolve, reject) => {
        api.getDiscList(data).then(data => {
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetJsonp ({ commit }, data) {
      return new Promise((resolve, reject) => {
        api.getJsonp(data).then(data => {
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default home
