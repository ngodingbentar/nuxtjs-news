<template>
  <section class="popular">
    <HeadingComp title="popular" />
    <div class="content">
      <slick
        ref="slick"
        :options="slickOptions"
      >
        <div v-for="item in popular" :key="item.id" class="items">
          <div class="box shadow">
            <div class="images row">
              <div class="img">
                <img src="https://res.cloudinary.com/dewaqintoro/image/upload/v1671952126/Ngodingbentar/news/popular/pop1_jlyncs.jpg" alt="">
              </div>
              <div class="category category1">
                <span>{{ item.catgeory }}</span>
              </div>
            </div>
            <div class="text row">
              <h1 class="title">
                {{ item.title.slice(0, 40) }}...
              </h1>
              <div class="date">
                <font-awesome-icon :icon="['fas', 'calendar']" class="icon" />
                <label>{{ item.date }}</label>
              </div>
              <div class="comment">
                <font-awesome-icon :icon="['fas', 'comments']" class="icon" />
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
import { popular } from '~/assets/dummyData.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export default {
  components: {
    Slick
  },
  data () {
    return {
      popular,
      slickOptions: {
        className: 'center',
        centerMode: false,
        infinite: true,
        centerPadding: '0',
        slidesToShow: 2,
        speed: 500,
        rows: 4,
        slidesPerRow: 1,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 4
            }
          }
        ]
      }
    }
  },
  methods: {}
}
</script>
<style scoped>
.popular .box {
  background-color: #fff;
  display: flex;
  /* #18  copy*/
  /*box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;*/
  position: relative;
  margin: 15px 15px 15px 0;
  /*box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;*/
}
.popular .images {
  position: relative;
  height: 150px;
}
.popular img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.popular .text h1 {
  padding: 20px 0 0 20px;
  margin: 0;
}
.popular .date {
  margin-top: 15px;
  padding: 0 0 0 20px;
}

.popular .comment {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 5px 0 0 20px;
  margin-top: 5px;
}

</style>
