<template>
  <div>
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
                Reviews
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
