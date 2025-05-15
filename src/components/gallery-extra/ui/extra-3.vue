<script setup lang="ts">
import { MarkerLeftDown } from '../../gallery-markers'
import { MarkerRightDown } from '../../gallery-markers'
import { MarkerLeftUp } from '../../gallery-markers'
import { MarkerRightUp } from '../../gallery-markers'

const marker1Props = {
  id: 'marker1',
  markerTranslateX: -500,
  markerTranslateY: 150,
  string1: 'Монтаж системы',
  string2: 'кондиционирования',
}

const marker2Props = {
  id: 'marker2',
  markerTranslateX: -600,
  markerTranslateY: 500,
  string1: 'Организация',
  string2: 'закупки',
  string3: 'материалов',
}

const marker3Props = {
  id: 'marker3',
  markerTranslateX: 300,
  markerTranslateY: 300,
  string1: 'Звукоизоляционные',
  string2: 'работы',
}

const marker4Props = {
  id: 'marker4',
  markerTranslateX: 60,
  markerTranslateY: 120,
  string1: 'Монтаж',
  string2: 'потолочного плинтуса',
}
</script>

<template>
  <div class="slide3">
    <MarkerRightDown v-bind="marker1Props"></MarkerRightDown>
    <MarkerLeftDown v-bind="marker4Props"></MarkerLeftDown>
    <MarkerLeftDown v-bind="marker3Props"></MarkerLeftDown>
    <MarkerRightUp v-bind="marker2Props"></MarkerRightUp>
  </div>
</template>

<style scoped>
.slide3 {
  width: 100%;
  height: 100%;
  /* background:
    linear-gradient(var(--color-semi-dark-background)),
    url('/src/images/gallery-extra/extra-3.jpg') no-repeat center bottom; */
}
</style>
