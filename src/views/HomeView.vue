<template lang="html">
  <div class="home-block home-block-background">
    <div class="container">
      <div class="text">Группа медийных</div>
      <div class="text" v-if="width > 600">агентств SkyAlliance</div>
      <div class="text" v-else>агентств.</div>
    </div>
  </div>
  <AsPartOf />
  <Advantages />
  <Team />
  <ShortDesc />
  <Directions />
  <Work />

  <img v-if="width > 600" src="/src/assets/img/map.png" class="map" alt="" />
  <img v-else src="/src/assets/img/map-mobile.png" class="map" alt="" />
</template>

<script setup lang="ts">
import AsPartOf from '@/components/home/AsPartOf.vue'
import Advantages from '@/components/home/Advantages.vue'
import Team from '@/components/home/Team.vue'
import ShortDesc from '@/components/home/ShortDesc.vue'
import Directions from '@/components/home/Directions.vue'
import Work from '@/components/home/Work.vue'

const width = window.innerWidth > 0 ? window.innerWidth : screen.width
</script>
<style lang="scss">
.home-block-background {
  background: url(/src/assets/img/bg_home.png);
}
@media only screen and (max-width: 600px) {
  .home-block-background {
    background: url(/src/assets/img/bg_home-mobile.png) no-repeat;
    background-size: 100%;
  }
}
</style>
