<template>
  <div class="app">
    <Header />
    <main class="app__main">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.app {
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;

  &__main {
    flex: 1;
  }
}
</style>