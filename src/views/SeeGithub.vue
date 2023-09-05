<script setup>

</script>

<template>
    <div class="see-github-container">
        <h1 class="see-github-title">Want to see the updates in real time ?</h1>
        <div class="see-github-description">
            <h3 class="see-github-header">
                This project is also avalabile on <span style="font-weight: bolder;">GitHub</span>
            </h3>
            <p class="see-github-copy-text">There you can see all the code behind, and the file structure if you're
                intrestead</p>
            <p class="see-github-copy-text">Also I'm opened for suggestions for improving the app, comments or ideas</p>
        </div>
        <a class="see-github-button-text" href="https://github.com/Turcu11/weatherApp_v0.1/tree/master">Go to repo</a>
    </div>
</template>

<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

.see-github-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    padding: 1.8rem;
    width: 50rem;
    height: 25rem;
    border-radius: 30px;
    background: rgb(17, 150, 161);
    background: linear-gradient(135deg, rgba(17, 150, 161, 1) 0%, rgba(0, 189, 126, 1) 100%);
}

.see-github-description {
    overflow: auto;
}

.see-github-title {
    color: white;
    margin-bottom: 2rem;
}

.see-github-header {
    color: white;
    text-align: center;
    margin-bottom: 2rem;
}

.see-github-copy-text {
    color: white;
    text-align: center;
    font-size: 1.2rem;
}

.see-github-button-text {
    margin-top: 2rem;
    padding-top: 0.35rem;
    padding-bottom: 0.35rem;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    border-radius: 30px;
    color: white;
    text-decoration: none;
    border: 2px solid white;
    font-weight: 600;
}

.see-github-button-text:hover {
    background-color: white;
    color: rgba(0, 189, 126, 1);
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
</style>