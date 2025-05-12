<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  countSlides: number
  currentSlide: number
}

const props = defineProps<Props>()

const countSlides = computed(() => {
  if (props.countSlides > 9) props.countSlides
  return '0' + props.countSlides
})

const currentSlide = computed(() => {
  if (props.currentSlide > 9) props.currentSlide
  return '0' + props.currentSlide
})

const emit = defineEmits<{
  (e: 'next'): void
  (e: 'previous'): void
}>()
</script>

<template>
  <div class="catalog-pagination">
    <div class="arrow-left" @click="emit('previous')">
      <svg
        width="25"
        height="31"
        viewBox="0 0 25 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 30L2 15.5L24 0.999999" stroke="white" stroke-width="2" />
      </svg>
      <div class="path"></div>
    </div>

    <div class="indication">
      <div class="delimiter"></div>
      <div class="current">{{ currentSlide }}</div>
      <div class="count">{{ countSlides }}</div>
    </div>

    <div class="arrow-right" @click="emit('next')">
      <div class="path"></div>
      <svg
        width="25"
        height="31"
        viewBox="0 0 25 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L23 15.5L1 30" stroke="white" stroke-width="2" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.catalog-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 40px;
  max-width: 826px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 80px;
}

.indication {
  width: 165px;
  height: 93px;
  position: relative;
  flex-shrink: 0;
}

.delimiter {
  border: 1px solid var(--color-text-light);
  width: 184px;
  height: 0px;
  transform: rotate(30deg);
  position: absolute;
  top: 55px;
  left: -10px;
  z-index: 10;
}

.count {
  font-family: var(--third-family);
  font-weight: 400;
  font-size: 24px;
  text-transform: uppercase;
  color: var(--color-text);
  padding-top: 15px;
  padding-left: 25px;
}

.current {
  font-family: var(--third-family);
  font-weight: 400;
  font-size: 48px;
  text-transform: uppercase;
  text-align: right;
  color: var(--color-accent);
}

.path {
  border: 1px solid var(--color-text-semi-light);
  width: 100%;
  height: 0px;
}

.arrow-left {
  display: flex;
  justify-content: start;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
  width: 100%;
}

.arrow-right {
  display: flex;
  justify-content: end;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
  width: 100%;
}
</style>
