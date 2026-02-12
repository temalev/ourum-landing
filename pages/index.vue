<template>
  <div class="index-page">
    <Carousel :items="items" :autoplay="true" :interval="10000">
      <template #default="{ item }">
        <div class="carousel-content">
          <h3 class="carousel-title">{{ item.title }}</h3>
          <p v-if="item.description" class="carousel-description">{{ item.description }}</p>
        </div>
      </template>
    </Carousel>

    <section class="steps-section">
      <h2 class="steps-section__title">3 ПРОСТЫХ ШАГА ДО ПЕРВОЙ СДЕЛКИ</h2>
      
      <div class="steps-section__cards">
        <div class="step-card" v-for="step in steps" :key="step.title">
          <div class="step-card__icon">
            <component :is="step.icon" />
          </div>
          <h3 class="step-card__title">{{ step.title }}</h3>
          <p class="step-card__description">{{ step.description }}</p>
        </div>
      </div>

      <div class="cta-block" ref="ctaBlock" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <div class="cta-block__glow" ref="ctaGlow"></div>
        <div class="cta-block__content">
          <div class="cta-block__badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Присоединяйтесь прямо сейчас
          </div>
          <h3 class="cta-block__title">Начните работать с OURUM уже сегодня</h3>
          <p class="cta-block__description">
            Получите доступ к юридически прозрачной системе реализации майнинговых доходов. 
            Первая консультация бесплатно — узнайте все условия сотрудничества
          </p>
          <div class="cta-block__features">
            <div class="cta-block__feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Регистрация за 5 минут</span>
            </div>
            <div class="cta-block__feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Минимальная комиссия</span>
            </div>
            <div class="cta-block__feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Поддержка 24/7</span>
            </div>
          </div>
          <button class="cta-block__button">
            <span>Присоединиться к системе</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <section class="process-section">
      <h2 class="process-section__title">От заявки до денег на счёту — 4 шага</h2>
      
      <div class="process-section__timeline">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
            placement="top"
          >
            <div class="timeline-item">
              <h3 class="timeline-item__title">{{ activity.title }}</h3>
              <p class="timeline-item__description">{{ activity.content }}</p>
            </div>
          </el-timeline-item>
        </el-timeline>
      </div>
    </section>

    <ContactBlock />
  </div>
</template>
<script setup>
import { ref, h } from 'vue';

// Ссылки на элементы
const ctaBlock = ref(null);
const ctaGlow = ref(null);

// Обработчик движения мыши для эффекта свечения
const handleMouseMove = (e) => {
  if (!ctaBlock.value || !ctaGlow.value) return;
  
  const rect = ctaBlock.value.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  ctaGlow.value.style.opacity = '1';
  ctaGlow.value.style.background = `radial-gradient(circle 200px at ${x}px ${y}px, rgba(59, 130, 246, 0.3), transparent)`;
};

// Скрываем свечение при уходе мыши
const handleMouseLeave = () => {
  if (!ctaGlow.value) return;
  ctaGlow.value.style.opacity = '0';
};

const items = ref([
  {
    title: 'Юридически прозрачная реализация майнинговых доходов',
    description: 'Наша компания предоставляет услуги по реализации майнинговых доходов в соответствии с законодательством РФ.',
  },
  {
    title: 'Безопасность и надежность',
    description: 'Гарантируем полную конфиденциальность и защиту ваших активов на всех этапах сделки.',
  },
  {
    title: 'Выгодные условия',
    description: 'Минимальные комиссии и лучший курс обмена на рынке для ваших майнинговых доходов.',
  },
  {
    title: 'Быстрое обслуживание',
    description: 'Обработка заявок за 15 минут, получение средств в течение 24 часов.',
  },
]);

// Импорт иконок
import UserPlusIcon from '~/components/icons/UserPlusIcon.vue';
import CreditCardIcon from '~/components/icons/CreditCardIcon.vue';
import TrendingUpIcon from '~/components/icons/TrendingUpIcon.vue';

// Обертки для иконок с градиентным фоном
const RegistrationIcon = () => h('div', {
  style: {
    width: '64px',
    height: '64px',
    background: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
    color: 'white',
  }
}, [
  h(UserPlusIcon)
]);

const ReplenishmentIcon = () => h('div', {
  style: {
    width: '64px',
    height: '64px',
    background: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)',
    color: 'white',
  }
}, [
  h(CreditCardIcon)
]);

const TradingIcon = () => h('div', {
  style: {
    width: '64px',
    height: '64px',
    background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
    color: 'white',
  }
}, [
  h(TrendingUpIcon)
]);

