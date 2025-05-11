<script setup lang="ts">
import type { Component } from 'vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
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

const next = () => {
  if (active.value == 6) return
  ++active.value
}

const previous = () => {
  if (active.value == 1) return
  active.value = active.value - 1
}

const onWheel = (e: WheelEvent) => {
  if (e.deltaY > 0) {
    next()
  }
  if (e.deltaY < 0) {
    previous()
  }
}

const handelSubmitForm = (name: string, phone: string) => {
  console.log(name, phone.length)
}

onMounted(() => {
  document.addEventListener('wheel', onWheel)
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
          @click="active = n"
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
      <component :is="screens[active]"></component>

      <BottomForm @submit="handelSubmitForm" v-if="active < 3"></BottomForm>
    </template>
  </MainLayout>
</template>

<style scoped>
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
