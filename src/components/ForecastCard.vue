<script setup>
import { weatherStore } from '../stores/weatherStore';
const useWeatherStore = weatherStore()

</script>

<template>
    <div class="position-center dimension">
        <div class="mx-3 card ">
            <div class="mx-2 mt-3 card-body box">
                <div v-for="(list, index) in useWeatherStore.list.list" :key="index">
                    <div v-if="index < 8">
                        <hr class="mt-1 whiteHR">
                        <h6 class="white-text date-text">{{ useWeatherStore.list.list[index].dt_txt }}</h6>
                        <h5 class="white-text"> {{ useWeatherStore.list.list[index].main.temp
                        }}&#8451
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

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

.whiteHR {
    color: white;
}

.box {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 22rem;
    overflow: auto;
}

.white-text {
    margin: 0.1rem;
    color: white;
}

.date-text {
    margin-top: 0.5rem;
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
}</style>