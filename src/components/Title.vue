<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="title">
    <h1 class="green">{{ msg }}</h1>
    <h6 class="author">by Turcu</h6>
  </div>
</template>

<style lang="scss">
@media (max-width: 712px) {
  .green {
    font-size: 4rem !important;
  }
}

@media (max-width: 534px) {
  .green {
    font-size: 3rem !important;
  }
}

@media (max-width: 422px) {
  .green {
    font-size: 2.3rem !important;
  }
  .author{
    font-size: 0.85rem;
  }
}

@media (max-width: 261px) {
  .green {
    font-size: 1.6em !important;
  }
  .author{
    font-size: 0.7rem;
  }
  
}

.title {
  display: flex;
  flex-direction: column;
  text-align: right;
}

.author {
  display: flex;
  flex-direction: column;
  text-align: right;
}

.green {
  font-size: 5rem;
}
</style>

