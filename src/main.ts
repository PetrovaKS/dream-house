import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.directive('phone', {
  mounted(el, binding, vnode) {
    // const componentInstance = vnode.componentInstance // Экземпляр компонента

    function replaceNumberForInput(value: string): string {
      if (!value) return ''

      // Очищаем и преобразуем номер
      const cleaned = value.replace(/\D/g, '').replace(/^8/, '7').replace(/^9/, '79')

      // Разбиваем на группы
      const match = cleaned.match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
      if (!match) return ''

      // Извлекаем группы
      const [_, code, group1, group2, group3, group4] = match

      // Форматируем номер
      if (!group1 && code) {
        return code === '7' ? code : `7 (${code}`
      }

      if (!code) return ''

      if (!group2) {
        return `${code} (${group1}`
      }

      let result = `${code} (${group1}) ${group2}`
      if (group3) result += `-${group3}`
      if (group4) result += `-${group4}`

      return result
    }

    function replaceNumberForPaste(value: string) {
      const r = value.replace(/\D/g, '')
      let val = r
      if (val.charAt(0) === '8') {
        val = '7' + val.slice(1)
      }
      return replaceNumberForInput(val)
    }

    // Обработчик ввода
    el.oninput = function (e: Event) {
      if (!e.isTrusted) {
        return
      }

      this.value = replaceNumberForInput(this.value)
    }

    // Обработчик вставки
    el.onpaste = function () {
      setTimeout(() => {
        const pasteVal = el.value
        this.value = replaceNumberForPaste(pasteVal)
      })
    }
  },
})

app.use(createPinia())
app.use(router)

app.mount('#app')
