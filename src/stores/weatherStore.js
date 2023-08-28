import { defineStore } from 'pinia'

export const weatherStore = defineStore('weatherList', {
  state: () => {
    return {
      list: [],
      cityName: ""
    }
  },
  actions:{
    clearStore(){
      this.list = []
      this.cityName = ""
    }
  }
})