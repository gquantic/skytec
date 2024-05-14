<template lang="html">
  <header class="container d-flex justify-content-between align-items-center">
    <img :src="logo" alt="" />
    <div class="d-flex justify-content-start align-items-center">
      <div class="theme-change">
        <a href="javascript:void(0);" @click="setTheme('light')">
          <img :src="icon_sun" alt="" />
        </a>
        <div class="line"></div>
        <a href="javascript:void(0);" @click="setTheme('dark')">
          <img :src="icon_moon" alt="" />
        </a>
      </div>
      <a href="">
        <img :src="icon_burger_menu" alt="" />
      </a>
    </div>
  </header>
</template>
<script setup lang="ts">
import logo from '@/assets/img/logo.png'
import icon_sun from '@/assets/icons/sun.svg'
import icon_moon from '@/assets/icons/moon.svg'
import icon_burger_menu from '@/assets/icons/burger-menu.svg'

function setTheme(theme: string) {
  if (theme === 'light') {
    // Light
    document!.getElementById('body')!.classList!.remove('dark')
    document!.getElementById('body')!.classList!.add('light')
  } else {
    // Dark
    document!.getElementById('body')!.classList!.remove('light')
    document!.getElementById('body')!.classList!.add('dark')
  }
}
</script>

<style lang=""></style>
