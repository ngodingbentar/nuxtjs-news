<template>
  <div class='heading'>
    <h6>{{title}}</h6>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.heading {
  margin: 30px 0;
  background-image: url("https://res.cloudinary.com/dewaqintoro/image/upload/v1671951255/Ngodingbentar/news/title_pattern_p2a2ee.png");
  height: 35px;
  background-position: center;
}
.heading h6 {
  font-weight: 400;
  background: #fb4c35;
  color: #fff;
  height: 35px;
  width: 130px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 14px;
}

</style>
