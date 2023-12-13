<template>
  <div class="about">
    <button v-debounce="handleSubmit">Submit</button>
  </div>
</template>

<script setup lang="ts">
function handleSubmit() {
  console.log('Hey')
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