const steps = ref([
  {
    title: 'Регистрация',
    description: 'Зарегистрируйте аккаунт, указав электронную почту и телефон, и пройдите верификацию личности или вашего бизнеса',
    icon: RegistrationIcon,
  },
  {
    title: 'Пополнение',
    description: 'Пополните баланс аккаунта любым из доступных способов, в том числе официальным банковским переводом',
    icon: ReplenishmentIcon,
  },
  {
    title: 'Торговля',
    description: 'Выберите необходимую пару для торговли на спотовым рынке, купите нужную валюту или стейблкоин и используйте их для дальнейших целей',
    icon: TradingIcon,
  },
]);

const activities = ref([
  {
    timestamp: '01',
    title: 'Получите расчёт за 15 минут',
    content: 'С вас — объем сделки, с нас — выгодные условия и ответы на все вопросы',
  },
  {
    timestamp: '02',
    title: 'Заключаем рамочный договор',
    content: 'Нужны только реквизиты, уставные документы и выписка из реестра майнеров ФНС РФ',
  },
  {
    timestamp: '03',
    title: 'Фиксируем условия',
    content: 'Подтвердите спецификацию с финальной суммой перед переводом. Никаких скрытых комиссий и изменений после согласования',
  },
  {
    timestamp: '04',
    title: 'Получите деньги и документы',
    content: 'Отправляете активы, получаете рубли на счёт и закрывающие документы',
  },
]);
</script>

<style lang="scss" scoped>
.index-page {
  min-height: calc(100vh - 100px);
  padding: 20px;
}

.carousel-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-align: center;
}

.carousel-title {
  font-size: 32px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 20px;
  line-height: 1.3;
  max-width: 800px;
}

.carousel-description {
  font-size: 18px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  max-width: 700px;
}

@media (max-width: 768px) {
  .carousel-title {
    font-size: 24px;
  }

  .carousel-description {
    font-size: 16px;
  }
}

.steps-section {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-size: 32px;
    font-weight: 700;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 60px;
    letter-spacing: 0.5px;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    width: 100%;
    margin-bottom: 50px;

    @media (max-width: 968px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  &__button {
    padding: 16px 48px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 8px;
    background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
    border: none;
    color: white;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
    }
  }
}

.step-card {
  background-color: rgba(46, 46, 46, 0.29);
  border: 1px solid #2C2C2C;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s, border-color 0.3s;

  &:hover {
    transform: translateY(-5px);
    border-color: #3C3C3C;
  }

  &__icon {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-size: 20px;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 16px;
  }

  &__description {
    font-size: 14px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
  }
}

.cta-block {
  margin-top: 60px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 16px;
  padding: 50px 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
    animation: pulse 4s ease-in-out infinite;
  }

  &__glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  &__content {
    position: relative;
    z-index: 1;
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: rgba(59, 130, 246, 0.15);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 20px;
    color: #3B82F6;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 20px;

    svg {
      color: #3B82F6;
    }
  }

  &__title {
    font-size: 32px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 16px;
    line-height: 1.3;

    @media (max-width: 768px) {
      font-size: 26px;
    }
  }

  &__description {
    font-size: 16px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 32px;
  }

  &__features {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 32px;
    flex-wrap: wrap;

    @media (max-width: 640px) {
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
  }

  &__feature {
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    font-weight: 500;

    svg {
      color: #3B82F6;
      flex-shrink: 0;
    }
  }

  &__button {
    padding: 16px 40px;
    background: #3B82F6;
    border: none;
    border-radius: 8px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      transform: translate(-50%, -50%);
      transition: width 0.6s, height 0.6s;
    }

    &:hover {
      background: #2563EB;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);

      &::before {
        width: 300px;
        height: 300px;
      }

      svg {
        transform: translateX(4px);
      }
    }

    &:active {
      transform: translateY(0);
    }

    span,
    svg {
      position: relative;
      z-index: 1;
    }

    svg {
      transition: transform 0.3s;
    }
  }

  @media (max-width: 768px) {
    padding: 40px 24px;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.process-section {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-size: 32px;
    font-weight: 700;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 60px;
    letter-spacing: 0.5px;
  }

  &__timeline {
    width: 100%;
    max-width: 900px;
  }
}

.timeline-item {
  background-color: rgba(46, 46, 46, 0.29);
  border: 1px solid #2C2C2C;
  padding: 30px;
  margin-left: 20px;
  transition: transform 0.3s, border-color 0.3s;

  &:hover {
    transform: translateX(5px);
    border-color: #3C3C3C;
  }

  &__title {
    font-size: 20px;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 12px;
  }

  &__description {
    font-size: 14px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
  }
}

// Стилизация Element Plus Timeline для темной темы
:deep(.el-timeline) {
  .el-timeline-item {
    &__timestamp {
      color: rgba(255, 255, 255, 0.9) !important;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    &__node {
      background-color: #3B82F6;
      border-color: #3B82F6;
    }

    &__wrapper {
      .el-timeline-item__tail {
        border-left-color: #2C2C2C;
      }
    }
  }
}
</style>
