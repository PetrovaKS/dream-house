<script setup lang="ts">
import { MarkerLeftDown } from '../../gallery-markers'

const marker1Props = {
  id: 'marker1',
  markerTranslateX: -240,
  markerTranslateY: 150,
  string1: 'Установка',
  string2: 'межкомнатных',
  string3: 'дверей',
}
</script>

<template>
  <div class="slide1">
    <MarkerLeftDown v-bind="marker1Props"></MarkerLeftDown>

    <!-- dot2 -->
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="gallery-dot"
      id="dot2"
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
    <!-- line2 -->
    <svg
      width="221"
      height="227"
      viewBox="0 0 221 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="gallery-line dot2-line"
    >
      <!-- Анимированная линия (горизонтальная часть) -->
      <line
        x1="212"
        y1="42.5"
        x2="72"
        y2="42.5"
        stroke="#FFAC30"
        stroke-dasharray="140"
        stroke-dashoffset="140"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="140"
          to="0"
          dur="0.5s"
          begin="dot2.mouseenter"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42 0 0.58 1"
        />
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="140"
          dur="0.5s"
          begin="dot2.mouseleave + 0.3s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42 0 0.58 1"
        />
      </line>

      <!-- Текст, появляющийся вместе с линией -->
      <text
        x="212"
        y="77"
        font-family="Open Sans"
        font-size="16"
        line-height="112%"
        fill="#FFF"
        font-weight="600"
        opacity="0"
        text-anchor="end"
      >
        <tspan x="212" dy="0">Установка</tspan>
        <tspan x="212" dy="1.1em">межкомнатных</tspan>
        <tspan x="212" dy="1.1em">дверей</tspan>

        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.4s"
          begin="dot2.mouseenter + 0.4s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42 0 0.58 1"
        />
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="0.4s"
          begin="dot2.mouseleave + 0.4s"
          fill="freeze"
        />
      </text>

      <!-- Анимированная линия (диагональная часть) -->
      <line
        x1="71.8374"
        y1="42.433"
        x2="0.802197"
        y2="1.42082"
        stroke="#FFAC30"
        stroke-dasharray="85"
        stroke-dashoffset="85"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="85"
          to="0"
          dur="0.3s"
          begin="dot2.mouseenter + 0.5s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42 0 0.58 1"
        />
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="85"
          dur="0.3s"
          begin="dot2.mouseleave"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42 0 0.58 1"
        />
      </line>

      <!-- Круг с анимацией появления -->
      <circle
        cx="216.5"
        cy="42.5"
        r="4.5"
        transform="rotate(-90 216.5 42.5)"
        fill="#FFAC30"
        opacity="0"
      >
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.3s"
          begin="dot2.mouseenter"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="0.3s"
          begin="dot2.mouseleave + 0.8s"
          fill="freeze"
        />
      </circle>
    </svg>

    <!-- dot3 -->
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="gallery-dot"
      id="dot3"
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
    <!-- line3 -->
    <svg
      width="221"
      height="227"
      viewBox="0 0 221 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="gallery-line dot3-line"
    >
      <!-- Анимированная горизонтальная линия -->
      <line
        x1="9"
        y1="4.5"
        x2="149"
        y2="4.49999"
        stroke="#FFAC30"
        stroke-dasharray="140"
        stroke-dashoffset="140"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="140"
          to="0"
          dur="0.5s"
          begin="dot3.mouseenter"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42 0 0.58 1"
        />
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="140"
          dur="0.5s"
          begin="dot3.mouseleave + 0.3s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42 0 0.58 1"
        />
      </line>

      <!-- Текст, появляющийся вместе с линией -->
      <text
        x="10"
        y="-65"
        font-family="Open Sans"
        font-size="16"
        line-height="112%"
        fill="#FFF"
        font-weight="600"
        opacity="0"
        text-anchor="start"
      >
        <tspan x="10" dy="0">Установка</tspan>
        <tspan x="10" dy="1.1em">межкомнатных</tspan>
        <tspan x="10" dy="1.1em">дверей</tspan>
        <tspan x="10" dy="1.1em">дверей</tspan>

        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.4s"
          begin="dot3.mouseenter + 0.4s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42 0 0.58 1"
        />
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="0.4s"
          begin="dot3.mouseleave + 0.4s"
          fill="freeze"
        />
      </text>

      <!-- Анимированная диагональная линия -->
      <line
        x1="149.163"
        y1="4.56699"
        x2="220.198"
        y2="45.5792"
        stroke="#FFAC30"
        stroke-dasharray="82"
        stroke-dashoffset="82"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="82"
          to="0"
          dur="0.3s"
          begin="dot3.mouseenter + 0.5s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42 0 0.58 1"
        />
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="82"
          dur="0.3s"
          begin="dot3.mouseleave"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42 0 0.58 1"
        />
      </line>

      <!-- Круг с анимацией появления -->
      <circle cx="4.5" cy="4.5" r="4.5" transform="rotate(90 4.5 4.5)" fill="#FFAC30" opacity="0">
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.3s"
          begin="dot3.mouseenter"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="0.3s"
          begin="dot3.mouseleave + 0.8s"
          fill="freeze"
        />
      </circle>
    </svg>

    <!-- dot4 -->
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="gallery-dot"
      id="dot4"
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
    <!-- line4 -->
    <svg
      width="221"
      height="227"
      viewBox="0 0 221 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="gallery-line dot4-line"
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
          begin="dot4.mouseenter"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42 0 0.58 1"
        />
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="140"
          dur="0.5s"
          begin="dot4.mouseleave + 0.3s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42 0 0.58 1"
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
        <tspan x="212" dy="0">Установка</tspan>
        <tspan x="212" dy="1.1em">межкомнатных</tspan>
        <tspan x="212" dy="1.1em">дверей</tspan>
        <tspan x="212" dy="1.1em">дверей</tspan>

        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.4s"
          begin="dot4.mouseenter + 0.4s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42 0 0.58 1"
        />
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="0.4s"
          begin="dot4.mouseleave + 0.4s"
          fill="freeze"
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
          begin="dot4.mouseenter + 0.5s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42 0 0.58 1"
        />
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="82.0244"
          dur="0.3s"
          begin="dot4.mouseleave"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42 0 0.58 1"
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
          begin="dot4.mouseenter"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="0.3s"
          begin="dot4.mouseleave + 0.8s"
          fill="freeze"
        />
      </circle>
    </svg>
  </div>
</template>

<style scoped>
.slide1 {
  width: 100%;
  height: 100%;
  background:
    linear-gradient(var(--color-background)),
    url('/src/images/gallery-vip/vip-1.jpg') no-repeat center center;
}

#dot2 {
  transform: translateX(-30px) translateY(200px);
}

.dot2-line {
  transform: translateX(-7px) translateY(133px);
}

#dot3 {
  transform: translateX(-30px) translateY(540px);
}

.dot3-line {
  transform: translateX(-228px) translateY(426px);
}

#dot4 {
  transform: translateX(300px) translateY(250px);
}

.dot4-line {
  transform: translateX(323px) translateY(136px);
}
</style>
