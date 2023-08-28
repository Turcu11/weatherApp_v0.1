<script setup>
import {ref} from 'vue'
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
          <!-- this is tha instant temperature -->
          <h5>{{ useWeatherStore.instantTemp.weather[0].description }}</h5>
        </h1>
        <div class="details">
          <h5>Feels like: {{ useWeatherStore.instantTemp.main.feels_like }}&#8451</h5>
          <h5>Humidity: {{ useWeatherStore.instantTemp.main.humidity }}%</h5>
          <h5>Wind speed: {{ useWeatherStore.instantTemp.wind.speed }} km/h</h5>
          <button v-if="!showForecast" class="mt-5 forecastButton" @click="showForecast = true">See the forecast</button>
          <button v-if="showForecast" class="mt-5 forecastButton" @click="showForecast = false">Hide the forecast</button>
        </div>
      </div>
    </div>
    <div v-if="showForecast">
      <ForecastCard/>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

.forecastButton {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  width: 14rem;
  height: 2.5rem;
  background-color: transparent;
  color: white;
  border-radius: 30px;
  border: 2px solid white;
}
.forecastButton:hover{
  background-color: white;
  color: rgb(0, 189, 126);
}

.card-title,
.card-subtitle {
  margin-top: 1rem;
  text-align: center;
  color: white;
}

.closeButton {
  position: absolute;
  right: 1rem;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  text-align: left;
  font-weight: 500;
}

.details {
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  align-items: center;
  color: white;
}

.position-center {
  display: flex;
  justify-content: center;
}

.card {
  display: flex;
  justify-content: center;
  width: 25rem;
  height: 25rem;
  background-color: rgb(0, 189, 126);
  border-radius: 2rem;
  margin-top: 2rem;
}</style>
