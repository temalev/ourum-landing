<template>
  <header class="header">
    <div class="header__container">
      <!-- Логотип -->
      <div class="header__logo">
        <img src="@/public/img/OURUM.svg" alt="OURUM" class="header__logo-img" />
      </div>

      <!-- Навигация (десктоп) -->
      <nav class="header__nav">
        <a href="#" class="header__nav-link">Главная</a>
        <a href="#" class="header__nav-link">О нас</a>
        <a href="#" class="header__nav-link">Контакты</a>
      </nav>

      <!-- Кнопки (десктоп) -->
      <div class="header__actions">
        <button class="header__btn header__btn--secondary">Войти</button>
        <button class="header__btn header__btn--primary">Зарегистрироваться</button>
      </div>

      <!-- Бургер-меню (мобилка) -->
      <button 
        class="header__burger"
        :class="{ 'header__burger--active': isMenuOpen }"
        @click="toggleMenu"
        aria-label="Меню"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Мобильное меню (шторка) -->
    <transition name="mobile-menu">
      <div v-if="isMenuOpen" class="mobile-menu">
        <nav class="mobile-menu__nav">
          <a href="#" class="mobile-menu__link" @click="closeMenu">Главная</a>
          <a href="#" class="mobile-menu__link" @click="closeMenu">О нас</a>
          <a href="#" class="mobile-menu__link" @click="closeMenu">Контакты</a>
        </nav>
        <div class="mobile-menu__actions">
          <button class="mobile-menu__btn mobile-menu__btn--secondary" @click="closeMenu">
            Войти
          </button>
          <button class="mobile-menu__btn mobile-menu__btn--primary" @click="closeMenu">
            Зарегистрироваться
          </button>
        </div>
      </div>
    </transition>

    <!-- Оверлей для закрытия меню при клике вне -->
    <transition name="overlay">
      <div 
        v-if="isMenuOpen" 
        class="mobile-menu__overlay"
        @click="closeMenu"
      ></div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  // Блокируем скролл когда меню открыто
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};

// Закрываем меню при ресайзе окна (если перешли на десктоп)
const handleResize = () => {
  if (window.innerWidth > 768 && isMenuOpen.value) {
    closeMenu();
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  document.body.style.overflow = '';
});
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: #000000;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
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
    z-index: 1001;

    &-img {
      height: 26px;
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
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      font-size: 15px;
      font-weight: 500;
      transition: color 0.2s;
      cursor: pointer;

      &:hover {
        color: rgb(255, 255, 255);
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 1001;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &__btn {
    padding: 8px 20px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;

    &--secondary {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: rgba(255, 255, 255, 0.9);

      &:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.3);
        color: #FFFFFF;
      }
    }

    &--primary {
      background: #3B82F6;
      border: none;
      color: #FFFFFF;

      &:hover {
        background: #2563EB;
      }

      &:active {
        background: #1d4ed8;
      }
    }
  }

  &__burger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 28px;
    height: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;

    span {
      width: 100%;
      height: 2px;
      background-color: #FFFFFF;
      transition: all 0.3s;
      border-radius: 2px;
    }

    &--active {
      span:nth-child(1) {
        transform: translateY(9px) rotate(45deg);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        transform: translateY(-9px) rotate(-45deg);
      }
    }

    @media (max-width: 768px) {
      display: flex;
    }
  }
}

// Мобильное меню (шторка)
.mobile-menu {
  position: fixed;
  top: 60px;
  right: 0;
  width: 280px;
  height: calc(100vh - 60px);
  background-color: #0a0a0a;
  border-left: 1px solid #2C2C2C;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  z-index: 999;
  overflow-y: auto;

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 30px;
  }

  &__link {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    padding: 12px 16px;
    border-radius: 8px;
    transition: all 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.05);
      color: #FFFFFF;
    }
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: auto;
  }

  &__btn {
    padding: 12px 20px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;

    &--secondary {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: rgba(255, 255, 255, 0.9);

      &:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.3);
      }
    }

    &--primary {
      background: #3B82F6;
      border: none;
      color: #FFFFFF;

      &:hover {
        background: #2563EB;
      }

      &:active {
        background: #1d4ed8;
      }
    }
  }

  &__overlay {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: calc(100vh - 60px);
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
    backdrop-filter: blur(2px);
  }
}

// Анимации
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: transform 0.3s ease;
}

.mobile-menu-enter-from {
  transform: translateX(100%);
}

.mobile-menu-leave-to {
  transform: translateX(100%);
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
</style>
