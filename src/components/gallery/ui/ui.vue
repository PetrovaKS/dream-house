<script setup lang="ts">
import type { Component } from 'vue'
import { ref } from 'vue'
import { BottomForm } from '../../bottom-form'
import { GalleryPagination } from '../../gallery-pagination'

interface Props {
  slides: Record<number, Component>
}

const props = defineProps<Props>()

const active = ref(1)
const transitionName = ref('slide-right')

const next = () => {
  if (active.value == Object.keys(props.slides).length) return
  transitionName.value = 'slide-right'
  ++active.value
}

const previous = () => {
  if (active.value == 1) return
  transitionName.value = 'slide-left'
  active.value = active.value - 1
}
</script>

<template>
  <div>
    <div id="back-to-screen3"></div>

    <div class="slides-container">
      <Transition :name="transitionName">
        <component :is="props.slides[active]" :key="active" class="slides-component"></component>
      </Transition>
    </div>

    <BottomForm></BottomForm>

    <Teleport defer to="#pag-wrapper">
      <GalleryPagination
        :countSlides="Object.keys(props.slides).length"
        :currentSlide="active"
        @next="next"
        @previous="previous"
      >
      </GalleryPagination>
    </Teleport>
  </div>
</template>

<style scoped>
.slides-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slides-component {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.slide-right-enter-active,
.slide-left-enter-active {
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

/* Анимация для прокрутки вверх - новый элемент сверху */
.slide-left-enter-from {
  transform: translateX(-100%);
}
.slide-left-enter-to {
  transform: translateX(0);
}

.slide-right-leave-active,
.slide-left-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* Старый компонент под новым */
  pointer-events: none; /* Предотвращаем перехват событий мыши */
  transition: opacity 0.5s ease; /* Добавляем transition для opacity */
}

#back-to-screen3 {
  position: absolute;
  top: 120px;
  right: 178px;
  z-index: 4;
  padding-top: 40px;
}
</style>
