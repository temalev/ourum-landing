<template>
  <footer class="footer">
    <div class="footer__container">
      <!-- Здесь можно добавить контент footer (ссылки, копирайт и т.д.) -->
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  min-height: 50px;
  background-color: #000000;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 100;
  border-top: 1px solid #2C2C2C;

  &__container {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
  }
}
</style>
