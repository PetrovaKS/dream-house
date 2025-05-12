<script setup lang="ts">
import type { Component } from 'vue'
import { ref } from 'vue'
import { BottomForm } from '../../bottom-form'
import { GalleryPagination } from '../../gallery-pagination'

interface Props {
  slides: Record<number, Component>
}

const props = defineProps<Props>()

const active = ref(1)

const next = () => {
  if (active.value == Object.keys(props.slides).length) return
  ++active.value
}

const previous = () => {
  if (active.value == 1) return
  active.value = active.value - 1
}
</script>

<template>
  <div>
    <Transition>
      <component :is="props.slides[active]" :key="active"></component>
    </Transition>

    <BottomForm></BottomForm>
    <Teleport defer to="#pag-wrapper">
      <GalleryPagination
        :countSlides="Object.keys(props.slides).length"
        :currentSlide="active"
        @next="next"
        @previous="previous"
      ></GalleryPagination>
    </Teleport>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0.7;
}
</style>
