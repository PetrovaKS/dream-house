<script setup lang="ts">
import type { Component } from 'vue'
import { Gallery } from '../../gallery'

import { Extra1, Extra2, Extra3 } from '../../gallery-extra'

const slides = {
  1: Extra1,
  2: Extra2,
  3: Extra3,
} as Record<number, Component>

// Определяем фоновые изображения для каждого компонента
const componentBackgrounds = {
  1: '/src/images/gallery-extra/extra-1.jpg',
  2: '/src/images/gallery-extra/extra-2.jpg',
  3: '/src/images/gallery-extra/extra-3.jpg',
} as Record<number, string>
</script>

<template>
  <Gallery :slides="slides" :backgrounds="componentBackgrounds"></Gallery>
</template>

<style scoped></style>
