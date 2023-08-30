<script setup>
import axios from 'axios';
import TheCard from './TheCard.vue';
import { weatherStore } from '../stores/weatherStore.js'
const useWeatherStore = weatherStore()

function modifyDateInStore() {
    useWeatherStore.list.list.forEach(element => {
        let workingString = String(element.dt_txt)
        element.dt_txt = workingString.substr(5)
        element.dt_txt = element.dt_txt.slice(0, -3)
    });
    useWeatherStore.list.list = useWeatherStore.list.list.slice(1)
}

async function callAPI() {
    if (useWeatherStore.cityName.length == 0) {
        alert("Fill in the city !!!")
        return
    }
    // const querry = "https://api.openweathermap.org/data/2.5/weather?q=Chişineu-Criş&appid=81b34960086bafba355dd2fcf0a023dc&units=metric&rain"
    const instantTempQuerry1 = "https://api.openweathermap.org/data/2.5/weather?q="
    const instantTempQuerry2 = "&appid=81b34960086bafba355dd2fcf0a023dc&units=metric&rain"
    const finalInstantQuerry = instantTempQuerry1 + String(useWeatherStore.cityName) + instantTempQuerry2

    const forecastQuerry1 = "https://api.openweathermap.org/data/2.5/forecast?q="
    const forecastqQuerry2 = "&appid=81b34960086bafba355dd2fcf0a023dc&units=metric&rain"
    const finalForecastQuerry = forecastQuerry1 + String(useWeatherStore.cityName) + forecastqQuerry2

    const instantResponse = await axios.get(finalInstantQuerry)
    const forecastResponse = await axios.get(finalForecastQuerry);

    useWeatherStore.list = forecastResponse.data
    useWeatherStore.instantTemp = instantResponse.data

    modifyDateInStore() //is here where I call for the modify function, so I get the new data as soon as posible in the store

    return instantResponse
}
</script>

<template>
    <div class="inputAndButtons">
        <input v-model="useWeatherStore.cityName" class="cityInput" type="search" name="city" placeholder="City goes here">
        <button class="buttonStyle" @click="callAPI">Show the weather</button>
    </div>
    <div v-if="useWeatherStore.list.length != 0">
        <TheCard />
    </div>
</template>

<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
@media (max-width: 712px) {

    .buttonStyle,
    .cityInput {
        font-size: small !important;
    }
}

@media (max-width: 534px) {
    .cityInput {
        margin-right: 0.4rem !important;
    }
}

@media (max-width: 422px) {

    .buttonStyle,
    .inputAndButtons,
    .cityInput {
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
        font-size: smaller !important;
        margin-right: 0px !important;
        margin-top: 1rem !important;
        font-size: 0.7rem !important;
    }
}

@media (max-width: 261px) {

    .buttonStyle,
    .inputAndButtons,
    .cityInput {
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
        font-size: smaller !important;
        margin-right: 0px !important;
        margin-top: 1rem !important;
        font-size: 0.55rem !important;
    }

}

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