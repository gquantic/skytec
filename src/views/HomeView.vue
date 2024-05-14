<template lang="html">
  <div class="home-block home-block-background">
    <div class="container">
      <div class="text">Группа медийных</div>
      <div class="text agency-laptop">агентств SkyAlliance</div>
      <div class="text agency-mobile">агентств.</div>
    </div>
  </div>
  <AsPartOf />
  <Advantages />
  <Team />
  <ShortDesc />
  <Directions />
  <Work />

  <img src="/src/assets/img/map.png" class="map map-laptop" alt="" />
  <img src="/src/assets/img/map-mobile.png" class="map map-mobile" alt="" />
</template>

<script setup lang="ts">
import AsPartOf from '@/components/home/AsPartOf.vue'
import Advantages from '@/components/home/Advantages.vue'
import Team from '@/components/home/Team.vue'
import ShortDesc from '@/components/home/ShortDesc.vue'
import Directions from '@/components/home/Directions.vue'
import Work from '@/components/home/Work.vue'
</script>
<style lang="scss">
.home-block-background {
  background: url(/src/assets/img/bg_home.png) no-repeat;

  .agency-mobile {
    display: none;
  }
  .agency-laptop {
    display: block;
  }
}
.map-mobile {
  display: none;
}
.map-laptop {
  display: block;
}

@media only screen and (max-width: 770px) {
  .home-block-background {
    background: url(/src/assets/img/bg_home-mobile.png) no-repeat;
    background-size: 100%;
    .container {
      .text {
        font-size: 40px;
      }

      .agency-mobile {
        display: block;
      }
      .agency-laptop {
        display: none;
      }
    }
  }
  .map-mobile {
    display: block;
  }
  .map-laptop {
    display: none;
  }
}
</style>
