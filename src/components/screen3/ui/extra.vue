<script setup lang="ts">
import type { Component } from 'vue'
import { Gallery } from '../../gallery'

import { Extra1, Extra2, Extra3 } from '../../gallery-extra'

const slides = {
  1: Extra1,
  2: Extra2,
  3: Extra3,
} as Record<number, Component>
</script>

<template>
  <Gallery :slides="slides"></Gallery>
</template>

<style scoped></style>
