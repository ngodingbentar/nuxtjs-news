<template>
  <span>
    <footer>
      <div class="container">
        <div class="box logo">
          <img src="https://res.cloudinary.com/dewaqintoro/image/upload/v1668135073/Ngodingbentar/logoNB_z3gnwq.svg" alt="">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, accusamus.</p>
          <i class="fa fa-envelope" />
          <span> admin@ngodingbentar.com </span> <br>
          <i class="fa fa-headphones" />
          <span> +62 82241140786</span>
        </div>
        <div class="box">
          <h3>SPORT</h3>
          <div class="item">
            <img src="https://res.cloudinary.com/dewaqintoro/image/upload/v1671977495/Ngodingbentar/news/hero3_x3qbor.jpg" alt="">
            <p>Google To Boost Android Security In Few Days</p>
          </div>
          <div class="item">
            <img src="https://res.cloudinary.com/dewaqintoro/image/upload/v1671977495/Ngodingbentar/news/hero3_x3qbor.jpg" alt="">
            <p>Cespedes play the winning Baseball Game</p>
          </div>
        </div>
        <div class="box">
          <h3>CRICKET</h3>
          <div class="item">
            <img src="https://res.cloudinary.com/dewaqintoro/image/upload/v1671977495/Ngodingbentar/news/hero3_x3qbor.jpg" alt="">
            <p>US Promises to give Intel aid to locate the soldiers</p>
          </div>
          <div class="item">
            <img src="https://res.cloudinary.com/dewaqintoro/image/upload/v1671977495/Ngodingbentar/news/hero3_x3qbor.jpg" alt="">
            <p>Renewable energy dead as industry waits for Policy</p>
          </div>
        </div>
        <div class="box">
          <h3>LABELS</h3>
          <ul>
            <li>
              <span>Boxing</span> <label>(5)</label>
            </li>
            <li>
              <span>Fashion</span> <label>(6)</label>
            </li>
            <li>
              <span>Health</span> <label>(7)</label>
            </li>
            <li>
              <span>Nature</span> <label>(9)</label>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <div class="legal  ">
      <div class="container flexSB">
        <p>© all rights reserved</p>
        <p>
          Ngodingbentar
        </p>
      </div>
    </div>
  </span>
</template>

<style scoped>
footer {
  background-color: #000;
  color: #fff;
  padding: 50px 0;
  margin-top: 50px;
}
footer .container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}
footer .logo p {
  margin: 20px 0;
}
footer h3 {
  margin-bottom: 20px;
  font-weight: 500;
}
footer .item {
  display: flex;
  margin-bottom: 30px;
}
footer .item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}
footer .item p {
  padding: 10px 20px;
}

footer ul li {
  margin-bottom: 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
footer ul li:nth-last-child(1) {
  border-bottom: none;
}
footer ul li span::before {
  content: ">";
  top: 0;
  left: 0;
  margin-right: 10px;
}
.legal {
  padding: 15px;
  background-color: #000;
  color: grey;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
}
.legal i {
  color: red;
}

.logo img {
  width: 60px
}
@media screen and (max-width: 768px) {
  footer .container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
