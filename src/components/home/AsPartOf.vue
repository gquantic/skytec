<template>
  <div class="container block as-part-of">
    <div class="d-flex justify-content-between">
      <div>
        <div class="gradient-line"></div>
        <h2>В составе</h2>
        <object data="/src/assets/img/logo.svg" type="image/svg+xml"></object>
      </div>
      <div class="d-flex align-items-center">
        <img src="/src/assets/icons/as-part-of.svg" alt="">
      </div>
    </div>
    <Rewards />
  </div>
</template>
<script setup lang="ts">
import Rewards from '@/components/home/Rewards.vue'
</script>