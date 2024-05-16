<template>
  <header class="header-container">
    <div class="regular-header" id="burger-header">
      <div class="header-sections">
        <div class="upper-header">
          <img :src="logo" alt="" @click="resetBurger()" />
          <div class="header-other-links">
            <div class="header-theme-change">
              <a href="javascript:void(0);" @click="setTheme('light')">
                <img :src="icon_sun" alt="" />
              </a>
              <div class="line"></div>
              <a href="javascript:void(0);" @click="setTheme('dark')">
                <img :src="icon_moon" alt="" />
              </a>
            </div>
            <div class="contact">
              <p>Связаться</p>
              <div class="arrow"></div>
            </div>
            <a href="javascript:void(0);" @click="burgerHeader()">
              <img :src="icon_burger_menu" alt="" class="burger-sign" />
              <img :src="icon_x" alt="" class="x-sign" />
              <div class="burger-menu burger-menu-hidden"></div>
            </a>
          </div>
        </div>
        <div class="bottom-header">
          <div class="mobile-circles">
            <IconCircle icon="/src/assets/icons/phone.svg" />
            <IconCircle icon="/src/assets/icons/email.svg" classes="fill" />
            <IconCircle icon="/src/assets/icons/marker-02.svg" />
          </div>
          <div class="directions">
            <div class="one-direction first-direction" @click="resetBurger()">
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
            <div class="one-direction">
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
              <IconCircle icon="/src/assets/icons/phone.svg" />
              <IconCircle icon="/src/assets/icons/email.svg" classes="fill" />
              <IconCircle icon="/src/assets/icons/marker-02.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header-container {
  width: 100vw;
  padding: 0 12.5vw;
  .regular-header {
    .header-sections {
      .upper-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
            .line {
              height: 40px;
              width: 2px;
              background-color: black;
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
    height: 970px;
    background-color: #fff;
    position: absolute;
    left: 0;
    width: 100vw;
    padding: 0 12.5vw;
    .header-sections {
      .upper-header {
        .logologologochangelogologolog {
        }

        .header-other-links {
          width: 27vw;
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
@media only screen and (max-width: 500px) {
  .header-container {
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
      padding: 6.25vw;
      height: 100vh;
      .header-sections {
        .upper-header {
          .header-other-links {
            .header-theme-change {
              display: block;
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
</style>

<script setup lang="ts">
import logo from '@/assets/img/logo.png'
import icon_sun from '@/assets/icons/sun.svg'
import icon_moon from '@/assets/icons/moon.svg'
import icon_burger_menu from '@/assets/icons/burger-menu.svg'
import icon_x from '@/assets/icons/burger_x_sign.svg'
import IconCircle from '@/components/icons/IconCircle.vue'

function burgerHeader() {
  if (document.getElementById('burger-header')?.className == 'regular-header') {
    document.getElementById('burger-header').className += ' extended-header'
  } else {
    document.getElementById('burger-header').className = 'regular-header'
  }
}

function resetBurger() {
  document.getElementById('burger-header').className = 'regular-header'
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
