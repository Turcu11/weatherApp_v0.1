<script setup>
import axios from 'axios';
import TheCard from './TheCard.vue';
import { ref } from 'vue'
import { weatherStore } from '../stores/weatherStore.js'
const useWeatherStore = weatherStore()

async function callAPI() {
    // const querry = "https://api.openweathermap.org/data/2.5/weather?q=Chişineu-Criş&appid=81b34960086bafba355dd2fcf0a023dc&units=metric&rain"
    const querry = "https://api.openweathermap.org/data/2.5/weather?q="
    const querry2 = "&appid=81b34960086bafba355dd2fcf0a023dc&units=metric&rain"
    const finalQuerry = querry + String(useWeatherStore.cityName) + querry2
    const response = await axios.get(finalQuerry);
    useWeatherStore.list = response.data
    return response
    //salutare
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