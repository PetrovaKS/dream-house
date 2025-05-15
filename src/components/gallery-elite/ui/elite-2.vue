<script setup lang="ts">
import { MarkerLeftDown } from '../../gallery-markers'
import { MarkerRightDown } from '../../gallery-markers'
import { MarkerLeftUp } from '../../gallery-markers'
import { MarkerRightUp } from '../../gallery-markers'

const marker1Props = {
  id: 'marker1',
  markerTranslateX: -180,
  markerTranslateY: 420,
  string1: 'Электромонтажные',
  string2: 'работы',
}

const marker2Props = {
  id: 'marker2',
  markerTranslateX: -600,
  markerTranslateY: 500,
  string1: 'Гидроизоляция',
  string2: 'мокрых зон',
}

const marker3Props = {
  id: 'marker3',
  markerTranslateX: -30,
  markerTranslateY: 720,
  string1: 'Монтаж',
  string2: 'напольного',
  string3: 'плинтуса ПВХ',
}

const marker4Props = {
  id: 'marker4',
  markerTranslateX: -30,
  markerTranslateY: 200,
  string1: 'Выравнивание стен',
  string2: 'под маяк,',
  string3: 'финишная отделка',
}
</script>

<template>
  <div class="slide2">
    <MarkerLeftDown v-bind="marker1Props"></MarkerLeftDown>
    <MarkerRightDown v-bind="marker4Props"></MarkerRightDown>
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
    url('/src/images/gallery-elite/elite-2.jpg') no-repeat center bottom; */
}
</style>
