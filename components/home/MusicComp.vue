<template>
  <section class="music">
    <HeadingComp title="Music News" />

    <div class="content">
      <slick
        ref="slick"
        :options="slickOptions"
      >
        <div v-for="(item, index) in popular" :key="index" class="items">
          <div class="box shadow flexSB">
            <div class="images">
              <div class="img">
                <img src="https://res.cloudinary.com/dewaqintoro/image/upload/v1671977486/Ngodingbentar/news/pop8_mtixkk.jpg" alt="">
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
              <p class="desc">
                {{ item.desc.slice(0, 250) }}...
              </p>
              <div class="comment">
                <i class="fas fa-share" />
                <label>Share / </label>
                <i class="fas fa-comments" />
                <label>{{ item.comments }}</label>
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
import { popular } from '~/assets/dummyData'

export default {
  components: {
    Slick
  },
  data () {
    return {
      popular,
      slickOptions: {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '0',
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 1
      }
    }
  }
}
</script>

<style scoped>
.music .box {
  margin-bottom: 30px;
  margin-left: 2px;
}
.music .text {
  padding: 0 30px;
}
.music .images {
  width: 320px;
  height: 220px;
}
.music img {
  width: 320px;
  height: 220px;
  object-fit: cover;
}
.music h1 {
  font-size: 22px;
}
@media screen and (max-width: 768px) {
  .music img,
  .music .images {
    height: 350px;
  }
}
</style>
