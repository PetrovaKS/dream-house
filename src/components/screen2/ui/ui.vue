<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <div class="title">elite renovation of your<br />apartment</div>
    <div class="inner-wrapper">
      <div class="statistic-section">
        <div class="number">18</div>
        <div class="badge">
          years<br />
          on the market
        </div>
      </div>
      <div class="line"></div>
      <div class="statistic-section">
        <div class="number">237</div>
        <div class="badge">completed<br />projects</div>
      </div>
      <div class="line"></div>
      <div class="statistic-section">
        <div class="number">50</div>
        <div class="badge">employees<br /></div>
      </div>
    </div>
  </div>

  <Teleport defer to="#pag-wrapper">
    <div class="more-about">
      <div class="more-about__text">more info about us</div>
      <img src="/src/images/icons/arrow-white-115.svg" alt="arrow" />
    </div>
  </Teleport>
</template>

<style scoped>
.wrapper {
  background:
    linear-gradient(var(--color-background)),
    url('/src/images/screens/screen2.jpg') no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-bottom: 40vh;
}

.inner-wrapper {
  max-width: 1564px;
  width: 100%;
  display: flex;
}

.statistic-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: calc((100% - 4px) / 3);
  width: 100%;
  gap: 15px;
}

.line {
  width: 1px;
  height: 250px;
  border: none;
  border-left: 2px solid transparent;
  border-image: linear-gradient(
      to bottom,
      transparent 0%,
      var(--color-text-light) 50%,
      transparent 100%
    )
    1;
}

.number {
  font-family: var(--third-family);
  font-weight: 400;
  font-size: 64px;
  line-height: 109%;
  text-align: center;
  color: var(--color-text);
}

.badge {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 30px;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-text);
  min-height: 67px;
}

.title {
  font-family: var(--font3);
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-text);
  padding-bottom: 65px;
}

.more-about {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-bottom: 80px;
  cursor: pointer;
}

.more-about__text {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  color: var(--color-text);
}
</style>
