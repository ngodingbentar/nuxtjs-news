<template>
  <div>
    <div class='head'>
      <div class='container flexSB paddingTB'>
        <div class='logo'>
          <img src='https://res.cloudinary.com/dewaqintoro/image/upload/v1599193286/icon/travada_apbjdq.png' alt='' />
        </div>
        <div class='ad'>
          <img src='https://res.cloudinary.com/dewaqintoro/image/upload/v1599193286/icon/travada_apbjdq.png' alt='' />
        </div>
      </div>
    </div>
    <div class="header">
      <div class="container paddingSmall">
        <nav class="navbar">
          <ul class="flex">
            <li>
              <NuxtLink to="/">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/culture">
                Culture
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/politics">
                Politics
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/memes">
                Memes
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/sports">
                Sports
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/boxed">
                Boxed
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/reviews">
                Reviewså
              </NuxtLink>
            </li>
          </ul>
          <button class="barIcon">
            {navbar ? <i class="fa fa-times" /> : <i class="fa fa-bars" />}
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>
