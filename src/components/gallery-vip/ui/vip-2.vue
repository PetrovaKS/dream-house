<script setup lang="ts">
import { MarkerLeftDown } from '../../gallery-markers'
import { MarkerRightDown } from '../../gallery-markers'
import { MarkerLeftUp } from '../../gallery-markers'
import { MarkerRightUp } from '../../gallery-markers'

const marker1Props = {
  id: 'marker1',
  markerTranslateX: -40,
  markerTranslateY: 350,
  string1: 'Установка',
  string2: 'унитаза',
}

const marker2Props = {
  id: 'marker2',
  markerTranslateX: -600,
  markerTranslateY: 260,
  string1: 'Гидроизоляция',
  string2: 'мокрых зон',
}

const marker3Props = {
  id: 'marker3',
  markerTranslateX: -30,
  markerTranslateY: 540,
  string1: 'Монтаж',
  string2: 'водопровода',
  string3: 'и канализации',
}

const marker4Props = {
  id: 'marker4',
  markerTranslateX: 300,
  markerTranslateY: 250,
  string1: 'Установка скрытого',
  string2: 'ревизионного люка',
  string3: 'с облицовкой плиткой',
}
</script>

<template>
  <div class="slide2">
    <MarkerLeftDown v-bind="marker3Props"></MarkerLeftDown>
    <MarkerRightDown v-bind="marker2Props"></MarkerRightDown>
    <MarkerLeftUp v-bind="marker1Props"></MarkerLeftUp>
    <MarkerRightUp v-bind="marker4Props"></MarkerRightUp>
  </div>
</template>

<style scoped>
.slide2 {
  width: 100%;
  height: 100%;
  background:
    linear-gradient(var(--color-semi-dark-background)),
    url('/src/images/gallery-vip/vip-2.png') no-repeat center bottom;
}
</style>
