<template>
  <div class="advantages-block d-flex align-items-center justify-content-center">
    <div class="d-flex justify-content-between align-items-center container">
      <div class="item">
        <div class="gradient-line"></div>
        <p>Сильнейшая команда профессионалов.</p>
      </div>
      <div class="line"></div>
      <div class="item width-item">
        <div v-if="width < 600" class="gradient-line gradient-line-mobile"></div>
        <p>Многолетний опыт работы с крупнейшими российскими и международными клиентами.</p>
        <div v-if="width > 600" class="gradient-line"></div>
      </div>
      <div class="line"></div>
      <div class="item">
        <div class="gradient-line"></div>
        <p>У нас лучшие баинговые условия на рынке.</p>
      </div>
    </div>
  </div>
  <div class="top-bar-block">
    <div class="container d-flex justify-content-between align-items-center">
      <object data="/src/assets/img/advantages/on_top.svg" class="on-top"></object>
      <object data="/src/assets/img/advantages/media_bying.png" class="media-buying"></object>
      <div class="a-refs">
        <a href="">adindex.ru</a>
        <a href="">sostav.ru</a>
        <a href="" v-if="width > 600">adindex.ru/ratings/</a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const width = window.innerWidth > 0 ? window.innerWidth : screen.width
</script>
