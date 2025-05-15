<script setup lang="ts">
import { MarkerLeftDown } from '../../gallery-markers'
import { MarkerRightDown } from '../../gallery-markers'
import { MarkerLeftUp } from '../../gallery-markers'
import { MarkerRightUp } from '../../gallery-markers'

const marker1Props = {
  id: 'marker1',
  markerTranslateX: -470,
  markerTranslateY: 210,
  string1: 'Монтаж скрытого',
  string2: 'лючка ревизии',
  string3: 'с облицовкой в плитку',
}

const marker2Props = {
  id: 'marker2',
  markerTranslateX: -500,
  markerTranslateY: 500,
  string1: 'Монтаж водопровода',
  string2: 'и канализации (трубы',
  string3: 'Rehau, материалы',
  string4: 'класса EXTRA)',
}

const marker3Props = {
  id: 'marker3',
  markerTranslateX: 300,
  markerTranslateY: 400,
  string1: 'Монтаж раковины',
  string2: 'любой конфигурации',
}

const marker4Props = {
  id: 'marker4',
  markerTranslateX: 100,
  markerTranslateY: 150,
  string1: 'Монтаж осветительных',
  string2: 'приборов',
}
</script>

<template>
  <div class="slide2">
    <MarkerRightDown v-bind="marker1Props"></MarkerRightDown>
    <MarkerLeftDown v-bind="marker4Props"></MarkerLeftDown>
    <MarkerLeftUp v-bind="marker3Props"></MarkerLeftUp>
    <MarkerRightUp v-bind="marker2Props"></MarkerRightUp>
  </div>
</template>

<style scoped>
.slide2 {
  width: 100%;
  height: 100%;
  /* background:
    linear-gradient(var(--color-semi-dark-background)),
    url('/src/images/gallery-extra/extra-2.jpg') no-repeat center bottom; */
}
</style>
