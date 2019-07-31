import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home
  },
  state: {
    options: { param: 'jsonpCallback', prefix: 'jp' },
    commonParams: {
      g_tk: 1928093487,
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      format: 'jsonp'
    }
  }
})
