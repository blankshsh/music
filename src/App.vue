<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      commonParams: this.$store.state.commonParams,
      options: this.$store.state.options
    }
  },
  computed: {
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      // axios.post('/api/getDiscList', {
      //   platform: 'yqq',
      //   hostUin: 0,
      //   sin: 0,
      //   ein: 29,
      //   sortId: 5,
      //   needNewCode: 0,
      //   categoryId: 10000000,
      //   rnd: Math.random(),
      //   format: 'json'
      // }, {
      //   headers: {
      //     'Content-type': 'application/x-www-form-urlencoded'
      //   }
      // }).then(data => {

      // })
      let data = Object.assign({
        platform: 'yqq',
        hostUin: 0,
        sin: 0,
        ein: 29,
        sortId: 5,
        needNewCode: 0,
        categoryId: 10000000,
        rnd: Math.random(),
        format: 'json'
      }, this.commonParams)
      this.$store.dispatch('GetDiscList', data).then(data => {

      })

      this.$store.dispatch('GetJsonp', {
        url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
        data: Object.assign({}, {
          platform: 'h5',
          uin: 0,
          needNewCode: 1
        }, this.commonParams),
        options: this.options
      })
      // let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
      // let options = { param: 'jsonpCallback', prefix: 'jp' }
      // let data = Object.assign({}, {
      //   platform: 'h5',
      //   uin: 0,
      //   needNewCode: 1
      // }, this.commonParams)
      // console.log(jsonp(url, data, options))
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
