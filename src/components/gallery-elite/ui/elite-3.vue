<script setup lang="ts">
import { MarkerLeftDown } from '../../gallery-markers'
import { MarkerRightDown } from '../../gallery-markers'
import { MarkerLeftUp } from '../../gallery-markers'
import { MarkerRightUp } from '../../gallery-markers'

const marker1Props = {
  id: 'marker1',
  markerTranslateX: -180,
  markerTranslateY: 420,
  string1: 'Монтаж',
  string2: 'раковины',
}

const marker2Props = {
  id: 'marker2',
  markerTranslateX: -600,
  markerTranslateY: 550,
  string1: 'Монтаж',
  string2: 'водопровода',
  string3: 'и канализации',
}

const marker3Props = {
  id: 'marker3',
  markerTranslateX: -20,
  markerTranslateY: 720,
  string1: 'Установка',
  string2: 'ванны',
  string3: 'и душевой кабины',
}

const marker4Props = {
  id: 'marker4',
  markerTranslateX: -30,
  markerTranslateY: 200,
  string1: 'Укладка плитки на пол',
  string2: 'и стены в санузле',
  string3: 'и ванной (до 5м2 по полу)',
}
</script>

<template>
  <div class="slide3">
    <MarkerLeftDown v-bind="marker1Props"></MarkerLeftDown>
    <MarkerRightDown v-bind="marker4Props"></MarkerRightDown>
    <MarkerLeftUp v-bind="marker3Props"></MarkerLeftUp>
    <MarkerRightUp v-bind="marker2Props"></MarkerRightUp>
  </div>
</template>

<style scoped>
.slide3 {
  width: 100%;
  height: 100%;
  background:
    linear-gradient(var(--color-semi-dark-background)),
    url('/src/images/gallery-elite/elite-3.jpg') no-repeat center bottom;
}
</style>
