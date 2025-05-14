<script setup lang="ts">
import { MarkerLeftDown } from '../../gallery-markers'
import { MarkerRightDown } from '../../gallery-markers'
import { MarkerLeftUp } from '../../gallery-markers'
import { MarkerRightUp } from '../../gallery-markers'

const marker1Props = {
  id: 'marker1',
  markerTranslateX: -400,
  markerTranslateY: 210,
  string1: 'Выведение углов',
  string2: '90 градусов',
}

const marker2Props = {
  id: 'marker2',
  markerTranslateX: -600,
  markerTranslateY: 550,
  string1: 'Помощь в подборе',
  string2: 'мебели, техники,',
  string3: 'отделочных материалов',
}

const marker3Props = {
  id: 'marker3',
  markerTranslateX: -20,
  markerTranslateY: 620,
  string1: 'Укладка ламината,',
  string2: 'укладка паркетной',
  string3: 'доски с использованием',
  string4: 'двухкомпонентного клея',
}

const marker4Props = {
  id: 'marker4',
  markerTranslateX: -30,
  markerTranslateY: 120,
  string1: 'Потолок натяжной',
  string2: 'EXTRA качества',
  string3: '("парящая" конструкция)',
}
</script>

<template>
  <div class="slide1">
    <MarkerRightDown v-bind="marker1Props"></MarkerRightDown>
    <MarkerRightDown v-bind="marker4Props"></MarkerRightDown>
    <MarkerLeftUp v-bind="marker3Props"></MarkerLeftUp>
    <MarkerRightUp v-bind="marker2Props"></MarkerRightUp>
  </div>
</template>

<style scoped>
.slide1 {
  width: 100%;
  height: 100%;
  background:
    linear-gradient(var(--color-semi-dark-background)),
    url('/src/images/gallery-extra/extra-1.jpg') no-repeat center bottom;
}
</style>
