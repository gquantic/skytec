<template>
  <header class="header-container">
    <div class="regular-header" id="burger-header">
      <div class="header-sections">
        <div class="upper-header">
          <img
            v-if="headerIconTheme == 'black'"
            :src="logo"
            alt=""
            @click="toMainPage()"
            class="white-logo"
          />
          <img v-else :src="blackLogo" alt="" @click="toMainPage()" class="black-logo" />

          <div class="header-other-links">
            <div class="header-theme-change">
              <a href="javascript:void(0);" @click="setTheme('light')">
                <img v-if="headerIconTheme == 'black'" :src="icon_sun" alt="" class="white-sun" />
                <img v-else :src="icon_sun_black" alt="" class="black-sun" />
              </a>
              <div v-if="headerIconTheme == 'black'" class="line-white"></div>
              <div v-else class="line-black"></div>
              <a href="javascript:void(0);" @click="setTheme('dark')">
                <img v-if="headerIconTheme == 'black'" :src="icon_moon" alt="" class="white-moon" />
                <img v-else :src="icon_moon_black" alt="" class="black-moon" />
              </a>
            </div>
            <div class="link-open contact">
              <p>Связаться</p>
            </div>
            <a href="javascript:void(0);" @click="burgerHeader()">
              <img
                v-if="headerIconTheme == 'black'"
                :src="icon_burger_menu"
                alt=""
                class="burger-sign"
              />
              <img v-else :src="icon_burger_menu_black" alt="" class="burger-sign" />
              <img :src="icon_x" alt="" class="x-sign" />
              <div class="burger-menu burger-menu-hidden"></div>
            </a>
          </div>
        </div>
        <div class="bottom-header">
          <div class="mobile-circles">
            <IconCircle icon="/icons/phone.svg" />
            <IconCircle icon="/icons/email.svg" classes="fill" />
            <IconCircle icon="/icons/marker-02.svg" />
          </div>
          <div class="directions">
            <div class="one-direction first-direction" @click="toAboutUsPage">
              <div class="number">
                <h2>01</h2>
              </div>
              <div class="theme">
                <h1>Кто мы</h1>
              </div>
            </div>
            <div class="one-direction">
              <div class="number">
                <h2>02</h2>
              </div>
              <div class="theme">
                <h1>Команда</h1>
              </div>
            </div>
            <div class="one-direction" @click="toContactsPage()">
              <div class="number">
                <h2>03</h2>
              </div>
              <div class="theme">
                <h1>контакты</h1>
              </div>
            </div>
            <div class="one-direction">
              <div class="number">
                <h2>04</h2>
              </div>
              <div class="theme">
                <h1>Направления</h1>
              </div>
            </div>
            <div class="one-direction">
              <div class="number">
                <h2>05</h2>
              </div>
              <div class="theme">
                <h1>Обсудить проект</h1>
              </div>
            </div>
            <div class="gradient-line"></div>
          </div>
          <div class="photos">
            <div class="common-photos">
              <img src="/src/assets/img/about-us/office-2.png" alt="" class="first-img" />
              <img src="/src/assets/img/about-us/about-us.png" alt="" class="second-img" />
            </div>

            <div class="circle-buttons">
              <IconCircle icon="/icons/phone.svg" />
              <IconCircle icon="/icons/email.svg" classes="fill" />
              <IconCircle icon="/icons/marker-02.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import logo from '@/assets/img/logo.png'
import blackLogo from '@/assets/img/logo-black.png'
import icon_sun from '@/assets/icons/sun.svg'
import icon_sun_black from '@/assets/icons/sun-black.svg'
import icon_moon from '@/assets/icons/moon.svg'
import icon_moon_black from '@/assets/icons/moon-black.svg'
import icon_burger_menu from '@/assets/icons/burger-menu.svg'
import icon_burger_menu_black from '@/assets/icons/burger-menu-black.svg'
import icon_x from '@/assets/icons/burger_x_sign.svg'
import IconCircle from '@/components/icons/IconCircle.vue'
import router from '@/router'

const headerIconTheme = ref('black')
const route = useRoute()
const currentPath = ref(route.path)

function burgerHeader() {
  const headerElement = document.getElementById('burger-header')
  if (headerElement) {
    if (!headerElement.classList.contains('extended-header')) {
      headerElement.classList!.add('extended-header')
      headerIconTheme.value = 'white'
    } else {
      resetBurger()
    }
  } else {
    console.error('Element with ID "burger-header" not found.')
  }
}

function resetBurger() {
  if (currentPath.value != '/about') {
    headerIconTheme.value = 'black'
  }

  const headerElement = document.getElementById('burger-header')
  if (headerElement) {
    headerElement.className = 'regular-header'
  }
}

watch(
  () => route.path,
  (newPath) => {
    currentPath.value = newPath
    if (currentPath.value == '/about') {
      headerIconTheme.value = 'white'
    } else {
      headerIconTheme.value = 'black'
    }
  }
)

function toAboutUsPage() {
  router.push('/about')
  resetBurger()
}

function toContactsPage() {
  router.push('/contacts')
  resetBurger()
}

function toMainPage() {
  router.push('/')
  resetBurger()
}

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
