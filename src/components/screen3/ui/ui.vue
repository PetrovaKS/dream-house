<script setup lang="ts">
import type { Component } from 'vue'
import { onUnmounted } from 'vue'
import { useScreen3Store } from '../model'
import { Main } from '../ui'
import { Elite } from '../ui'
import { Vip } from '../ui'
import { Extra } from '../ui'

const screen3Store = useScreen3Store()

const screenComponents = {
  Main: Main,
  Elite: Elite,
  Vip: Vip,
  Extra: Extra,
} as Record<string, Component>

onUnmounted(() => {
  screen3Store.setActive('Main')
})
</script>

<template>
  <div>
    <div class="slider-container">
      <transition name="slide-right">
        <component
          :is="screenComponents[screen3Store.activeScreen]"
          :key="screen3Store.activeScreen"
          class="gallery-component"
        ></component>
      </transition>
    </div>

    <Teleport defer to="#back-to-screen3" v-if="screen3Store.activeScreen != 'Main'">
      <div class="back" @click="screen3Store.setActive('Main')">
        <div class="back__text">вернуться к стилям</div>
        <img src="/src/images/icons/arrow-white-115.svg" alt="arrow-back" />
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.gallery-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.gallery-component {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.slide-right-enter-active {
  transition: transform 0.5s ease;
  z-index: 2; /* Новый компонент поверх старого */
}

/* Анимация для прокрутки вниз - новый элемент снизу */
.slide-right-enter-from {
  transform: translateX(100%);
}

.slide-right-enter-to {
  transform: translateX(0);
}

.slide-right-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* Старый компонент под новым */
  pointer-events: none; /* Предотвращаем перехват событий мыши */
  transition: opacity 0.5s ease; /* Добавляем transition для opacity */
}

.back {
  display: flex;
  justify-content: end;
  align-items: center;
  column-gap: 30px;
  cursor: pointer;
}

.back__text {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text);
}
</style>
