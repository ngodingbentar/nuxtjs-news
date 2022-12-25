<template>
  <div class="hero">
    <div class="container">
      <div v-for="item in hero" :key="item.id" class="box">
        <div class="img">
          <img :src="item.cover" alt="">
        </div>
        <div class="text">
          <span class="category">{{ item.catgeory }}</span>
          <NuxtLink to="/wadudu">
            <h1 class="titleBg">
              {{ item.title }}
            </h1>
          </NuxtLink>
          <div class="author flex">
            <span>by {{ item.authorName }} </span>
            <span>{{ item.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { hero } from '~/assets/dummyData.js'

export default {
  data () {
    return {
      hero
    }
  },
  methods: {
    cek () {
      console.log('cek', this.hero)
    }
  }
}

</script>

<style>
.hero {
  margin: 30px 0;
  color: #fff;
}
.hero a {
  color: #fff;
}
.hero .box {
  position: relative;
  padding: 30px;
}
.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.hero .container {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 6.6vh);
  grid-gap: 10px;
}
.hero .box:nth-child(1) {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 9;
}
.hero .box:nth-child(2) {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 5;
}
.hero .box:nth-child(3) {
  grid-column-start: 5;
  grid-column-end: 7;
  grid-row-start: 5;
  grid-row-end: 9;
}
.hero .box:nth-child(4) {
  grid-column-start: 7;
  grid-column-end: 9;
  grid-row-start: 5;
  grid-row-end: 9;
}
.hero .text h1 {
  font-weight: 500;
  margin: 10px 0;
  font-size: 15px;
}
.hero .author span {
  font-size: 14px;
  margin-right: 20px;
}
.hero .text {
  position: absolute;
  bottom: 30px;
}

.wadudu {
  background: #0b9931;
}

.hero .box:nth-child(1) h1 {
  font-size: 28px;
}
.hero .box:nth-child(1) .category {
  background-color: crimson;
}
.hero .box:nth-child(2) .category {
  background-color: #0b9931;
}
.hero .box:nth-child(4) .category {
  background-color: #c78823;
}
@media screen and (max-width: 768px) {
  .hero .container {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(18, 6vh);
    grid-gap: 10px;
  }
  .hero .box:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 5;
  }
  .hero .box:nth-child(2) {
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 5;
    grid-row-end: 10;
  }
  .hero .box:nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 10;
    grid-row-end: 15;
  }
  .hero .box:nth-child(4) {
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 15;
    grid-row-end: 20;
  }
}

</style>
