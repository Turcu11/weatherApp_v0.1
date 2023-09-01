<script setup>

</script>

<template>
    <div class="the-author-container">
        <img class="the-author-picture" src="/mire.jpg" alt="picture">
        <div class="the-author-description">
            <h1 class="the-author-title">About me</h1>
            <p class="the-author-bio">My name is Iosif, I'm 22 years old, and I'm a student in Oradea. This is my last year
                at the university. <br> I'm currently studying informatics and economics. When I have some free time, I like
                to spend it with my wife, going out on bikes, or just staying home with her and listening to some good music.<br> I'm
                very passionate about coding. I really like to develop all kinds of projects and learn new things. I like
                the challenges and the troubleshooting that's involved in the development of a project.</p>
        </div>
    </div>
</template>

<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

@media (max-width: 880px) {
    .the-author-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 4rem;
        width: 40rem !important;
        height: 25rem !important;
    }

    .the-author-picture {
        border-radius: 30px;
        height: 16rem !important;
    }

    .the-author-description {
        width: 40rem !important;
        height: 25rem !important;
        margin-left: 1rem;
    }
}

@media (max-width: 712px) {
    .the-author-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 4rem;
        padding: 1.8rem;
        width: 30rem !important;
        height: 32rem !important;
    }

    .the-author-picture {
        height: 16rem !important;
    }

    .the-author-description {
        width: 28rem !important;
        height: 32rem !important;
        padding: 0.8rem;
        margin-left: 0px !important;
        margin-top: 1rem;

        .the-author-title {
            margin-top: 1.2rem;
            margin-bottom: 1rem;
            font-size: 2rem;
        }

        .the-author-bio {
            font-size: 0.95rem;
        }
    }
}

@media (max-width: 534px) {
    .the-author-container {
        padding: 1.8rem;
        width: 25rem !important;
        height: 32rem !important;
    }

    .the-author-description {
        width: 23rem !important;
        height: 32rem !important;
    }
}

@media (max-width: 434px) {
    .the-author-container {
        padding: 1.8rem;
        width: 22rem !important;
        height: 32rem !important;
    }

    .the-author-description {
        width: 20rem !important;
        height: 32rem !important;
    }

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

.the-author-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    padding: 1.8rem;
    width: 50rem;
    height: 25rem;
    border-radius: 30px;
    background: rgb(17, 150, 161);
    background: linear-gradient(135deg, rgba(17, 150, 161, 1) 0%, rgba(0, 189, 126, 1) 100%);

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

        .the-author-bio {
            margin-top: 1rem;
            margin-left: 1rem;
            font-weight: 450;
            color: white;
        }
    }
}
</style>