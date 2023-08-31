<script setup>
import { RouterView } from "vue-router";
import Title from '../components/Title.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
    <div class="main">
        <Title msg="Weather App" />
        <RouterView />
        <Footer />
    </div>
</template>

<style>
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

.main {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>