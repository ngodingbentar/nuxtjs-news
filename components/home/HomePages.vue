<template>
  <div>
    <heroComp />
    <HomeComp />
    <DiscoverComp />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      cnnEkonomi: [],
      cnnTeknologi: [],
      cnnOlahraga: [],
      cnnHiburan: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.fetchEkonomi()
      this.fetchTeknologi()
      this.fetchOlahraga()
      this.fetchHiburan()
    },
    async fetchEkonomi () {
      const data = await axios.get('https://berita-indo-api.vercel.app/v1/cnn-news/ekonomi')
      this.cnnEkonomi = data.data
      console.log('cnnEkonomi: ', this.cnnEkonomi)
    },
    async fetchTeknologi () {
      const data = await axios.get('https://berita-indo-api.vercel.app/v1/cnn-news/teknologi')
      this.cnnTeknologi = data.data
      console.log('cnnTeknologi: ', this.cnnTeknologi)
    },
    async fetchOlahraga () {
      const data = await axios.get('https://berita-indo-api.vercel.app/v1/cnn-news/olahraga')
      this.cnnOlahraga = data.data
      console.log('cnnOlahraga: ', this.cnnOlahraga)
    },
    async fetchHiburan () {
      const data = await axios.get('https://berita-indo-api.vercel.app/v1/cnn-news/hiburan')
      this.cnnHiburan = data.data
      console.log('cnnHiburan: ', this.cnnHiburan)
    }
  }
}
</script>
