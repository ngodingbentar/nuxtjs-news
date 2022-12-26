<template>
  <section class="social">
    <div class="socBox">
      <font-awesome-icon :icon="['fab', 'facebook']" />
      <span>12,740 Likes</span>
    </div>
    <div class="socBox">
      <font-awesome-icon :icon="['fab', 'pinterest']" />
      <span>5,600 Fans</span>
    </div>
    <div class="socBox">
      <font-awesome-icon :icon="['fab', 'twitter']" />
      <span>8,700 Followers</span>
    </div>
    <div class="socBox">
      <font-awesome-icon :icon="['fab', 'instagram']" />
      <span>22,700 Followers</span>
    </div>
    <div class="socBox">
      <font-awesome-icon :icon="['fab', 'youtube']" />
      <span>2,700 Subscriber</span>
    </div>
  </section>
</template>

<style>
.social .socBox {
  padding: 10px 20px;
  margin-bottom: 10px;
  color: #fff;
}
.social .socBox i {
  margin-right: 20px;
}
.social .socBox span {
  font-weight: 500;
}
.social .socBox:nth-child(1) {
  background-color: #3b5998;
}
.social .socBox:nth-child(2) {
  background-color: #bd081c;
}
.social .socBox:nth-child(3) {
  background-color: #1da1f2;
}
.social .socBox:nth-child(4) {
  background-color: #c32aa3;
}
.social .socBox:nth-child(5) {
  background-color: #ff0000;
}

</style>
