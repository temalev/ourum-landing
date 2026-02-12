<template>
  <section class="contact-block">
    <div class="contact-block__container">
      <div class="contact-block__content">
        <h2 class="contact-block__title">Возникли вопросы?</h2>
        <p class="contact-block__subtitle">Мы на связи</p>
        <p class="contact-block__description">
          Свяжитесь с нами любым удобным способом — наши специалисты готовы проконсультировать вас по всем вопросам сотрудничества и предоставить детальную информацию о наших услугах
        </p>
        
        <div class="contact-block__actions">
          <a href="mailto:info@ourum.io" class="contact-block__btn contact-block__btn--primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Написать на почту
          </a>
          <a href="tel:+74951234567" class="contact-block__btn contact-block__btn--secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Позвонить нам
          </a>
        </div>

        <div class="contact-block__social">
          <span class="contact-block__social-text">Или напишите в:</span>
          <div class="contact-block__social-links">
            <a href="https://t.me/ourum" target="_blank" rel="noopener noreferrer" class="contact-block__social-link" aria-label="Telegram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
              Telegram
            </a>
            <a href="https://instagram.com/ourum" target="_blank" rel="noopener noreferrer" class="contact-block__social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
                <circle cx="18" cy="6" r="1" fill="currentColor"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div class="contact-block__decoration">
        <div class="contact-block__circle contact-block__circle--1"></div>
        <div class="contact-block__circle contact-block__circle--2"></div>
        <div class="contact-block__circle contact-block__circle--3"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact-block {
  width: 100%;
  padding: 80px 20px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  &__content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }

  &__title {
    font-size: 42px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 12px;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }

  &__subtitle {
    font-size: 24px;
    font-weight: 600;
    color: #3B82F6;
    margin-bottom: 24px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  &__description {
    font-size: 16px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 40px;
  }

  &__actions {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 40px;
    flex-wrap: wrap;

    @media (max-width: 640px) {
      flex-direction: column;
    }
  }

  &__btn {
    padding: 14px 28px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    white-space: nowrap;

    svg {
      transition: transform 0.3s;
    }

    &--primary {
      background: #3B82F6;
      border: none;
      color: #FFFFFF;

      &:hover {
        background: #2563EB;
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);

        svg {
          transform: scale(1.1);
        }
      }

      &:active {
        transform: translateY(0);
      }
    }

    &--secondary {
      background: transparent;
      border: 2px solid rgba(255, 255, 255, 0.2);
      color: rgba(255, 255, 255, 0.9);

      &:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.4);
        color: #FFFFFF;

        svg {
          transform: scale(1.1);
        }
      }
    }
  }

  &__social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;

    @media (max-width: 640px) {
      flex-direction: column;
      gap: 16px;
    }
  }

  &__social-text {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }

  &__social-links {
    display: flex;
    gap: 12px;
  }

  &__social-link {
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s;

    &:hover {
      background: rgba(59, 130, 246, 0.1);
      border-color: #3B82F6;
      color: #3B82F6;
      transform: translateY(-2px);
    }
  }

  // Декоративные элементы
  &__decoration {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  &__circle {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
    animation: float 20s infinite ease-in-out;

    &--1 {
      width: 400px;
      height: 400px;
      top: -200px;
      right: -100px;
      animation-delay: 0s;
    }

    &--2 {
      width: 300px;
      height: 300px;
      bottom: -150px;
      left: -50px;
      animation-delay: 5s;
    }

    &--3 {
      width: 200px;
      height: 200px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation-delay: 10s;
    }
  }
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(30px, -30px) scale(1.1);
    opacity: 0.5;
  }
}
</style>
