<script setup>
import { RouterView } from "vue-router";
import Footer from '../components/Footer.vue';
</script>

<template>
    <div class="main">
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