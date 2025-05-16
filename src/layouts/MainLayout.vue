<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <div class="container">
      <aside class="aside-left">
        <img src="/src/images/logo.svg" alt="logo" class="logo" />
        <div class="description">ремонт квартир под ключ</div>
        <div class="line"></div>
        <div class="socials">
          <img src="/src/images/icons/face.svg" alt="facebook" />
          <img src="/src/images/icons/inst.svg" alt="instagram" />
          <img src="/src/images/icons/tele.svg" alt="telegram" />
          <img src="/src/images/icons/yout.svg" alt="youtube" />
        </div>
      </aside>
      <header>
        <div class="header-left-side">
          <img src="/src/images/icons/menu.svg" alt="menu" />
          <div class="phone">8 (800) 000 00 00</div>
        </div>
        <div class="header-right-side">
          <div class="request-call">Заказать звонок</div>
          <slot name="call-icon"></slot>
        </div>
      </header>
      <div class="aside-right">
        <slot name="aside-right"></slot>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.wrapper {
  min-width: 100%;
  width: 100%;
  min-height: 100vh;
  height: 100%;
}

.container {
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  display: flex;
  margin: 0 auto;
}

header {
  max-width: 1564px;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  border-bottom: 1px solid var(--color-text-light);
}

.aside-left {
  min-width: 178px;
  height: 100%;
  min-height: calc(100hv - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 34px;
  padding-bottom: 80px;
  z-index: 3;
}

.description {
  font-family: var(--font3);
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.69em;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-text-semi-light);
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  white-space: nowrap;
}

.line {
  border: 1px solid var(--color-text-semi-light);
  width: 0px;
  min-height: 90px;
  height: 100%;
  max-height: 154px;
}

.socials {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 30px;
}

.socials > img {
  cursor: pointer;
}

.socials > img:hover {
  filter: brightness(1.2) drop-shadow(0 0 2px rgba(255, 255, 255, 0.7));
  -webkit-filter: brightness(1.2) drop-shadow(0 0 2px rgba(255, 255, 255, 0.7));
}

.aside-right {
  min-width: 178px;
  height: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  z-index: 3;
}

.header-left-side {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 130px;
}

.header-right-side {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 50px;
}

.phone {
  font-family: var(--font3);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.1em;
  color: var(--color-text);
}

.request-call {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: right;
  color: var(--color-accent);
}

.content {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
