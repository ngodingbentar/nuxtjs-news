<template>
  <div>
    <HeadingComp title="Stay Connected" />
    <SideSocialComp />
    <HeadingComp title="Subscribe" />
    <section class="subscribe">
      <h1 class="title">
        Subscribe to our New Stories
      </h1>
      <form action="">
        <input type="email" placeholder="Email Address...">
        <button>
          <i class="fa fa-paper-plane" /> SUBMIT
        </button>
      </form>
    </section>

    <section className="banner">
      <img src="https://res.cloudinary.com/dewaqintoro/image/upload/v1671977490/Ngodingbentar/news/sidebar-banner-new_efae7k.jpg" alt="">
    </section>

    <SideTiktokComp />

    <section class="catgorys">
      <HeadingComp title="Catgeorys" />
      <div v-for="item in catgeory" :key="item" class="category category1">
        <span>{{ item }}</span>
      </div>
    </section>

    <section class="gallery">
      <HeadingComp title="Gallery" />
      <slick
        ref="slick"
        :options="slickOptions"
      />
      <div v-for="(item, index) in gallery" :key="index" class="img">
        <img src='https://res.cloudinary.com/dewaqintoro/image/upload/v1671977483/Ngodingbentar/news/g1_s9lvau.jpg' alt="">
      </div>
    </section>
  </div>
</template>

<script>
import Slick from 'vue-slick'
import { gallery } from '~/assets/dummyData.js'

export default {
  components: {
    Slick
  },
  data () {
    return {
      gallery,
      catgeory: ['world', 'travel', 'sport', 'fun', 'health', 'fashion', 'business', 'technology'],
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  }
}
</script>

<style scoped>
/*------subscribe--------*/
.subscribe {
  border: 1px solid black;
  padding: 20px;
  text-align: center;
}
.subscribe h1 {
  text-align: left;
  font-size: 20px;
}
.subscribe input {
  width: 100%;
  padding: 10px;
}
.subscribe button {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #ff0000;
  color: #fff;
  font-weight: 600;
  border: none;
}
/*------subscribe--------*/
.banner {
  margin: 40px 0;
}
.catgorys .category1 {
  position: relative;
  margin-bottom: 20px;
  padding: 10px;
}
/*----------gallery----------*/
.gallery .img {
  width: 315px;
  height: 200px;
}
.gallery img {
  width: 315px;
  height: 200px;
  object-fit: cover;
}
/*----------gallery----------*/
@media screen and (max-width: 768px) {
  .gallery img,
  .gallery .img {
    width: 100%;
    height: 400px;
  }
}

</style>
