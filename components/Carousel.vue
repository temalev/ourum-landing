<template>
  <div class="carousel">
    <div class="carousel__container">
      <div 
        class="carousel__track"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div 
          v-for="(item, index) in items" 
          :key="index"
          class="carousel__slide"
        >
          <slot :item="item" :index="index">
            {{ item }}
          </slot>
        </div>
      </div>
    </div>

    <!-- Стрелки навигации -->
    <button 
      class="carousel__arrow carousel__arrow--left"
      @click="prev"
      aria-label="Предыдущий слайд"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <button 
      class="carousel__arrow carousel__arrow--right"
      @click="next"
      aria-label="Следующий слайд"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <!-- Индикаторы -->
    <div class="carousel__indicators">
      <button
        v-for="(item, index) in items"
        :key="index"
        class="carousel__indicator"
        :class="{ 'carousel__indicator--active': index === currentIndex }"
        @click="goTo(index)"
        :aria-label="`Перейти к слайду ${index + 1}`"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: false
  },
  interval: {
    type: Number,
    default: 3000
  }
});

const currentIndex = ref(0);
let intervalId = null;

const next = () => {
  console.log('Next clicked', currentIndex.value);
  currentIndex.value = (currentIndex.value + 1) % props.items.length;
};

const prev = () => {
  console.log('Prev clicked', currentIndex.value);
  currentIndex.value = currentIndex.value === 0 
    ? props.items.length - 1 
    : currentIndex.value - 1;
};

const goTo = (index) => {
  console.log('Go to', index);
  currentIndex.value = index;
};

const startAutoplay = () => {
  if (props.autoplay) {
    intervalId = setInterval(next, props.interval);
  }
};

const stopAutoplay = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

onMounted(() => {
  console.log('Carousel mounted, items:', props.items.length);
  startAutoplay();
});

onUnmounted(() => {
  console.log('Carousel unmounted');
  stopAutoplay();
});
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  width: 100%;
  margin: 40px 0;
  border: 1px solid #2C2C2C;
  background-color: rgba(46, 46, 46, 0.29);
  border-radius: 8px;
  overflow: hidden;

  &__container {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
  }

  &__track {
    display: flex;
    height: 100%;
    transition: transform 0.5s ease-in-out;
  }

  &__slide {
    min-width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 40px;
  }

  &__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #2C2C2C;
    background-color: rgba(46, 46, 46, 0.9);
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 100;
    pointer-events: auto;

    &:hover {
      background-color: rgba(59, 130, 246, 0.9);
      border-color: #3B82F6;
      transform: translateY(-50%) scale(1.1);
    }

    &:active {
      transform: translateY(-50%) scale(0.95);
    }

    &--left {
      left: 20px;
    }

    &--right {
      right: 20px;
    }

    svg {
      display: block;
    }
  }

  &__indicators {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 12px;
    z-index: 100;
  }

  &__indicator {
    width: 30px;
    height: 4px;
    border-radius: 2px;
    border: none;
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;
    pointer-events: auto;

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }

    &--active {
      background-color: #3B82F6;
      width: 40px;
    }
  }
}

@media (max-width: 768px) {
  .carousel {
    &__container {
      height: 300px;
    }

    &__slide {
      padding: 40px 20px;
    }

    &__arrow {
      width: 36px;
      height: 36px;

      &--left {
        left: 10px;
      }

      &--right {
        right: 10px;
      }
    }
  }
}
</style>
