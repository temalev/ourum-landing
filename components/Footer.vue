<template>
  <footer class="footer">
    <div class="footer__container">
      <!-- Логотип и описание -->
      <div class="footer__section footer__about">
        <div class="footer__logo">
          <img src="@/public/img/OURUM.svg" alt="OURUM" class="footer__logo-img" />
        </div>
        <p class="footer__description">
          Юридически прозрачная реализация майнинговых доходов в соответствии с законодательством РФ
        </p>
      </div>

      <!-- Контакты -->
      <div class="footer__section footer__contacts">
        <h3 class="footer__title">Контакты</h3>
        <ul class="footer__list">
          <li class="footer__list-item">
            <a href="mailto:info@ourum.io" class="footer__link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              info@ourum.io
            </a>
          </li>
          <li class="footer__list-item">
            <a href="tel:+74951234567" class="footer__link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              +7 (495) 123-45-67
            </a>
          </li>
          <li class="footer__list-item">
            <span class="footer__link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 8V12L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Пн-Пт: 9:00 - 18:00
            </span>
          </li>
        </ul>
      </div>

      <!-- Навигация -->
      <div class="footer__section footer__navigation">
        <h3 class="footer__title">Навигация</h3>
        <ul class="footer__list">
          <li class="footer__list-item">
            <a href="#" class="footer__link">Главная</a>
          </li>
          <li class="footer__list-item">
            <a href="#" class="footer__link">О нас</a>
          </li>
          <li class="footer__list-item">
            <a href="#" class="footer__link">Контакты</a>
          </li>
          <li class="footer__list-item">
            <a href="#" class="footer__link">Политика конфиденциальности</a>
          </li>
        </ul>
      </div>

      <!-- Соцсети -->
      <div class="footer__section footer__social">
        <h3 class="footer__title">Мы в соцсетях</h3>
        <div class="footer__social-links">
          <a href="https://t.me/ourum" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Telegram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
          </a>
          <a href="https://instagram.com/ourum" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="2"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
              <circle cx="18" cy="6" r="1" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Копирайт -->
    <div class="footer__bottom">
      <div class="footer__copyright">
        <p>© {{ currentYear }} OURUM. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: #000000;
  border-top: 1px solid #2C2C2C;
  padding: 60px 0 0;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 40px;

    @media (max-width: 968px) {
      grid-template-columns: 1fr 1fr;
      gap: 40px 30px;
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  &__section {
    display: flex;
    flex-direction: column;
  }

  &__logo {
    margin-bottom: 20px;

    &-img {
      height: 28px;
      width: auto;
    }
  }

  &__description {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    line-height: 1.6;
    max-width: 300px;
  }

  &__title {
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__list-item {
    display: flex;
    align-items: flex-start;
  }

  &__link {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: color 0.2s;

    svg {
      flex-shrink: 0;
      opacity: 0.7;
    }

    &:hover {
      color: rgba(255, 255, 255, 1);

      svg {
        opacity: 1;
      }
    }
  }

  &__social-links {
    display: flex;
    gap: 12px;
  }

  &__social-link {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.2s;

    &:hover {
      background: rgba(59, 130, 246, 0.1);
      border-color: #3B82F6;
      color: #3B82F6;
      transform: translateY(-2px);
    }
  }

  &__bottom {
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 20px;
    margin-top: 60px;
    border-top: 1px solid #2C2C2C;
  }

  &__copyright {
    text-align: center;

    p {
      color: rgba(255, 255, 255, 0.5);
      font-size: 13px;
      margin: 0;
    }
  }
}
</style>
