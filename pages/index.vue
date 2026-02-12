<template>
  <div class="index-page">
    <Carousel :items="items" :autoplay="false">
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

        <el-button type="primary">Начать</el-button>
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

// Иконки для шагов
const RegistrationIcon = () => h('div', {
  style: {
    width: '60px',
    height: '60px',
    background: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '10px',
    fontWeight: 'bold',
    padding: '8px',
  }
}, [
  h('div', 'LOGIN'),
  h('div', { style: { marginTop: '4px', letterSpacing: '2px' } }, '*****')
]);

const ReplenishmentIcon = () => h('div', {
  style: {
    width: '60px',
    height: '60px',
    background: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  }
}, [
  h('div', {
    style: {
      width: '40px',
      height: '30px',
      background: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '4px',
      position: 'absolute',
      top: '15px',
      left: '10px',
    }
  }),
  h('div', {
    style: {
      width: '40px',
      height: '30px',
      background: 'rgba(255, 255, 255, 0.5)',
      borderRadius: '4px',
      position: 'absolute',
      top: '20px',
      left: '15px',
    }
  })
]);

const TradingIcon = () => h('div', {
  style: {
    width: '60px',
    height: '60px',
    background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  }
}, [
  h('div', {
    style: {
      width: '20px',
      height: '20px',
      background: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '4px',
      position: 'absolute',
      top: '12px',
      left: '12px',
      transform: 'rotate(45deg)',
    }
  }),
  h('div', {
    style: {
      width: '16px',
      height: '16px',
      background: 'rgba(255, 255, 255, 0.6)',
      borderRadius: '50%',
      position: 'absolute',
      bottom: '12px',
      right: '12px',
    }
  }),
  h('svg', {
    width: '30',
    height: '30',
    viewBox: '0 0 30 30',
    style: { position: 'absolute', opacity: 0.6 }
  }, [
    h('path', {
      d: 'M15 5 L20 10 L15 15 M20 10 L10 10',
      stroke: 'white',
      'stroke-width': '2',
      fill: 'none',
      'stroke-linecap': 'round'
    }),
    h('path', {
      d: 'M15 25 L10 20 L15 15 M10 20 L20 20',
      stroke: 'white',
      'stroke-width': '2',
      fill: 'none',
      'stroke-linecap': 'round'
    })
  ])
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
