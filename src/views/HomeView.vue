<template lang="html">
  <div class="home-block" style="background: url(/src/assets/img/bg_home.png)">
    <div class="container">
      <div class="text">
        Группа медийных
      </div>
      <div class="text">
        агентств SkyAlliance
      </div>
    </div>
  </div>
  <AsPartOf />
  <Advantages />
  <Team />
  <ShortDesc />
  <Directions />
  <Work />

  <img src="/src/assets/img/map.png" class="map" alt="">
</template>

<script setup lang="ts">
import AsPartOf from '@/components/home/AsPartOf.vue'
import Advantages from '@/components/home/Advantages.vue'
import Team from '@/components/home/Team.vue'
import ShortDesc from '@/components/home/ShortDesc.vue'
import Directions from '@/components/home/Directions.vue'
import Work from '@/components/home/Work.vue'
</script>
<style lang="scss"></style>
