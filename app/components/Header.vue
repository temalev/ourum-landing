<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img :src="logoUrl" alt="OURUM" class="header__logo-img" />
      </div>
      <nav class="header__nav">
        <a href="#" class="header__nav-link">Главная</a>
        <a href="#" class="header__nav-link">О нас</a>
        <a href="#" class="header__nav-link">Контакты</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
const logoUrl = new URL('../assets/img/OURUM.svg', import.meta.url).href
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 50px;
  background-color: #000000;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 100;
  border-bottom: 1px solid #2C2C2C;

  &__container {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: flex;
    align-items: center;
    height: 100%;

    &-img {
      height: 24px;
      width: auto;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 40px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    &-link {
      color: rgba(255, 255, 255, 0.900);
      text-decoration: none;
      cursor: pointer;
      &:hover {
        color: rgb(255, 255, 255);
      }
    }
  }
}
</style>
