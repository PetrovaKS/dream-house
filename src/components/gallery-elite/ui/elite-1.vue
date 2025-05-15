<script setup lang="ts">
import { MarkerLeftDown } from '../../gallery-markers'
import { MarkerRightDown } from '../../gallery-markers'
import { MarkerLeftUp } from '../../gallery-markers'
import { MarkerRightUp } from '../../gallery-markers'

const marker1Props = {
  id: 'marker1',
  markerTranslateX: 0,
  markerTranslateY: 150,
  string1: 'Подготовка стен',
  string2: 'к поклейке',
  string3: 'обоев',
}

const marker2Props = {
  id: 'marker2',
  markerTranslateX: -600,
  markerTranslateY: 200,
  string1: 'Поклейка',
  string2: 'обоев',
}

const marker3Props = {
  id: 'marker3',
  markerTranslateX: -30,
  markerTranslateY: 700,
  string1: 'Заливка',
  string2: 'стяжки',
  string3: 'пола',
}

const marker4Props = {
  id: 'marker4',
  markerTranslateX: 300,
  markerTranslateY: 400,
  string1: 'Монтаж',
  string2: 'слаботочной',
  string3: 'проводки',
}
</script>

<template>
  <div class="slide1">
    <MarkerLeftDown v-bind="marker1Props"></MarkerLeftDown>
    <MarkerRightDown v-bind="marker2Props"></MarkerRightDown>
    <MarkerLeftUp v-bind="marker3Props"></MarkerLeftUp>
    <MarkerRightUp v-bind="marker4Props"></MarkerRightUp>
  </div>
</template>

<style scoped>
.slide1 {
  width: 100%;
  height: 100%;
  /* background:
    linear-gradient(var(--color-semi-dark-background)),
    url('/src/images/gallery-elite/elite-1.jpg') no-repeat center bottom; */
}
</style>
