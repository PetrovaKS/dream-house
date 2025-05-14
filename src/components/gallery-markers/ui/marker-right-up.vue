<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  id: string
  markerTranslateX: number
  markerTranslateY: number
  string1: string
  string2?: string
  string3?: string
  string4?: string
}

const props = defineProps<Props>()

const lineTranslateX = computed(() => {
  return props.markerTranslateX + 23
})

const lineTranslateY = computed(() => {
  return props.markerTranslateY - 114
})

const horizontalAnimationId = computed(() => `${props.id}Horizontal`)
const diagonalAnimationId = computed(() => `${props.id}Diagonal`)
</script>

<template>
  <!-- dot -->
  <svg
    width="46"
    height="46"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="gallery-dot"
    :id="props.id"
    :style="{ transform: `translateX(${markerTranslateX}px) translateY(${markerTranslateY}px)` }"
  >
    <set attributeName="cursor" to="pointer" begin="mouseenter" end="mouseleave" />

    <!-- Внутренний круг с пульсацией -->
    <ellipse
      id="inner-circle"
      cx="23"
      cy="23"
      rx="7"
      ry="7"
      transform="rotate(90 23 23)"
      fill="#FFAC30"
    >
      <animate
        attributeName="opacity"
        values="1;0.8;1"
        dur="2.1s"
        begin="0s"
        repeatCount="indefinite"
        keyTimes="0;0.3;1"
        calcMode="spline"
        keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
      />
    </ellipse>

    <!-- Средний круг с пульсацией обводки -->
    <path
      id="middle-circle"
      d="M37.5 23C37.5 31.0081 31.0081 37.5 23 37.5C14.9919 37.5 8.5 31.0081 8.5 23C8.5 14.9919 14.9919 8.5 23 8.5C31.0081 8.5 37.5 14.9919 37.5 23Z"
      stroke-opacity="0.5"
      stroke="#FFAC30"
    >
      <animate
        attributeName="stroke-opacity"
        values="0.5;0.8;0.5"
        dur="2.1s"
        begin="0.7s"
        repeatCount="indefinite"
        keyTimes="0;0.3;1"
        calcMode="spline"
        keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
      />
    </path>

    <!-- Внешний круг с пульсацией обводки -->
    <path
      id="outer-circle"
      d="M45.5 23C45.5 35.4264 35.4264 45.5 23 45.5C10.5736 45.5 0.499998 35.4264 0.499999 23C0.500001 10.5736 10.5736 0.499999 23 0.499999C35.4264 0.5 45.5 10.5736 45.5 23Z"
      stroke-opacity="0.2"
      stroke="#FFAC30"
    >
      <animate
        attributeName="stroke-opacity"
        values="0.2;0.5;0.2"
        dur="2.1s"
        begin="1.4s"
        repeatCount="indefinite"
        keyTimes="0;0.3;1"
        calcMode="spline"
        keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
      />
    </path>
  </svg>
  <!-- line -->
  <svg
    width="221"
    height="227"
    viewBox="0 0 221 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="gallery-line"
    :style="{
      transform: `translateX(${lineTranslateX}px) translateY(${lineTranslateY}px)`,
    }"
  >
    <!-- Горизонтальная линия (справа налево) -->
    <line
      y1="-0.5"
      x2="140"
      y2="-0.5"
      transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 212 5)"
      stroke="#FFAC30"
      stroke-dasharray="140"
      stroke-dashoffset="140"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="140"
        to="0"
        dur="0.5s"
        :begin="`${props.id}.mouseenter`"
        restart="whenNotActive"
        fill="freeze"
        calcMode="spline"
        keySplines="0.42 0 0.58 1"
      />
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="140"
        dur="0.5s"
        :begin="`${diagonalAnimationId}.end`"
        restart="whenNotActive"
        fill="freeze"
        calcMode="spline"
        keySplines="0.42 0 0.58 1"
        :id="horizontalAnimationId"
      />
    </line>

    <!-- Текст, появляющийся вместе с линией -->
    <text
      x="212"
      y="-65"
      font-family="Open Sans"
      font-size="16"
      line-height="112%"
      fill="#FFF"
      font-weight="600"
      opacity="0"
      text-anchor="end"
    >
      <tspan x="212" dy="0">{{ props.string1 }}</tspan>
      <tspan x="212" dy="1.1em" v-if="props.string2">{{ props.string2 }}</tspan>
      <tspan x="212" dy="1.1em" v-if="props.string3">{{ props.string3 }}</tspan>
      <tspan x="212" dy="1.1em" v-if="props.string4">{{ props.string4 }}</tspan>

      <animate
        attributeName="opacity"
        from="0"
        to="1"
        dur="0.4s"
        :begin="`${props.id}.mouseenter + 0.4s`"
        fill="freeze"
        calcMode="spline"
        keySplines="0.42 0 0.58 1"
        restart="whenNotActive"
      />
      <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="0.4s"
        :begin="`${diagonalAnimationId}.end`"
        fill="freeze"
        restart="whenNotActive"
      />
    </text>

    <!-- Диагональная линия -->
    <line
      y1="-0.5"
      x2="82.0244"
      y2="-0.5"
      transform="matrix(-0.866025 0.5 0.5 0.866025 72.0874 5)"
      stroke="#FFAC30"
      stroke-dasharray="82.0244"
      stroke-dashoffset="82.0244"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="82.0244"
        to="0"
        dur="0.3s"
        :begin="`${props.id}.mouseenter + 0.5s`"
        :end="`${props.id}.mouseleave`"
        restart="whenNotActive"
        fill="freeze"
        calcMode="spline"
        keySplines="0.42 0 0.58 1"
      />
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="82.0244"
        dur="0.3s"
        :begin="`${props.id}.mouseleave + 0.5s`"
        restart="whenNotActive"
        fill="freeze"
        calcMode="spline"
        keySplines="0.42 0 0.58 1"
        :id="diagonalAnimationId"
      />
    </line>

    <!-- Круг (появляется последним) -->
    <circle
      cx="4.5"
      cy="4.5"
      r="4.5"
      transform="matrix(4.37114e-08 1 1 -4.37114e-08 212 0)"
      fill="#FFAC30"
      opacity="0"
    >
      <animate
        attributeName="opacity"
        from="0"
        to="1"
        dur="0.3s"
        :begin="`${props.id}.mouseenter`"
        fill="freeze"
        restart="whenNotActive"
      />
      <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="0.3s"
        :begin="`${horizontalAnimationId}.end`"
        fill="freeze"
        restart="whenNotActive"
      />
    </circle>
  </svg>
</template>
