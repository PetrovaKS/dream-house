<script setup lang="ts">
import type { Component } from 'vue'
import { Gallery } from '../../gallery'

import { Elite1, Elite2, Elite3 } from '../../gallery-elite'

const slides = {
  1: Elite1,
  2: Elite2,
  3: Elite3,
} as Record<number, Component>
</script>

<template>
  <Gallery :slides="slides"></Gallery>
</template>

<style scoped></style>
