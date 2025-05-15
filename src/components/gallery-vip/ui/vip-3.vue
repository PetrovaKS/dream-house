<script setup lang="ts">
import { MarkerLeftDown } from '../../gallery-markers'
import { MarkerRightDown } from '../../gallery-markers'
import { MarkerLeftUp } from '../../gallery-markers'
import { MarkerRightUp } from '../../gallery-markers'

const marker1Props = {
  id: 'marker1',
  markerTranslateX: 320,
  markerTranslateY: 250,
  string1: 'Финишная',
  string2: 'отделка стен,',
  string3: 'покраска стен,',
}

const marker2Props = {
  id: 'marker2',
  markerTranslateX: -700,
  markerTranslateY: 130,
  string1: 'Вентилционные',
  string2: 'работы',
}

const marker3Props = {
  id: 'marker3',
  markerTranslateX: -210,
  markerTranslateY: 200,
  string1: 'Проходные',
  string2: 'выключатели',
}

const marker4Props = {
  id: 'marker4',
  markerTranslateX: -600,
  markerTranslateY: 540,
  string1: 'Финишная отделка пола:',
  string2: 'Укладка ламината,',
  string3: 'паркетной доски',
}
</script>

<template>
  <div class="slide3">
    <MarkerLeftDown v-bind="marker1Props"></MarkerLeftDown>
    <MarkerRightDown v-bind="marker2Props"></MarkerRightDown>
    <MarkerRightDown v-bind="marker3Props"></MarkerRightDown>
    <MarkerRightUp v-bind="marker4Props"></MarkerRightUp>
  </div>
</template>

<style scoped>
.slide3 {
  width: 100%;
  height: 100%;
  /* background:
    linear-gradient(var(--color-semi-dark-background)),
    url('/src/images/gallery-vip/vip-3.png') no-repeat center bottom; */
}
</style>
