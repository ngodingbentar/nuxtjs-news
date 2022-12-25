<template>
  <div>
    <main>
      <div class='container'>
        <section class='mainContent'>
          <PopularComp />
          <PostComp />
          <!-- <Life />
          <Music /> -->
        </section>
        <section class='sideContent'>
          <SideComp />
        </section>
      </div>
    </main>
  </div>
</template>

<style>
main .container {
  display: flex;
  justify-content: space-between;
}
.mainContent {
  width: 75%;
}
.sideContent {
  width: 23%;
}
.sideContent .heading h6 {
  background-color: #000;
}
@media screen and (max-width: 768px) {
  main .container {
    flex-direction: column;
  }
  .mainContent {
    width: 100%;
  }
  .sideContent {
    width: 100%;
  }
}

</style>
