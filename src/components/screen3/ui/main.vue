<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'
import type { ComponentPublicInstance, VNodeRef } from 'vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { useScreen3Store } from '../model'

const screen3Store = useScreen3Store()

const sections = ref<(HTMLElement | null)[]>([])

const debouncedFlex = useDebounceFn(
  (el: HTMLElement) => {
    el.style.flex = '2'
  },
  500,
  { maxWait: 2000 },
)

const removeFlex = (el: HTMLElement) => {
  el.style.flex = '1'
}

const setSectionRef = (index: number) => (el: Element | ComponentPublicInstance | null) => {
  sections.value[index] = el as HTMLElement | null
}

onMounted(() => {
  sections.value.forEach((section) => {
    if (section) {
      section.addEventListener('mouseenter', () => debouncedFlex(section))
      section.addEventListener('mouseleave', () => removeFlex(section))
    }
  })
})

onUnmounted(() => {
  sections.value.forEach((section) => {
    if (section) {
      section.removeEventListener('mouseenter', () => debouncedFlex(section))
      section.removeEventListener('mouseleave', () => removeFlex(section))
    }
  })
})
</script>

<template>
  <div class="wrapper">
    <div class="section" :ref="setSectionRef(0)">
      <div class="title-group">
        <div class="title">Elite</div>
        <svg
          width="87"
          height="174"
          viewBox="0 0 87 174"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="half-circle"
        >
          <circle
            cx="-3.80289e-06"
            cy="87"
            r="86"
            transform="rotate(90 -3.80289e-06 87)"
            stroke="white"
            stroke-opacity="0.4"
            stroke-width="2"
          />
        </svg>
        <div class="content">
          <div class="content__text">
            THE VIP STYLE INCLUDES AN EXTENDED SET OF WORKS. SUITABLE FOR THOSE WHO WANTS TO GET THE
            PERFECT RESULT.
          </div>
          <div class="content__gallery-link" @click="screen3Store.setActive('Elite')">
            gallery
            <img src="/src/images/icons/arrow-gold-135.svg" alt="arrow" />
          </div>
          <div class="content__services-link">
            list of services
            <img src="/src/images/icons/arrow-white-77.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
    <div class="section" :ref="setSectionRef(1)">
      <div class="line"></div>
      <div class="title-group">
        <div class="title">VIP</div>
        <svg
          width="87"
          height="174"
          viewBox="0 0 87 174"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="half-circle"
        >
          <circle
            cx="-3.80289e-06"
            cy="87"
            r="86"
            transform="rotate(90 -3.80289e-06 87)"
            stroke="white"
            stroke-opacity="0.4"
            stroke-width="2"
          />
        </svg>
        <div class="content">
          <div class="content__text">
            THE VIP STYLE INCLUDES AN EXTENDED SET OF WORKS. SUITABLE FOR THOSE WHO WANTS TO GET THE
            PERFECT RESULT.
          </div>
          <div class="content__gallery-link" @click="screen3Store.setActive('Vip')">
            gallery
            <img src="/src/images/icons/arrow-gold-135.svg" alt="arrow" />
          </div>
          <div class="content__services-link">
            list of services
            <img src="/src/images/icons/arrow-white-77.svg" alt="arrow" />
          </div>
        </div>
      </div>
      <div class="line"></div>
    </div>
    <div class="section" :ref="setSectionRef(2)">
      <div class="title-group">
        <div class="title">Extra</div>
        <svg
          width="87"
          height="174"
          viewBox="0 0 87 174"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="half-circle"
        >
          <circle
            cx="-3.80289e-06"
            cy="87"
            r="86"
            transform="rotate(90 -3.80289e-06 87)"
            stroke="white"
            stroke-opacity="0.4"
            stroke-width="2"
          />
        </svg>
        <div class="content">
          <div class="content__text">
            THE VIP STYLE INCLUDES AN EXTENDED SET OF WORKS. SUITABLE FOR THOSE WHO WANTS TO GET THE
            PERFECT RESULT.
          </div>
          <div class="content__gallery-link" @click="screen3Store.setActive('Extra')">
            gallery
            <img src="/src/images/icons/arrow-gold-135.svg" alt="arrow" />
          </div>
          <div class="content__services-link">
            list of services
            <img src="/src/images/icons/arrow-white-77.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}

.line {
  width: 2px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    var(--color-text-light) 50%,
    transparent 100%
  );
}

.section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: flex 0.8s ease;
  position: relative;
}

.section:nth-child(1) {
  background:
    linear-gradient(var(--color-dark-background)),
    url('/src/images/screens/screen3-photo1.jpg') no-repeat center bottom;
}

.section:nth-child(1):hover {
  background:
    linear-gradient(var(--color-background)),
    url('/src/images/screens/screen3-photo1.jpg') no-repeat center bottom;
  /* flex: 2; */
}

.section:nth-child(2) {
  background:
    linear-gradient(var(--color-dark-background)),
    url('/src/images/screens/screen3-photo2.jpg') no-repeat center bottom;
  justify-content: space-between;
}

.section:nth-child(2):hover {
  background:
    linear-gradient(var(--color-background)),
    url('/src/images/screens/screen3-photo2.jpg') no-repeat center bottom;
  /* flex: 2; */
}

.section:nth-child(3) {
  background:
    linear-gradient(var(--color-dark-background)),
    url('/src/images/screens/screen3-photo3.jpg') no-repeat center bottom;
}

.section:nth-child(3):hover {
  background:
    linear-gradient(var(--color-background)),
    url('/src/images/screens/screen3-photo3.jpg') no-repeat center bottom;
  /* flex: 2; */
}

.title-group {
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
}

.title {
  font-family: var(--third-family);
  font-weight: 400;
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-text);
  transition: color 0.3s ease;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.section:hover .title {
  color: var(--color-accent);
  left: 0;
  transform: translateX(-50%);
  transition: 0.5s;
  transition-delay: 0.3s;
}

.half-circle {
  transform: translateX(1000px);
}

.section:hover .half-circle {
  transform: translateX(0);
  transition: 0.5s;
  transition-delay: 0.8s;
}

.content {
  display: flex;
  flex-direction: column;
  row-gap: 64px;
  max-width: 480px;
  padding-top: 165px;
  padding-left: 80px;
  transform: translateX(1000px);
}

.section:hover .content {
  transform: translateX(0);
  transition: 0.5s;
  transition-delay: 1.2s;
}

.content__text {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 18px;
  line-height: 167%;
  text-transform: uppercase;
  color: var(--color-text);
}

.content__gallery-link {
  max-width: 314px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  color: var(--color-accent);
  cursor: pointer;
}

.content__services-link {
  max-width: 314px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  color: var(--color-text);
  cursor: pointer;
}
</style>
