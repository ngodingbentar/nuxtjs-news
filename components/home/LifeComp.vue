<template>
  <section class="popularPost life">
    <HeadingComp title="Life Style" />

    <div class="content">
      <slick
        ref="slick"
        :options="slickOptions"
      >
        <div v-for="(item, index) in lifestyle" :key="index" class="items">
          <div class="box shadow">
            <div class="images">
              <div class="img">
                <img src="https://res.cloudinary.com/dewaqintoro/image/upload/v1671977483/Ngodingbentar/news/life2_towmno.jpg" alt="">
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
                <i class="fas fa-calendar-days" />
                <label>{{ item.date }}</label>
              </div>
            </div>
          </div>
        </div>
      </slick>
    </div>
  </section>
</template>

<script>
import Slick from 'vue-slick'
import { lifestyle } from '~/assets/dummyData'

export default {
  components: {
    Slick
  },
  data () {
    return {
      lifestyle,
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  }
}
</script>
