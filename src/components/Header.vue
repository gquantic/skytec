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
              <div class="line"></div>
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

<style lang="scss">
.header-container {
  z-index: 5;
  width: 100vw;
  padding: 0 12.5vw;
  .regular-header {
    .header-sections {
      .upper-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .white-logo {
          display: block;
          cursor: pointer;
        }
        .black-logo {
          display: block;
        }
        .header-other-links {
          height: 100px;
          width: 300px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .header-theme-change {
            display: flex;
            width: 100px;
            justify-content: space-between;
            .black-moon {
              display: block;
            }
            .black-sun {
              display: block;
            }
            .line {
              height: 26px;
              width: 2px;
              background-color: white;
            }
          }
          .contact {
            display: none;
          }
          .x-sign {
            display: none;
          }
        }
      }
      .bottom-header {
        display: none;
      }
    }
  }
  .extended-header {
    height: 100vh;
    background: #fff;
    position: fixed;
    left: 0;
    width: 100vw;
    padding: 0 12.5vw;
    .header-sections {
      .upper-header {
        .white-logo {
          display: block;
        }
        .black-logo {
          display: block;
          cursor: pointer;
        }

        .header-other-links {
          width: 27vw;
          .header-theme-change {
            display: flex !important;
            .black-moon {
              display: block;
            }
            .white-moon {
              display: block;
            }
            .black-sun {
              display: block;
            }
            .white-sun {
              display: block;
            }
            .line {
              height: 26px;
              width: 2px;
              background-color: black;
            }
          }
          .link-open {
            color: #000;
            &::after {
              background: #000;
              width: 20px;
              height: 12px;
            }
          }
          .contact {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 9.95vw;
            height: 51px;
            border: 1px solid #000;

            p {
              text-align: center;
              margin: 0;
              font-size: 18px;
              margin-right: 4px;
            }
          }
          .burger-sign {
            display: none;
          }
          .x-sign {
            display: block;
          }
        }
      }
      .bottom-header {
        display: flex;
        margin-top: 189px;
        .mobile-circles {
          display: none;
        }
        .directions {
          width: 29.1vw;
          display: flex;
          flex-direction: column;
          .first-direction {
            margin-top: 0 !important;
          }
          .one-direction {
            margin-top: 40px;
            cursor: pointer;
            display: flex;
            align-items: center;
            .theme {
              font-size: 48px;
              text-transform: uppercase;
              margin-left: 3.3vw;
            }
            .number {
              h2 {
                font-weight: 600;
                font-size: 48px;
                transition: 0.2s;
              }
            }
          }
          :hover {
            .number {
              h2 {
                color: #4768b0;
              }
            }
          }
          .gradient-line {
            align-self: flex-end;
          }
        }
        .photos {
          display: flex;
          .common-photos {
            display: flex;
            justify-content: space-between;
            width: 43.23vw;
            .first-img {
              width: 24vw;
              position: absolute;
            }
            .second-img {
              width: 24vw;
              position: absolute;
              margin-left: 19.11vw;
              margin-top: 151px;
            }
          }
          .circle-buttons {
            display: flex;
            position: absolute;
            margin-left: 25.5vw;
            margin-top: 40px;
            .icon-circle-block {
              width: 68px;
              height: 68px;
              .icon-circle {
                width: 68px;
                height: 68px;
              }
              .bottom-circle {
                width: 68px;
                height: 68px;
                margin-left: 4px;
                margin-top: 2px;
                z-index: 0;
              }
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .header-container {
    padding: 0 6.25vw;
    .regular-header {
      .header-sections {
        .upper-header {
          .header-other-links {
            justify-content: flex-end;
            .header-theme-change {
              display: none;
            }
          }
        }
      }
    }
    .extended-header {
      padding: 0 6.25vw;
      height: 100vh;
      .header-sections {
        .upper-header {
          .header-other-links {
            justify-content: space-between;
            .header-theme-change {
              display: flex;
              width: 80px;
            }
            .contact {
              display: none !important;
            }
          }
        }
        .bottom-header {
          margin-top: 24px;
          flex-direction: column;
          .mobile-circles {
            display: flex;
            .icon-circle-block {
              width: 40px;
              height: 40px;
              .icon-circle {
                width: 40px;
                height: 40px;
                svg {
                  width: 14px;
                  height: 14px;
                }
              }
              .bottom-circle {
                z-index: 0;
                width: 40px;
                height: 40px;
                margin-left: 2px;
              }
            }
          }
          .directions {
            width: 74.6vw;
            margin-top: 48px;
            .one-direction {
              .number {
                h2 {
                  font-size: 20px;
                }
              }
              .theme {
                margin-left: 10vw;
                h1 {
                  font-size: 20px;
                }
              }
            }
          }
          .photos {
            display: none;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1200px) {
  .header-container {
    .extended-header {
      .header-sections {
        .bottom-header {
          .directions {
            .one-direction {
              .number {
                h2 {
                  font-size: 36px;
                }
              }
              .theme {
                h1 {
                  font-size: 36px;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 1000px) {
  .header-container {
    .extended-header {
      .header-sections {
        .upper-header {
          .header-other-links {
            width: 40vw;
          }
        }
        .bottom-header {
          .directions {
            .one-direction {
              .number {
                h2 {
                  font-size: 24px;
                }
              }
              .theme {
                h1 {
                  font-size: 24px;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 850px) {
  .header-container {
    .extended-header {
      .header-sections {
        .upper-header {
          .header-other-links {
            .contact {
              p {
                font-size: 12px;
              }
            }
          }
        }
        .bottom-header {
          .directions {
            .one-direction {
              .number {
                h2 {
                  font-size: 24px;
                }
              }
              .theme {
                h1 {
                  font-size: 24px;
                }
              }
            }
          }
          .photos {
            .circle-buttons {
              display: flex;
              position: absolute;
              margin-left: 25.5vw;
              margin-top: 40px;
              .icon-circle-block {
                width: 34px;
                height: 34px;
                .icon-circle {
                  width: 34px;
                  height: 34px;
                  svg {
                    width: 16px;
                    height: 16px;
                  }
                }
                .bottom-circle {
                  width: 34px;
                  height: 34px;
                  margin-left: 4px;
                  margin-top: 2px;
                  z-index: 0;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

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

let headerIconTheme = ref('black')

function burgerHeader() {
  const headerElement = document.getElementById('burger-header')
  if (headerElement) {
    if (headerElement.className === 'regular-header') {
      headerElement.className += ' extended-header'
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
const route = useRoute()
const currentPath = ref(route.path)

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
  currentPath.value = 'white'
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
