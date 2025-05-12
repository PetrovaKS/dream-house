import { defineStore } from 'pinia'
import type { Screen3State, ScreenType } from '../types'

export const useScreen3Store = defineStore('screen3', {
  state: (): Screen3State => ({
    activeScreen: 'Main',
  }),

  getters: {},

  actions: {
    setActive(value: ScreenType) {
      this.activeScreen = value
    },
  },
})
