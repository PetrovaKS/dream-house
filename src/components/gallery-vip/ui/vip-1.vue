<script setup lang="ts">
import { MarkerLeftDown } from '../../gallery-markers'
import { MarkerRightDown } from '../../gallery-markers'
import { MarkerLeftUp } from '../../gallery-markers'
import { MarkerRightUp } from '../../gallery-markers'

const marker1Props = {
  id: 'marker1',
  markerTranslateX: -240,
  markerTranslateY: 150,
  string1: 'Установка',
  string2: 'межкомнатных',
  string3: 'дверей',
}

const marker2Props = {
  id: 'marker2',
  markerTranslateX: -30,
  markerTranslateY: 200,
  string1: 'Выведение',
  string2: 'углов',
  string3: '90 градусов',
}

const marker3Props = {
  id: 'marker3',
  markerTranslateX: -30,
  markerTranslateY: 540,
  string1: 'Укладка',
  string2: 'ламината',
  string3: 'на подложку',
}

const marker4Props = {
  id: 'marker4',
  markerTranslateX: 300,
  markerTranslateY: 250,
  string1: 'Уборка',
  string2: 'после',
  string3: 'ремонта',
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
    url('/src/images/gallery-vip/vip-1.jpg') no-repeat center center; */
}
</style>
