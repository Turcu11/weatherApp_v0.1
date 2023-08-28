<script setup>
import Title from '../components/Title.vue';
import CallApiButton from '../components/CallApiButton.vue';
</script>

<template>
    <div class="main">
        <Title msg="Weather App"/>
        <CallApiButton/>
    </div>
</template>

<style>
.main{
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>