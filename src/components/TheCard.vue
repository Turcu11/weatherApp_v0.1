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
          <!-- this is tha instant temperature -->
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

@media (max-width: 712px) {
  .position-center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

@media (max-width: 534px) {
  h1 {
    font-size: 1.6rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  .forecastButton {
    font-size: 1rem !important;
    margin-top: 1.6rem !important;
  }

  .card {
    width: 22rem !important;
    height: 22rem !important;
  }
}

@media (max-width: 422px) {
  h1 {
    font-size: 1.4rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  h5 {
    font-size: 1rem;
  }

  .forecastButton {
    font-size: 0.8rem !important;
    margin-top: 1.4em !important;
  }

  .card {
    width: 20rem !important;
    height: 20rem !important;
  }
}

@media (max-width: 372px) {
  h1 {
    font-size: 1.2rem;
  }

  h2 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.8rem;
  }

  .forecastButton {
    font-size: 0.8rem !important;
    margin-top: 1.2em !important;
    width: 10rem !important;
    height: 1.8rem !important;
  }

  .card {
    width: 17rem !important;
    height: 17rem !important;
  }
}

@media (max-width: 285px) {
  h1 {
    font-size: 1.2rem;
  }

  h2 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.8rem;
  }

  .forecastButton {
    font-size: 0.7rem !important;
    margin-top: 0.8em !important;
    width: 10rem !important;
    height: 1.5rem !important;
  }

  .card {
    width: 15rem !important;
    height: 15rem !important;
  }
}



.forecastButton {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  width: 14rem;
  height: 2.5rem;
  margin-top: 2.5rem;
  background-color: transparent;
  color: white;
  border-radius: 30px;
  border: 2px solid white;
}

.forecastButton:hover {
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

.detailsForInstantTemp {
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
