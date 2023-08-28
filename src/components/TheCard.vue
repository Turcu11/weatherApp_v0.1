<script setup>
import { weatherStore } from '../stores/weatherStore.js'
const useWeatherStore = weatherStore()
</script>

<template>
  <div class="pos">
    <div class="card">
      <div class="card-body">
        <button class="closeButton" @click="useWeatherStore.clearStore()">x</button>
        <h2 class="card-title mt-4">{{ useWeatherStore.list.name }}</h2>
        <h1 class="card-subtitle mb-2">{{ useWeatherStore.list.main.temp }}&#8451
          <h5>{{ useWeatherStore.list.weather[0].description }}</h5>
        </h1>
        <div class="details">
          <h5>Feels like: {{ useWeatherStore.list.main.feels_like }}&#8451</h5>
          <h5>Humidity: {{ useWeatherStore.list.main.humidity }}%</h5>
          <h5>Wind speed: {{ useWeatherStore.list.wind.speed }} km/h</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
.card-title,
.card-subtitle {
  margin-top: 1rem;
  text-align: center;
  color: white;
}
.closeButton{
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

.pos {
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
}
</style>
