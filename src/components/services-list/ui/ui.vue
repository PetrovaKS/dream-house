<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue'
import { useServicesListStore } from '../model'

const servicesListStore = useServicesListStore()

const list = ref<HTMLElement | null>(null)

const listHeight = computed(() => {
  return list.value?.scrollHeight || 0
})

const close = () => {
  servicesListStore.isOpen = false
}

// Функция для обновления колонок
const updateColumns = () => {
  if (!list.value) return

  // Вычисляем доступную высоту (высота окна минус 190px)
  const availableHeight = window.innerHeight - 190

  // Устанавливаем количество колонок
  list.value.style.columnCount = listHeight.value > availableHeight ? '3' : '2'
}

// Наблюдаем за изменениями высоты списка
watch(listHeight, updateColumns)

onMounted(() => {
  updateColumns()
  window.addEventListener('resize', updateColumns)
})
</script>

<template>
  <div class="wrapper-list">
    <img src="/src/images/icons/close.svg" alt="close" class="close" @click="close" />
    <div class="title-group">
      <div class="title">
        {{ servicesListStore.activeList }}
      </div>
      <svg
        width="108"
        height="240"
        viewBox="0 0 108 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_683_32"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="108"
          height="240"
        >
          <rect
            width="240"
            height="108"
            transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 108 240)"
            fill="#C4C4C4"
          />
        </mask>
        <g mask="url(#mask0_683_32)">
          <circle
            cx="-3.80289e-06"
            cy="120"
            r="86"
            transform="rotate(90 -3.80289e-06 120)"
            stroke="black"
            stroke-opacity="0.15"
            stroke-width="2"
          />
        </g>
      </svg>
    </div>
    <div class="list-group">
      <div class="list-group__coast">от 3000 ₽</div>
      <ul class="list-group__list" ref="list">
        <li v-for="(item, idx) of servicesListStore.list[servicesListStore.activeList]" :key="idx">
          <div>{{ item }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.wrapper-list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  z-index: 10;
  background: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 145px;
  padding: 60px 150px;
}

.title-group {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-family: var(--third-family);
  font-weight: 400;
  font-size: 36px;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-accent);
  transform: translateX(50%);
}

.list-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.list-group__coast {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-family: var(--third-family);
  font-weight: 400;
  font-size: 24px;
  color: var(--color-semi-dark);
  border-bottom: 2px solid var(--color-border);
  padding: 20px 0;
  margin-bottom: 46px;
}

.list-group__list {
  margin: 0;
  padding: 0;
  list-style: none;
  column-gap: 20px; /* Расстояние между колонками */
  column-fill: balance; /* Колонки одинаковой высоты */
  column-count: 2;
  column-width: 30%;
}

li {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--color-dark);
  padding: 10px 0;
  display: flex;
}

li::before {
  content: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='5' fill='%23FFAC30' /%3E%3C/svg%3E");
  margin-right: 30px;
  vertical-align: middle;
}

.close {
  position: absolute;
  top: 60px;
  right: 60px;
  cursor: pointer;
}
</style>
