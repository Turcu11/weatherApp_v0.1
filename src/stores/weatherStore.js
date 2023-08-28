import { defineStore } from 'pinia'

export const weatherStore = defineStore('weatherList', {
  state: () => {
    return {
      list: [],
      instantTemp: [],
      cityName: ""
    }
  },
  actions:{
    clearStore(){
      this.list = []
      this.instantTemp = []
      this.cityName = ""
    }
  }
})