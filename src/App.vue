<style lang="less">
* {
  padding: 0;
  margin: 0
}
.recommend {
  .recommendList{
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    li {
      cursor: pointer;
    }
  }
}
</style>

<template>
  <div id="app">
    <div class="recommend">
      <h1>歌单推荐</h1>
      <ul class="recommendList">
        <li v-for="(item, i) in recommendList"
            :key="i"
            @click="getRecommend(item)">
          {{item.title}}
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      commonParams: this.$store.state.commonParams,
      options: this.$store.state.options,
      recommendParams: {
        params: {
          g_tk: 256735250,
          loginUin: 3119171357,
          hostUin: 0,
          format: 'json',
          inCharset: 'utf8',
          outCharset: 'utf-8',
          notice: 0,
          platform: 'yqq.json',
          needNewCode: 0
        },
        common: {
          playlist: {
            method: 'get_playlist_by_category',
            module: 'playlist.PlayListPlazaServer',
            param: {
              curPage: 1,
              id: 3317,
              order: 5,
              size: 40,
              titleid: 3317
            }
          }
        }
      },
      recommendList: [
        {
          title: '为你推荐',
          code: 'recomPlaylist',
          data: {
            recomPlaylist: {
              method: 'get_hot_recommend',
              param: { async: 1, cmd: 2 },
              module: 'playlist.HotRecommendServer'
            }
          }
        },
        { title: '官方歌单', id: 3317 },
        { title: '情歌', id: 71 },
        { title: '网络歌曲', id: 3056 },
        { title: '经典', id: 59 },
        { title: 'KTV热歌', id: 64 }
      ]
    }
  },
  computed: {
  },
  created () {
    // this.init()
    // this.list()
  },
  methods: {
    getRecommend (item) {
      let params = Object.assign({
        '-': 'recom' + (Math.random() + '').replace('0.', '')
      }, this.recommendParams.params)
      if (item.data) {
        params.data = JSON.stringify({
          comm: { ct: 24 },
          ...item.data
        })
      } else {
        params.data = JSON.stringify({
          comm: { ct: 24 },
          ...Object.assign({
            id: item.id,
            titleid: item.id
          }, this.recommendParams.common)
        })
      }
      this.$store.dispatch('GetJsonp', {
        url: 'https://u.y.qq.com/cgi-bin/musicu.fcg',
        data: params
      }).then(() => {

      })
    },
    init () {
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
