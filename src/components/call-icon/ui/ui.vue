<script setup lang="ts"></script>

<template>
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="call"
  >
    <path
      d="M69.5 40C69.5 56.2924 56.2924 69.5 40 69.5C23.7076 69.5 10.5 56.2924 10.5 40C10.5 23.7076 23.7076 10.5 40 10.5C56.2924 10.5 69.5 23.7076 69.5 40Z"
      stroke="white"
      stroke-opacity="0.1"
      id="circle-2"
    />
    <circle
      cx="40"
      cy="40"
      r="39.5"
      transform="rotate(90 40 40)"
      stroke="white"
      stroke-opacity="0.1"
      id="circle-3"
    />
    <circle
      cx="40"
      cy="40"
      r="20"
      transform="rotate(90 40 40)"
      fill="white"
      fill-opacity="0.1"
      id="circle-1"
    />
    <path
      d="M46.2824 44.3572C46.2824 44.2947 46.2824 44.2322 46.2556 44.1697C46.1931 43.9822 45.7556 43.7857 45.577 43.6964C45.0681 43.4107 44.5502 43.1339 44.0502 42.8393C43.8181 42.6964 43.5324 42.4286 43.2556 42.4286C42.7109 42.4286 41.9163 44.0447 41.4342 44.0447C41.1931 44.0447 40.8806 43.8214 40.6663 43.6964C39.0413 42.7947 37.9163 41.6697 37.0145 40.0447C36.8895 39.8304 36.6663 39.5179 36.6663 39.2768C36.6663 38.7947 38.2824 38 38.2824 37.4554C38.2824 37.1786 38.0145 36.8929 37.8717 36.6607C37.577 36.1607 37.3002 35.6429 37.0145 35.1339C36.9252 34.9554 36.7288 34.5179 36.5413 34.4554C36.4788 34.4286 36.4163 34.4286 36.3538 34.4286C36.0324 34.4286 35.4074 34.5714 35.1127 34.7054C34.6752 34.8929 34.3895 35.3929 34.1663 35.7947C33.8806 36.3214 33.7109 36.8572 33.7109 37.4554C33.7109 38.2857 34.0502 39.0357 34.327 39.7947C34.5234 40.3393 34.7645 40.8661 35.0681 41.3572C36.0056 42.875 37.8359 44.7054 39.3538 45.6429C39.8449 45.9464 40.3717 46.1875 40.9163 46.3839C41.6752 46.6607 42.4252 47 43.2556 47C43.8538 47 44.3895 46.8304 44.9163 46.5447C45.3181 46.3214 45.8181 46.0357 46.0056 45.5982C46.1395 45.3036 46.2824 44.6786 46.2824 44.3572Z"
      fill="white"
    />
    <animate
      xlink:href="#circle-1"
      attributeName="fill-opacity"
      values="0.1;0.3;0.1"
      dur="2.1s"
      begin="0s"
      repeatCount="indefinite"
      keyTimes="0;0.3;1"
      calcMode="spline"
      keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
    />
    <animate
      xlink:href="#circle-2"
      attributeName="stroke-opacity"
      values="0.1;0.3;0.1"
      dur="2.1s"
      begin="0.7s"
      repeatCount="indefinite"
      keyTimes="0;0.3;1"
      calcMode="spline"
      keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
    />
    <animate
      xlink:href="#circle-3"
      attributeName="stroke-opacity"
      values="0.1;0.3;0.1"
      dur="2.1s"
      begin="1.4s"
      repeatCount="indefinite"
      keyTimes="0;0.3;1"
      calcMode="spline"
      keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
    />
  </svg>
</template>

<style scoped>
.call {
  cursor: pointer;
}
</style>
