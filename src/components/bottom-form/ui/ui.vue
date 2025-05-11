<script setup lang="ts">
import { computed, watchEffect, ref } from 'vue'

type BottomFormType = 'input' | 'text'

interface Props {
  type?: BottomFormType
  placeholder1?: string
  placeholder2?: string
  buttonText?: string
  titleText?: string
  accentTitle?: boolean
  descriptionText?: string
  pointerEvents?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'input',
  placeholder1: 'Ваше имя',
  placeholder2: 'Ваш телефон',
  buttonText: 'Обсудить проект',
  accentTitle: false,
})

const emit = defineEmits<{
  (e: 'submit', name: string, phone: string): void
}>()

const name = ref('')
const nameError = ref(false)
const phone = ref('')
const phoneError = ref(false)

const validated = computed(() => {
  return name.value.trim() !== '' && phone.value.trim() !== '' && phone.value.trim().length == 18
})

const isSentForm = ref(false)
const isAnimate = ref(false)

const handleClick = () => {
  if (name.value == '') nameError.value = true
  if (phone.value == '' || phone.value.length < 18) phoneError.value = true
  if (validated.value) {
    emit('submit', name.value, phone.value)
    isSentForm.value = true
    name.value = ''
    phone.value = ''
    setTimeout(() => {
      isAnimate.value = true
      setTimeout(() => {
        isSentForm.value = false
        isAnimate.value = false
      }, 3000)
    }, 3000)
  }
}

watchEffect(() => {
  if (name.value) nameError.value = false
  if (phone.value) phoneError.value = false
})
</script>

<template>
  <div class="wrapper-with-pag">
    <div id="pag-wrapper"></div>

    <div class="form-wrapper">
      <template v-if="props.type == 'input'">
        <input
          v-if="!isSentForm"
          type="text"
          :placeholder="props.placeholder1"
          v-model="name"
          :class="{ error: nameError }"
        />
        <input
          v-if="!isSentForm"
          v-phone
          type="text"
          :placeholder="props.placeholder2"
          v-model="phone"
          :class="{ error: phoneError }"
        />
        <div class="submit" @click="handleClick" v-if="!isSentForm">
          <div class="submit__text">
            {{ props.buttonText }}
          </div>
          <img src="/src/images/icons/arrow-gold-120.svg" alt="arrow" />
        </div>

        <div class="form-alert" v-if="isSentForm" :class="{ fade: isAnimate }">
          Мы получили Ваш запрос<br />и свяжемся с Вами в ближайшее время
        </div>
      </template>

      <template v-else-if="props.type === 'text'">
        <div :class="props.accentTitle ? 'title-accent' : 'title'">
          {{ props.titleText }}
        </div>
        <div class="description">
          {{ props.descriptionText }}
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.wrapper-with-pag {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 3;
  width: calc(100% - 170px);
  display: flex;
  justify-content: end;
}

#pag-wrapper {
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
}

.form-wrapper {
  max-width: 740px;
  width: 100%;
  max-height: 380px;
  height: 100%;
  aspect-ratio: 740/380;
  background: var(--color-text);
  padding: 80px 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 15px;
  transition: 1s;
}

@media screen and (max-width: 1600px) {
  .form-wrapper {
    padding: 60px 90px;
  }
}

@media screen and (max-width: 1440px) {
  .form-wrapper {
    padding: 40px 80px;
  }
}

input {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  color: #000;
  height: 65px;
  border-bottom: 1px solid var(--color-border);
}

.error {
  border-bottom: 1px solid var(--color-error);
}

.submit {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  height: 60px;
  white-space: nowrap;
}

.submit__text {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  color: var(--color-accent);
  cursor: pointer;
}

.title-accent {
  width: 100%;
  height: 65px;
  border-bottom: 1px solid var(--color-border);
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 24px;
  text-transform: uppercase;
  color: var(--color-accent);
  display: flex;
  justify-content: start;
  align-items: center;
}

.title {
  width: 100%;
  min-height: 65px;
  border-bottom: 1px solid var(--color-border);
  font-family: var(--third-family);
  font-weight: 400;
  font-size: 24px;
  color: #333;
  display: flex;
  justify-content: start;
  align-items: center;
}

.description {
  min-height: 65px;
  max-width: 540px;
  width: 100%;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 187%;
  color: var(--color-dark);
}

.form-alert {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 187%;
  text-transform: uppercase;
  color: var(--color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.fade {
  animation: fade 3s linear forwards;
}

@keyframes fade {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
