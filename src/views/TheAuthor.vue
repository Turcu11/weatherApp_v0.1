<script setup>

</script>

<template>
    <div class="the-author-container">
        <img class="the-author-picture" src="/mire.jpg" alt="picture">
        <div class="the-author-description">
            <h1 class="the-author-title">About me</h1>
            <p class="the-author-bio">My name is Iosif, I'm 22 years old, and I'm a student in Oradea. This is my last year at the university. <br> I'm currently studying informatics and economics. When I have some free time, I like to spend it with my wife, going out on bikes, or just staying home and listening to some good music.<br> I'm very passionate about coding. I really like to develop all kinds of projects and learn new things. I like the challenges and the troubleshooting that's involved in the development of a project.</p>
        </div>
    </div>
</template>

<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

.the-author-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    padding: 1.8rem;
    width: 50;
    height: 25rem;
    border-radius: 30px;
    background-color: rgb(0, 189, 126);

    .the-author-picture {
        border-radius: 30px;
        height: 22rem;
        width: auto;
    }

    .the-author-description {
        width: 25rem;
        height: 25rem;
        margin-left: 1rem;
        overflow: auto;

        .the-author-title {
            margin-top: 1.2rem;
            margin-bottom: 1rem;
            text-align: center;
            color: white;
        }
        .the-author-bio{
            margin-top: 1rem;
            margin-left: 1rem;
            font-weight: 450;
            color: white;
        }
    }
}
</style>