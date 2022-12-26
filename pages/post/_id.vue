<template>
  <div>
    <HeaderComp />
    <main>
      <!-- <SinglePageSlider /> -->
      <div class="container">
        <SliderPostComp />
      </div>
      <div v-if="post" class="container">
        <section class="mainContent details">
          <h1 class="title">
            {{ post.title }}
          </h1>

          <div class="author">
            <span>by</span>
            <img src="https://res.cloudinary.com/dewaqintoro/image/upload/v1671977494/Ngodingbentar/news/author_cy5mdp.jpg" alt="">
            <p> {{ post.authorName }} on</p>
            <label>{{ post.time }}</label>
          </div>

          <div class="social">
            <div class="socBox">
              <font-awesome-icon :icon="['fab', 'facebook']" class="icon" />
              <span>SHARE</span>
            </div>
            <div class="socBox">
              <font-awesome-icon :icon="['fab', 'twitter']" />
              <span>TWITTER</span>
            </div>
            <div class="socBox">
              <font-awesome-icon :icon="['fab', 'pinterest']" />
            </div>
            <div class="socBox">
              <font-awesome-icon :icon="['fa', 'envelope']" />
            </div>
          </div>

          <div class="desctop">
            <div v-for="(val, i) in post.desc" :key="i">
              <p>{{ val.para1 }}</p>
              <p>{{ val.para2 }}</p>
            </div>
          </div>
          <img src="https://res.cloudinary.com/dewaqintoro/image/upload/v1671977492/Ngodingbentar/news/pop6_vb1krw.jpg" alt="">
          <div v-for="(val, i) in post.desc" :key="i">
            <p>{{ val.para3 }}</p>
          </div>

          <div class="descbot">
            <div v-for="(val, i) in post.details" :key="i">
              <h1>{{ val.title }}</h1>
              <p>{{ val.para1 }}</p>
            </div>
          </div>

          <div class="quote">
            <font-awesome-icon :icon="['fa', 'quote-left']" class="icon" />
            <div v-for="(val, i) in post.details" :key="i">
              <p>{{ val.quote }}</p>
            </div>
          </div>

          <div class="desctop">
            <div v-for="(val, i) in post.details" :key="i">
              <p>{{ val.para2 }}</p>
              <p>{{ val.para3 }}</p>
            </div>
          </div>
        </section>
        <section class="sideContent">
          <SideComp />
        </section>
      </div>
      <div v-else>
        not found
      </div>
    </main>
    <FooterComp />
  </div>
</template>

<script>
import { hero } from '~/assets/dummyData'
import SliderPostComp from '~/components/details/SliderPostComp.vue'

export default {
  components: { SliderPostComp },
  data () {
    return {
      hero,
      post: {}
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const postId = this.$route.params.id
      const data = this.hero.find(item => item.id === parseInt(postId))
      this.post = data
      console.log('route', this.$route.params.id)
      console.log('item: ', data)
    }
  }
}
</script>

<style scoped>
main {
  margin-top: 50px;
}
.details {
  padding-right: 50px;
}
.details .title {
  font-size: 40px;
  line-height: 60px;
  font-weight: 700;
}
.details .author {
  display: flex;
  align-items: center;
  font-weight: 500;
  margin: 20px 0;
}
.details .author p {
  text-transform: capitalize;
  margin-right: 10px;
}
.details .author img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 10px;
}
.details .author label {
  color: grey;
}
.details .social {
  display: flex;
  margin-bottom: 20px;
}
.details .social .socBox {
  margin-right: 20px;
}
.details img {
  max-width: 100%;
  margin: 30px 0;
}
.desctop p {
  margin: 20px 0;
  line-height: 30px;
}
.descbot h1 {
  font-weight: 600;
  font-size: 30px;
  margin-top: 30px;
}
.quote {
  padding-left: 50px;
  border-left: 5px solid red;
}
.quote .icon {
  font-size: 50px;
  color: red;
  margin-bottom: 20px;
}
.quote p {
  font-size: 18px;
}
@media screen and (max-width: 768px) {
  .details {
    padding-right: 0;
  }
  .details img {
    width: 100%;
  }
}

</style>
