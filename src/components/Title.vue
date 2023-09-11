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
    <h6 class="version">beta v0.1</h6>
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

  .version {
    font-size: 0.85rem;
  }
}

@media (max-width: 261px) {
  .green {
    font-size: 1.6em !important;
  }

  .version {
    font-size: 0.7rem;
  }

}

.title {
  display: flex;
  flex-direction: column;
  text-align: right;

}

.version {
  display: flex;
  flex-direction: column;
  text-align: right;
}

.green {
  font-size: 5rem;
  background: rgb(17, 150, 161);
  background: linear-gradient(135deg, rgba(17, 150, 161, 1) 0%, rgba(0, 189, 126, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

