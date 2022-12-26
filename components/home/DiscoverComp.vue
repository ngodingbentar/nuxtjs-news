<template>
  <section class="discover">
    <div class="container">
      <HeadingComp title="Discover" />
      <div class="content">
        <div v-for="(item, index) in discover" :key="index" class="box">
          <span>
            <div className="img">
              <img src="https://res.cloudinary.com/dewaqintoro/image/upload/v1671977485/Ngodingbentar/news/d2_dosofu.jpg" alt="">
            </div>
            <h1 className="title">
              {{item.title}}
            </h1>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { discover } from '~/assets/dummyData'

export default {
  data () {
    return {
      discover
    }
  }
}
</script>

<style scoped>
.discover .content {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 30px;
}

.discover .box {
  background-color: #fff;
  box-shadow: 0 4px 8px rgb(0 0 0 / 4%), 0 0 2px rgb(0 0 0 / 6%), 0 0 1px rgb(0 0 0 / 4%);
}
.discover .img {
  width: 150px;
  height: 100px;
}
.discover img {
  width: 200px;
  height: 100px;
  object-fit: cover;
}
.discover h1 {
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
}
@media screen and (max-width: 768px) {
  .discover .content {
    grid-template-columns: repeat(3, 1fr);
  }
}

</style>
