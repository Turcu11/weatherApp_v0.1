<script setup>
import { RouterLink } from "vue-router";

</script>


<template>
    <div class="footer-container">
        <div class="footer-logo">
            <Router-link to="/" class="footer-logo-color">
                Weather App
            </Router-link>
        </div>
        <div class="footer-links">
            <div class="footer-author">
                <Router-link to="/aboutTheAuthor">
                    About the author
                </Router-link>
            </div>
            <div class="footer-github-link">
                <Router-link to="/seeGithub">
                    See it on GitHub
                </Router-link>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
.footer-container {
    position: fixed;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 10px;
    background-color: rgb(255, 255, 255);
    height: 3rem;
    width: 100%;
    bottom: 0px;
}

.footer-logo {
    position: inherit;
    font-size: large;
    font-weight: 400;
    left: 2rem;
    .footer-logo-color{
        color: rgb(0, 189, 126);
        text-decoration: none;
    }
}

.footer-logo:hover {
    text-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
    border-bottom: 1px solid rgb(0, 189, 126);
}

.footer-links {
    display: flex;
    font-size: 0.9rem;
    gap: 2rem;

    .footer-github-link {
        margin-right: 2rem;
    }
}
</style>