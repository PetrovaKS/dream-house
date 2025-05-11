<script setup lang="ts">
import { computed, nextTick, ref, onMounted } from 'vue'
import RoundSlider from 'vue-three-round-slider'
import { BottomForm } from '../../bottom-form'

const sliderValue = ref(60)

const servicePackages = [
  {
    title: 'elite',
    value: 1,
    price: 4000,
    titleText: 'Стиль ELITE',
    descriptionText:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
  },
  {
    title: 'vip',
    value: 2,
    price: 5000,
    titleText: 'Стиль VIP',
    descriptionText:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
  },
  {
    title: 'extra',
    value: 3,
    price: 6000,
    titleText: 'Стиль EXTRA',
    descriptionText:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu. Aenean commodo ligula eget dolor. Aenean massa. ',
  },
]
const activeIndexes = ref([0])
const selectedValue = ref(servicePackages[0])

const handleClick = (index: number) => {
  activeIndexes.value = []
  for (let i = 0; i <= index; i++) {
    activeIndexes.value.push(i)
  }
  selectedValue.value = servicePackages[index]
  console.log(selectedValue.value)
}

const cost = computed(() => {
  return selectedValue.value ? selectedValue.value.price * sliderValue.value : 0
})

onMounted(async () => {
  await nextTick()
  const handle: HTMLElement | null = document.querySelector('#slider .rs-handle')
  if (handle instanceof HTMLElement) {
    handle.style.position = 'relative'
    handle.style.zIndex = '5'
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

  const slider: HTMLElement | null = document.querySelector('#slider')

  if (slider instanceof HTMLElement) {
    slider.style.position = 'relative'
    slider.insertAdjacentHTML(
      'beforeend',
      `<div style="font-family: var(--font-family);
        font-weight: 400;
        font-size: 24px;
        text-align: center;
        color: #fff;
        position: absolute;
        top:-40px;
        left:50%;
        transform: translateX(-50%);
        ">
        m
        <sup>2</sup>
        </div>`,
    )
  }

  const tooltipText: HTMLElement | null = document.querySelector('#slider .rs-tooltip-text')
  if (tooltipText instanceof HTMLElement) {
    tooltipText.style.cssText += `
      font-family: Bruno Ace;
      font-size: 64px;
      line-height: 109%;
      margin-top: -41px;
      margin-left: -63px;
    `
  }
})
</script>

<template>
  <div class="wrapper">
    <round-slider
      id="slider"
      min="0"
      max="360"
      handle-size=""
      range-color="#ffac30"
      path-color="rgba(255, 255, 255, 0.4)"
      value="0"
      width="2"
      show-tooltip="true"
      editableTooltip="true"
      tooltipColor="#fff"
      startAngle="90"
      endAngle="+360"
      radius="117"
      v-model="sliderValue"
      style="z-index: 5"
    />
    <div class="service-packages">
      <div class="instruction">
        Select an area size &<br />
        one of the service packages:
      </div>
      <div
        v-for="(item, index) in servicePackages"
        :key="index"
        @click="handleClick(index)"
        class="range"
        :class="{ active: activeIndexes.includes(index) }"
      >
        <div class="line"></div>
        <div class="dot">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="circle"
          >
            <circle cx="20" cy="20" r="19.5" transform="rotate(90 20 20)" stroke="#FFAC30" />
          </svg>
          <div class="title">{{ item['title'] }}</div>
        </div>
      </div>
      <div class="range">
        <div class="line"></div>
        <svg
          width="24"
          height="31"
          viewBox="0 0 24 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L23 15.5L1 30" stroke="white" />
        </svg>
      </div>
    </div>
    <div class="cost">
      <div class="cost__number">{{ cost.toLocaleString('ru-RU') }}</div>
      <div class="cost__currency">₽</div>
    </div>

    <BottomForm
      :type="'text'"
      :titleText="selectedValue.titleText"
      :accentTitle="false"
      :descriptionText="selectedValue.descriptionText"
    ></BottomForm>
  </div>
</template>

<style scoped>
.wrapper {
  background:
    linear-gradient(var(--color-background)),
    url('/src/images/screens/screen4.jpg') no-repeat center right;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 280px;
  column-gap: 28px;
}

.service-packages {
  display: flex;
  column-gap: 23px;
  position: relative;
}

.range {
  display: flex;
  column-gap: 23px;
  justify-content: center;
  align-items: center;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: var(--color-text);
  position: relative;
  cursor: pointer;
}

.circle {
  position: absolute;
  top: -16px;
  left: -16px;
  opacity: 0;
  transition: 0.3s;
}

.title {
  position: absolute;
  top: -80px;
  left: 0px;
  transform: translateX(calc(-50% + 4px));
  font-family: var(--third-family);
  font-weight: 400;
  font-size: 28px;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-text);
  transition: 0.3s;
}

.line {
  border: 1px solid var(--color-text);
  width: 80px;
  height: 0px;
  transition: 0.3s;
}

.active .line {
  border: 1px solid var(--color-accent);
}

.active .title {
  color: var(--color-accent);
}

.active .circle {
  opacity: 1;
}

.active .dot {
  background-color: var(--color-accent);
}

.cost {
  display: flex;
  column-gap: 23px;
  justify-content: start;
  align-items: center;
}

.cost__number {
  font-family: var(--third-family);
  font-weight: 400;
  font-size: 64px;
  line-height: 109%;
  color: var(--color-text);
}

.cost__currency {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 200%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-text);
}

.instruction {
  font-family: var(--font3);
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 0.3em;
  color: var(--color-text);
  position: absolute;
  left: 0;
  top: -200px;
}
</style>
