<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="help-container">
        <div class="help-body">
            <div class="help-close-button">
                <RouterLink to="/">
                    <button class="help-close-button-style"> X </button>
                </RouterLink>
            </div>
            <div class="help-title">
                <h3>Help</h3>
            </div>
            <div class="help-main-content">
                <p>This app is still in <span style="font-weight: bolder;">BETA</span></p>
                <p>Some cityes will not appear, for example "București" does <span style="font-weight: bolder;">not</span> work, you have to type "Bucharest"</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

@media (max-width: 1024px) {
    .help-container{
        width: 45rem !important;
    }
}

@media (max-width: 816px) {
    .help-container{
        width: 36rem !important;
    }
}

@media (max-width: 712px) {
    .help-container{
        width: 32rem !important;
    }
}

@media (max-width: 612px) {
    .help-container{
        width: 26rem !important;
    }
}

@media (max-width: 512px) {
    .help-container{
        width: 22rem !important;
    }
}

@media (max-width: 432px) {
    .help-container{
        width: 18rem !important;
    }
}

.help-container {
    height: 25rem;
    width: 50rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    background: rgb(17, 150, 161);
    background: linear-gradient(135deg, rgba(17, 150, 161, 1) 0%, rgba(0, 189, 126, 1) 100%);
    border-radius: 2rem;
    color: white;
    overflow: auto;
}

.help-close-button{
    display: flex;
    justify-content: end;
    margin-top: 1rem;
    margin-right: 1.5rem;
    .help-close-button-style{
        color: white;
        font-weight: 500;
        font-size: large;
        border: none;
        background-color: transparent;
    }
}
.help-title{
    display: flex;
    justify-content: center;
}
.help-main-content{
    margin-top: 1rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
}

</style>