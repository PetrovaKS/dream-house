<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'
import type { Component } from 'vue'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { MainLayout } from '../layouts'
import { CallIcon } from '../components/call-icon'
import { Screen1 } from '../components/screen1'
import { Screen2 } from '../components/screen2'
import { Screen3 } from '../components/screen3'
import { Screen4 } from '../components/screen4'
import { Screen5 } from '../components/screen5'
import { Screen6 } from '../components/screen6'
import { BottomForm } from '../components/bottom-form'

const active = ref(1)
const screens = {
  1: Screen1,
  2: Screen2,
  3: Screen3,
  4: Screen4,
  5: Screen5,
  6: Screen6,
} as Record<number, Component>
const lastScrollDirection = ref('down')

const transitionName = computed(() => {
  return lastScrollDirection.value === 'down' ? 'slide-down' : 'slide-up'
})

const next = () => {
  if (active.value == 6) return
  lastScrollDirection.value = 'down'
  ++active.value
}

const previous = () => {
  if (active.value == 1) return
  lastScrollDirection.value = 'up'
  active.value = active.value - 1
}

const debpuncedFn = useDebounceFn(
  (e: WheelEvent) => {
    if (e.deltaY > 0) {
      next()
    }
    if (e.deltaY < 0) {
      previous()
    }
  },
  500,
  { maxWait: 1000 },
)

const onWheel = (e: WheelEvent) => {
  debpuncedFn(e)
}

const setActive = (n: number) => {
  if (n > active.value) lastScrollDirection.value = 'down'
  if (n < active.value) lastScrollDirection.value = 'up'
  active.value = n
}

const handelSubmitForm = (name: string, phone: string) => {
  console.log(name, phone.length)
}
const preloadImages = () => {
  const images = [
    '/src/images/screens/screen1.jpg',
    '/src/images/screens/screen2.jpg',
    '/src/images/screens/screen3.jpg',
    '/src/images/screens/screen4.jpg',
    '/src/images/screens/screen5.jpg',
  ]

  images.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

onMounted(() => {
  document.addEventListener('wheel', onWheel)
  preloadImages()
})

onBeforeUnmount(() => {
  document.removeEventListener('wheel', onWheel)
})
</script>

<template>
  <MainLayout>
    <template #call-icon>
      <CallIcon></CallIcon>
    </template>

    <template #aside-right>
      <div class="pagination">
        <svg
          v-for="n in 6"
          :key="n"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="pagination__dot"
          :class="active == n ? 'pagination__dot--active' : ''"
          model-value="n"
          @click="setActive(n)"
        >
          <ellipse cx="12.5" cy="12.5" rx="3.5" ry="3.5" transform="rotate(90 12.5 12.5)" />
          <path
            d="M24.5 12.5C24.5 19.1274 19.1274 24.5 12.5 24.5C5.87258 24.5 0.499999 19.1274 0.499999 12.5C0.5 5.87258 5.87258 0.5 12.5 0.499999C19.1274 0.5 24.5 5.87258 24.5 12.5Z"
            stroke="white"
          />
        </svg>
      </div>
    </template>

    <template #content>
      <div class="slider-container">
        <Transition :name="transitionName">
          <component :is="screens[active]" :key="active" class="slider-component"> </component>
        </Transition>

        <BottomForm @submit="handelSubmitForm" v-if="active < 3 || active == 5"></BottomForm>
      </div>
    </template>
  </MainLayout>
</template>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slider-component {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.slide-down-enter-active,
.slide-up-enter-active {
  transition: transform 0.5s ease;
  z-index: 2; /* Новый компонент поверх старого */
}

/* Анимация для прокрутки вниз - новый элемент снизу */
.slide-down-enter-from {
  transform: translateY(100%);
}
.slide-down-enter-to {
  transform: translateY(0);
}

/* Анимация для прокрутки вверх - новый элемент сверху */
.slide-up-enter-from {
  transform: translateY(-100%);
}
.slide-up-enter-to {
  transform: translateY(0);
}

.slide-down-leave-active,
.slide-up-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* Старый компонент под новым */
  pointer-events: none; /* Предотвращаем перехват событий мыши */
  transition: opacity 0.5s ease; /* Добавляем transition для opacity */
}

.pagination {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding-bottom: 50vh;
}

.pagination > svg {
  cursor: pointer;
}

.pagination__dot > ellipse {
  fill: var(--color-text-light);
  transition: 0.3s;
}

.pagination__dot--active > ellipse {
  fill: var(--color-accent);
  filter: brightness(1.2) drop-shadow(0 0 2px var(--color-accent));
  -webkit-filter: brightness(1.2) drop-shadow(0 0 2px var(--color-accent));
}

.pagination__dot > path {
  stroke-opacity: 0;
  transition: 0.3s;
  filter: brightness(1.2) drop-shadow(0 0 2px var(--color-text-light));
  -webkit-filter: brightness(1.2) drop-shadow(0 0 2px var(--color-text-light));
}

.pagination__dot--active > path {
  stroke-opacity: 0.3;
}
</style>
