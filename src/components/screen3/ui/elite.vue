<script setup lang="ts">
import type { Component } from 'vue'
import { Gallery } from '../../gallery'

import { Elite1, Elite2, Elite3 } from '../../gallery-elite'

const slides = {
  1: Elite1,
  2: Elite2,
  3: Elite3,
} as Record<number, Component>

// Определяем фоновые изображения для каждого компонента
const componentBackgrounds = {
  1: '/src/images/gallery-elite/elite-1.jpg',
  2: '/src/images/gallery-elite/elite-2.jpg',
  3: '/src/images/gallery-elite/elite-3.jpg',
} as Record<number, string>
</script>

<template>
  <Gallery :slides="slides" :backgrounds="componentBackgrounds"></Gallery>
</template>

<style scoped></style>
