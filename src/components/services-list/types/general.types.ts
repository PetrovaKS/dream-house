export interface ServicesListState {
  list: {
    Elite?: string[]
    Vip?: string[]
    Extra?: string[]
  }
  activeList: 'Elite' | 'Vip' | 'Extra'
  isOpen: boolean
}
