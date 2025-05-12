<script setup lang="ts">
import { computed, nextTick, ref, onMounted, useTemplateRef, watch } from 'vue'
import RoundSlider from 'vue-three-round-slider'
import { BottomForm } from '../../bottom-form'

const sliderValue = ref(1)
const radius = 117
const center = 117
const markerCount = 6
const activeMarker = ref([0, 1])

const steps = [
  {
    title: 'LEAVE AN APPLICATION',
    value: 1,
    descriptionText: 'LEAVE AN APPLICATION BY PHONE OR ON OUR WEBSITE',
  },
  {
    title: 'CHECK OUT OF THE MEASURER',
    value: 2,
    descriptionText: 'OUR SPECIALIST COMES TO YOU AT THE OBJECT FOR MEASURING AND PHOTO FIXING',
  },
  {
    title: 'DRAFTING AN ESTIMATE',
    value: 3,
    descriptionText:
      'DEVELOPMENT OF TERMS OF REFERENCE, 3D VISUALIZATION AND CALCULATION OF THE ESTIMATE ',
  },
  {
    title: 'SIGNING THE CONTRACT',
    value: 1,
    descriptionText:
      'AGREEMENT OF THE COST AND DATE OF COMPLETION OF WORKS, SIGNING OF THE CONTRACT',
  },
  {
    title: 'BEGINNING OF WORK',
    value: 2,
    descriptionText: 'START OF REPAIR WORKS UNDER THE SUPERVISION OF A PERSONAL SUPERVISOR',
  },
  {
    title: 'COMPLETION',
    value: 3,
    descriptionText: 'COMPLETION OF REPAIRS, REMOVAL OF CONSTRUCTION rubbish',
  },
]

const markerPoints = computed(() => {
  const points = []
  const angleStep = 360 / markerCount

  for (let i = 0; i < markerCount; i++) {
    const angle = (i * angleStep - 90) * (Math.PI / 180)
    const x = center + radius * Math.cos(angle)
    const y = center + radius * Math.sin(angle)
    points.push({ x, y })
  }

  return points
})

const updateActiveMarker = (value: number) => {
  activeMarker.value = []
  for (let i = 0; i <= value; i++) {
    activeMarker.value.push(i)
  }
}

const setSliderValue = (value: number) => {
  if (value == 0) value = 6
  sliderValue.value = value
  updateActiveMarker(value)
}

// Синхронизация при внешнем изменении sliderValue
watch(sliderValue, (newVal) => {
  updateActiveMarker(newVal)
})

onMounted(async () => {
  await nextTick()

  const handle: HTMLElement | null = document.querySelector('.wrapper-5 #slider .rs-handle')
  if (handle instanceof HTMLElement) {
    handle.style.position = 'relative'
    const style = document.createElement('style')
    style.textContent = `
      #slider .rs-handle::after {
        display: flex;
        align-items: center;
        justify-content: center;
        content: url("data:image/svg+xml,%3Csvg width='46' height='46' viewBox='0 0 46 46' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='23' cy='23' rx='7' ry='7' transform='rotate(90 23 23)' fill='%23FFAC30' id='inner-circle'%3E%3Canimate attributeName='opacity' values='1;0.95;1' dur='2.1s' begin='0s' repeatCount='indefinite' keyTimes='0;0.3;1' calcMode='spline' keySplines='0.42 0 0.58 1; 0.42 0 0.58 1'/%3E%3C/ellipse%3E%3Cpath d='M37.5 23C37.5 31.0081 31.0081 37.5 23 37.5C14.9919 37.5 8.5 31.0081 8.5 23C8.5 14.9919 14.9919 8.5 23 8.5C31.0081 8.5 37.5 14.9919 37.5 23Z' stroke='%23FFAC30' stroke-opacity='0.5' id='middle-circle'%3E%3Canimate attributeName='stroke-opacity' values='0.5;0.8;0.5' dur='2.1s' begin='0.7s' repeatCount='indefinite' keyTimes='0;0.3;1' calcMode='spline' keySplines='0.42 0 0.58 1; 0.42 0 0.58 1'/%3E%3C/path%3E%3Cpath d='M45.5 23C45.5 35.4264 35.4264 45.5 23 45.5C10.5736 45.5 0.499998 35.4264 0.499999 23C0.500001 10.5736 10.5736 0.499999 23 0.499999C35.4264 0.5 45.5 10.5736 45.5 23Z' stroke='%23FFAC30' stroke-opacity='0.2' id='outer-circle'%3E%3Canimate attributeName='stroke-opacity' values='0.2;0.5;0.2' dur='2.1s' begin='1.4s' repeatCount='indefinite' keyTimes='0;0.3;1' calcMode='spline' keySplines='0.42 0 0.58 1; 0.42 0 0.58 1'/%3E%3C/path%3E%3C/svg%3E");
        height: 100%;
        width: 100%;
        border-radius: 100%;
      }
    `
    document.head.appendChild(style)
  }

  const tooltipText: HTMLElement | null = document.querySelector(
    '.wrapper-5 #slider .rs-tooltip-text',
  )
  if (tooltipText instanceof HTMLElement) {
    tooltipText.style.cssText += `
      font-family: Bruno Ace;
      font-size: 64px;
      line-height: 109%;
      margin-top: -36px;
      margin-left: -11px;
    `
  }
})
</script>

