<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="footer-container">
        <div class="footer-links">
            <div class="footer-logo">
                <RouterLink to="/" class="footer-logo-color">
                    <img src="/favicon.png" alt="" srcset="">
                    Weather App 
                </RouterLink>
            </div>
            <div class="footer-author">
                <RouterLink to="/aboutTheAuthor" class="footer-author-style">
                    About the author
                </RouterLink>
            </div>
            <div class="footer-github-link">
                <RouterLink to="/seeGithub" class="footer-github-link-style">
                    See it on GitHub
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@media (max-width: 580px) {
    .footer-container {
        height: 5rem !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
    }

    .footer-links {
        display: flex !important;
        flex-direction: column !important;
        justify-content: center;
        align-items: center;
        gap: 0.5rem !important;
    }

    .footer-logo {
        position: relative !important;
        left: 0px !important;
    }
    .footer-github-link{
        margin-right: 0px !important;
    }
}

.footer-container {
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 10px;
    background-color: rgba(255, 255, 255, 0.95);
    height: 3rem;
    width: 100%;
    bottom: 0px;
}

.footer-logo {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    font-size: large;
    font-weight: 400;
    left: 2rem;

    .footer-logo-color {
        color: rgb(0, 189, 126);
        text-decoration: none;
        width: 100%;
    }
}

.footer-links {
    display: flex;
    font-size: 0.9rem;
    gap: 2rem;
    text-decoration: none;
    text-align: center;

    .footer-github-link {
        margin-right: 2rem;

        .footer-github-link-style {
            text-decoration: none;
            color: rgb(76, 76, 76);
        }
    }

    .footer-author {
        .footer-author-style {
            text-decoration: none;
            color: rgb(76, 76, 76);
        }
    }
}
</style>