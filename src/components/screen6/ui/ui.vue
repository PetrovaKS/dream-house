<script setup lang="ts"></script>

<template>
  <div class="wrapper"></div>
</template>

<style scoped>
.wrapper {
  background:
    linear-gradient(rgba(0, 0, 0, 0.8)),
    url('/src/images/screens/screen5.jpg') no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px); /* Для Safari */
  pointer-events: none; /* Чтобы клики проходили сквозь этот слой */
}
</style>