<template>
  <div class="wrapper-5">
    <div id="slider-container">
      <round-slider
        ref="slider"
        id="slider"
        min="0"
        max="6"
        handleSize=""
        rangeColor="#ffac30"
        pathColor="rgba(255, 255, 255, 0.4)"
        width="2"
        show-tooltip="true"
        editableTooltip="false"
        tooltipColor="#fff"
        startAngle="90"
        endAngle="+360"
        :radius="radius"
        v-model="sliderValue"
        @change="updateActiveMarker"
        style="z-index: 5"
      />

      <!-- Точки-индикаторы -->
      <svg class="markers-overlay" viewBox="0 0 234 234" width="234" height="234">
        <circle
          v-for="(point, index) in markerPoints"
          :key="index"
          :cx="point.x"
          :cy="point.y"
          r="4"
          :fill="activeMarker.includes(index) ? '#ffac30' : 'white'"
          stroke="none"
          @click="setSliderValue(index)"
          class="marker-circle"
        />
      </svg>
    </div>

    <div class="steps">
      <div class="instruction">
        6 steps to your<br />
        dream house:
      </div>
      <div class="steps__icon">
        <img :src="`/dream-house/images/steps/${sliderValue}.svg`" alt="icon" />
        <!-- <img :src="`/images/steps/${sliderValue}.svg`" alt="icon" /> -->
      </div>
      <div class="steps__title">{{ steps[sliderValue - 1].title }}</div>
      <img src="/src/images/icons/step-arrow.svg" alt="arrow" />
      <div class="steps__description">{{ steps[sliderValue - 1].descriptionText }}</div>
    </div>

    <!-- <BottomForm></BottomForm> -->
  </div>
</template>

<style scoped>
.wrapper-5 {
  background:
    linear-gradient(var(--color-background)),
    url('/src/images/screens/screen1.jpg') no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 280px;
  column-gap: 84px;
}

#slider-container {
  position: relative;
  width: 242px;
  height: 242px;
}

.markers-overlay {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: visible;
  z-index: 5;
}

.marker-circle {
  pointer-events: all;
  cursor: pointer;
  transition: fill 0.3s ease;
  z-index: 5;
}

.steps {
  display: flex;
  column-gap: 57px;
  position: relative;
  justify-content: start;
  align-items: center;
}

.steps__icon {
  width: 102px;
  height: 102px;
}

.steps__title {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 36px;
  text-transform: uppercase;
  color: var(--color-text);
  width: 270px;
}

.steps__description {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 18px;
  line-height: 167%;
  text-transform: uppercase;
  color: var(--color-text);
  width: 440px;
}

.instruction {
  font-family: var(--font3);
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 0.3em;
  color: var(--color-text);
  position: absolute;
  left: 0;
  top: -120px;
}
</style>
