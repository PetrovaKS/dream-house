<script setup lang="ts">
import type { Component } from 'vue'
import { onMounted } from 'vue'
import { Gallery } from '../../gallery'

import { Vip1, Vip2, Vip3 } from '../../gallery-vip'

const slides = {
  1: Vip1,
  2: Vip2,
  3: Vip3,
} as Record<number, Component>

// Определяем фоновые изображения для каждого компонента
const componentBackgrounds = {
  1: '/src/images/gallery-vip/vip-1.jpg',
  2: '/src/images/gallery-vip/vip-2.png',
  3: '/src/images/gallery-vip/vip-3.png',
} as Record<number, string>
</script>

<template>
  <Gallery :slides="slides" :backgrounds="componentBackgrounds"></Gallery>
</template>

<style scoped></style>
