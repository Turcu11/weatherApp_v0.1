<script setup>
import {ref} from 'vue'
import { weatherStore } from '../stores/weatherStore';
const useWeatherStore = weatherStore()

</script>

<template>
    <div class="position-center dimension">
        <div class="mx-3 card">
            <div class="mx-2 mt-3 card-body box">
                <div class="detailsForeForcast" v-for="(list, index) in useWeatherStore.list.list" :key="index">
                    <div class="list">
                        <h6 class="white-text date-text">{{ useWeatherStore.list.list[index].dt_txt }}
                        </h6>
                        <h5 class="white-text"> {{ useWeatherStore.list.list[index].main.temp }}&#8451
                            <img :src="useWeatherStore.list.list[index].weather[0].icon" alt="icon">
                        </h5>
                        <hr class="whiteHR">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

@media (max-width: 534px) {
    .whiteHR {
        margin-top: 0.2rem;
    }

    h5 {
        font-size: 1rem !important;
    }

    h6 {
        font-size: small !important;
    }
}

@media (max-width: 422px) {
    .date-text {
        margin-top: 0.2rem !important;
    }

    .box {
        height: 24rem !important;
    }
}

.detailsForeForcast {
    position: relative;
    display: flex;
    flex-direction: column;
}

::-webkit-scrollbar {
    width: 0.8rem;
}

::-webkit-scrollbar-track {
    background: rgb(38, 217, 157);
    border-radius: 100vw;
    margin-block: 0.5rem;
    margin-bottom: 1rem;
}

::-webkit-scrollbar-thumb {
    background: rgb(255, 255, 255);
    border-radius: 100vw;
}

::-webkit-scrollbar-thumb:hover {
    background: rgb(32, 134, 100);
}

.list {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.whiteHR {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    width: 8rem;
    color: white;
}

.box {
    text-align: center;
    display: block;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 25rem;
    overflow: auto;
}

.white-text {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0.1rem;
    color: white;
}

.date-text {
    // margin-top: 0.5rem;
    font-weight: 400;
    opacity: 85%;
}

.dimension {
    width: 18rem;
    height: auto;
}

.position-center {
    display: flex;
    justify-content: center;
}
</style>