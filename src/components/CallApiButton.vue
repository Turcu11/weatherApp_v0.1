<script setup>
import axios from 'axios';
import TheCard from './TheCard.vue';
import { ref } from 'vue'
import { weatherStore } from '../stores/weatherStore.js'
const useWeatherStore = weatherStore()

function modifyDateInStore(){
    useWeatherStore.list.list.forEach(element => {
        let workingString = String(element.dt_txt)
        element.dt_txt = workingString.substr(5)
        element.dt_txt = element.dt_txt.slice(0, -3)
    });
}

async function callAPI() {
    // const querry = "https://api.openweathermap.org/data/2.5/weather?q=Chişineu-Criş&appid=81b34960086bafba355dd2fcf0a023dc&units=metric&rain"
    const instantTempQuerry1 = "https://api.openweathermap.org/data/2.5/weather?q="
    const instantTempQuerry2 = "&appid=81b34960086bafba355dd2fcf0a023dc&units=metric&rain"
    const finalInstantQuerry = instantTempQuerry1 +  String(useWeatherStore.cityName) + instantTempQuerry2    

    const forecastQuerry1 = "https://api.openweathermap.org/data/2.5/forecast?q="
    const forecastqQuerry2 = "&appid=81b34960086bafba355dd2fcf0a023dc&units=metric&rain"
    const finalForecastQuerry = forecastQuerry1 + String(useWeatherStore.cityName) + forecastqQuerry2

    const instantResponse = await axios.get(finalInstantQuerry)
    const forecastResponse = await axios.get(finalForecastQuerry);

    useWeatherStore.list = forecastResponse.data
    useWeatherStore.instantTemp = instantResponse.data

    console.log(forecastResponse.data)
    console.log(instantResponse.data)

    modifyDateInStore() //is here wher I call for the modify function, so I get the new data as soon as posible in the store

    return instantResponse
}
</script>

<template>
    <div class="inputAndButtons">
        <input v-model="useWeatherStore.cityName" class="cityInput" type="search" name="city"
            placeholder="City goes here">
        <button class="buttonStyle" @click="callAPI">Show the weather</button>
    </div>
    <div v-if="useWeatherStore.list.length != 0">
        <TheCard />
    </div>
</template>

<style lang="scss">
.inputAndButtons {
    display: flex;
}

.cityInput {
    text-align: center;
    margin-right: 1.2rem;
}

::placeholder {
    text-align: center;
    color: black
}

.buttonStyle,
.cityInput {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    color: black;
    border-radius: 30px;
    border: 2px solid rgb(0, 189, 126);
    border-color: rgb(0, 189, 126);
    margin-top: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
}
</style>