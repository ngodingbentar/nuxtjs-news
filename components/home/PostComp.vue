<template>
  <div class="popularPost">
    <HeadingComp title="Popular Posts" />
    <div class="content">
      <slick
        ref="slick"
        :options="slickOptions"
      >
        <div v-for="item in ppost" :key="item.id" class="items">
          <div class="box shadow">
            <div class="images">
              <div class="img">
                <img src="https://res.cloudinary.com/dewaqintoro/image/upload/v1671952126/Ngodingbentar/news/popular/pop1_jlyncs.jpg" alt="">
              </div>
              <div class="category category1">
                <span>{{ item.catgeory }}</span>
              </div>
            </div>
            <div class="text">
              <h1 class="title">
                {{ item.title.slice(0, 40) }}...
              </h1>
              <div class="date">
                <font-awesome-icon :icon="['fas', 'calendar']" class="icon" />
                <label>{{ item.date }}</label>
              </div>
            </div>
          </div>
        </div>
      </slick>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick'
import { ppost } from '~/assets/dummyData.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export default {
  components: {
    Slick
  },
  data () {
    return {
      ppost,
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  },
  methods: {}
}
</script>

<style scoped>
.popularPost .box {
  margin: 15px 15px 15px 0;
}
.popularPost img {
  width: 100%;
  height: 100%;
}
.popularPost .text {
  padding: 20px;
}

</style>
