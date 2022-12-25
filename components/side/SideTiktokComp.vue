<template>
  <div>
    <section class="tpost">
      <HeadingComp title="Tiktok post" />
      <div v-for="item in tpost" :key="item.id" class="box flexSB">
        <div class="img">
          <img src="https://res.cloudinary.com/dewaqintoro/image/upload/v1671977490/Ngodingbentar/news/tpost_glqyip.webp" alt="">
        </div>
        <div class="text">
          <h1 class="title">
            {{ item.title.slice(0, 35) }}...
          </h1>
          <span>a year ago</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { tpost } from '~/assets/dummyData.js'

export default {
  data () {
    return {
      tpost
    }
  }
}
</script>

<style scoped>
.tpost .box {
  margin-bottom: 20px;
}
.tpost .img {
  width: 100px;
  height: 80px;
}
.tpost img {
  width: 100px;
  height: 80px;
  object-fit: cover;
}
.tpost .text {
  padding: 0 15px;
}
.tpost h1 {
  font-size: 15px;
}
.tpost span {
  font-size: 12px;
  color: grey;
}
@media screen and (max-width: 768px) {
  .tpost .img,
  .tpost img {
    width: 200px;
    height: 150px;
  }
  .tpost .text {
    width: 100%;
  }
}

</style>
