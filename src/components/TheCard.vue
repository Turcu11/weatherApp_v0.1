<script setup>
import { ref } from 'vue'
import ForecastCard from './ForecastCard.vue';
import { weatherStore } from '../stores/weatherStore.js'
const useWeatherStore = weatherStore()
const showForecast = ref(false)
</script>

<template>
  <div class="position-center">
    <div class="card">
      <div class="card-body">
        <button class="closeButton" @click="useWeatherStore.clearStore()">x</button>
        <h2 class="card-title mt-4">{{ useWeatherStore.instantTemp.name }}</h2>
        <h1 class="card-subtitle mb-2">{{ useWeatherStore.instantTemp.main.temp }}&#8451
          <!-- this is the instant temperature -->
          <img :src="useWeatherStore.iconLink" alt="icon">
          <h5>{{ useWeatherStore.instantTemp.weather[0].description }}</h5>
        </h1>
        <div class="detailsForInstantTemp">
          <h5>Feels like: {{ useWeatherStore.instantTemp.main.feels_like }}&#8451</h5>
          <h5>Humidity: {{ useWeatherStore.instantTemp.main.humidity }}%</h5>
          <h5>Wind speed: {{ useWeatherStore.instantTemp.wind.speed }} km/h</h5>
          <button v-if="!showForecast" class="forecastButton" @click="showForecast = true">See the forecast</button>
          <button v-if="showForecast" class="forecastButton" @click="showForecast = false">Hide the forecast</button>
        </div>
      </div>
    </div>
    <div v-if="showForecast">
      <ForecastCard />
    </div>
  </div>
</template>

<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../style/TheCardStyle.scss'
</style>
