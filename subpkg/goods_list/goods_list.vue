<template>
  <view>
    <van-card :thumb-link="`/subpkg/goods_detail/goods_detail?id=${item.goods_id}`"
      :thumb="item.goods_small_logo|| defaultPic" v-for="item in goods" :key="item.goods_id"
      :price="item.goods_price |toFixed" :title="item.goods_name" />
  </view>
</template>

<script>
  import toast from '@/utils/toast.js'
  import {
    getGoodsList
  } from '@/api/goods.js'
  export default {
    data() {
      return {
        queryData: {
          query: '',
          cid: '',
          pagenum: 1,
          pagesize: 10
        },
        total: 0,
        goods: [],
        isLoading: false,
        // 默认的空图片
        defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png'
      };
    },
    methods: {
      async loadGoodsList(stopPullDown) {
        this.isLoading = true
        const {
          total,
          goods
        } = await getGoodsList(this.queryData)
        // console.log(res)
        this.isLoading = false
        this.total = total
        this.goods = [...this.goods, ...goods]
        stopPullDown && stopPullDown()
      }
    },
    onLoad({
      query
    }) {
      // console.log(query)
      this.queryData.query = query
      this.loadGoodsList()
    },
    // 下拉刷新
    onPullDownRefresh() {
      this.queryData = {
        query: this.queryData.query,
        cid: '',
        pagenum: 1,
        pagesize: 10
      }
      this.total = []
      this.total = 0
      this.loadGoodsList(() => {
        uni.stopPullDownRefresh()
      })
    },
    // 触底刷新
    onReachBottom() {
      if (this.queryData.pagenum * this.queryData.pagesize >= this.total) return toast('亲，没有更多数据了')
      if (this.isLoading) return
      this.queryData.pagenum++
      this.loadGoodsList()
    }

  }
</script>

<style lang="scss">

</style>
