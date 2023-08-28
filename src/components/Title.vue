<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <div class="title">
      <h1 class="green">{{ msg }}</h1>
      <h6 >by Turcu</h6>
    </div>
  </div>
</template>

<style lang="scss">
.title{
  display: flex;
  flex-direction: column;
  text-align: right;
}
.green {
  font-size: 5rem;
}
</style>

