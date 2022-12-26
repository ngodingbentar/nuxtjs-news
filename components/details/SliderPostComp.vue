<template>
  <section class="singlePopular">
    <div class="content">
      <slick
        ref="slick"
        :options="slickOptions"
      >
        <div v-for="(item, i) in popular" :key="i" class="items">
          <div class="box">
            <div class="images">
              <img src="https://res.cloudinary.com/dewaqintoro/image/upload/v1671977492/Ngodingbentar/news/pop6_vb1krw.jpg" alt="">
            </div>
            <div class="text">
              <h1 class="title">
                {{ item.title }}
              </h1>
            </div>
          </div>
        </div>
      </Slick>
    </div>
  </section>
</template>

<script>
import Slick from 'vue-slick'
import { popular } from '~/assets/dummyData.js'
export default {
  components: { Slick },
  data () {
    return {
      popular,
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  }
}
</script>

<style>
.singlePopular {
  overflow: hidden;
}
.singlePopular .box {
  width: 250px;
  height: 150px;
  position: relative;
  cursor: pointer;
}
.singlePopular img {
  width: 210px;
  height: 100px;
  border-radius: 5px;
}
.singlePopular .text {
  position: absolute;
  bottom: 30px;
  left: 0;
  padding: 10px;
  color: #fff;
}
.singlePopular .text h1 {
  font-size: 13px;
}

</style>
