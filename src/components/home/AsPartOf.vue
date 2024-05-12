<template>
  <div class="container block as-part-of">
    <div class="d-flex justify-content-between exists">
      <div>
        <div class="gradient-line"></div>
        <h2>В составе</h2>
        <object class="exists--logo" data="/src/assets/img/logo.svg" type="image/svg+xml"></object>
      </div>
      <div class="d-flex align-items-center">
        <img class="exists--part" src="/src/assets/icons/as-part-of.svg" alt="" />
      </div>
    </div>

    <Rewards />
  </div>
</template>
<script setup lang="ts">
import Rewards from '@/components/home/Rewards.vue'
let showFull = true
function showFullRewards() {
  showFull = false
}
</script>
