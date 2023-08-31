<script  setup>
import MainView from './views/MainView.vue';
</script>

<template>
    <div class="main">
      <MainView />
    </div>
</template>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: larger;
}
</style>