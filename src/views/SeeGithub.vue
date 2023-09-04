<script setup>

</script>

<template>
    <div class="see-github-container">
        <h1 class="see-github-title">Want to see the updates in real time ?</h1>
        <div class="see-github-description">
            <h3 class="see-github-header">
                This project is also avalabile on <span style="font-weight: bolder;">GitHub</span> 
            </h3>
            <p class="see-github-copy-text">There you can see all the code behind, and the file structure if you're intrestead</p>
        </div>
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
}
.see-github-header{
    color: white;
    text-align: center;
}

.see-github-copy-text {
    color: white;
    text-align: center;
    font-size: 1.2rem;
}
</style>