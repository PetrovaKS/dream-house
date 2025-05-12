<script setup lang="ts">
import type { Component } from 'vue'
import { Gallery } from '../../gallery'

import { Vip1, Vip2, Vip3 } from '../../gallery-vip'

const slides = {
  1: Vip1,
  2: Vip2,
  3: Vip3,
} as Record<number, Component>
</script>

<template>
  <Gallery :slides="slides"></Gallery>
</template>

<style scoped></style>
