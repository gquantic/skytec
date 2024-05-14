<template>
  <div class="page-about-us">
    <div class="about-us-block">
      <div class="who-we-are">
        <div class="description">
          <h1>КТО МЫ</h1>
          <p>
            Сегодня SkyTec - это лучшее маркетмаркетинговое агентство, которое растет с каждым днем
            и улучшается это лучшее маркетмаркетинговое агентство, которое растет с каждым днем и
            улучшается это лучшее маркетмаркетинговое агентство, которое растет с каждым днем и
            улучшается
          </p>
          <hr class="hr-none" />
          <p>
            Сегодня SkyTec - это лучшее маркетмаркетинговое агентство, которое растет с каждым днем
            и улучшается это лучшее маркетмаркетинговое агентство.
          </p>
        </div>

        <img src="/src/assets/img/about-us/about-us.png" alt="" class="about-us-img" />
      </div>
      <div class="our-office">
        <img src="/src/assets/img/about-us/office-1.png" alt="" class="first-img" />
        <img src="/src/assets/img/about-us/office-2.png" alt="" class="second-img" />
      </div>
      <div class="our-office-text">
        <h2>НАШ</h2>
        <h2 class="white">ОФИС</h2>
      </div>
    </div>

    <!-- end of 'who we are' block -->

    <div class="middle-block">
      <h3>Медийное агентство полного цикла с объективным взглядом</h3>
    </div>

    <!-- end of middle block -->

    <div class="our-workers">
      <h3>Мы ценим наших сотрудников</h3>
      <div class="advantages-block-workers">
        <div class="advantage">
          <p class="number">01</p>
          <div>
            <p class="advantage-header">корпоративная культура</p>
            <p class="advantage-hover">
              Мы проводим ежегодные корпоративны и еще много разных мероприятий
            </p>
          </div>
        </div>
        <hr class="divider" />
        <div class="advantage">
          <p class="number">02</p>
          <div>
            <p class="advantage-header">Более 100 людей в штате</p>
            <p class="advantage-hover">
              У нас большая команда в которой царит взаимопомощь и поддержка
            </p>
          </div>
        </div>
        <hr class="divider" />
        <div class="advantage">
          <p class="number">03</p>
          <div>
            <p class="advantage-header">Тренинги и обучение</p>
            <p class="advantage-hover">
              Мы проводим множество тренингов и обучаем всех наших сотрудников
            </p>
          </div>
        </div>
        <hr class="divider" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.page-about-us {
  .about-us-block {
    height: 1712px;
    padding: 258px 230px 211px 240px;
    .who-we-are {
      display: flex;
      justify-content: space-between;
      .description {
        width: 634px;
        h1 {
          font-size: 64px;
        }
        p {
          font-size: 20px;
          margin-bottom: 0;
        }
        .hr-none {
          opacity: 0;
          margin: 0;
          height: 64px;
        }
      }
      img {
        margin-right: 10px;
      }
    }
    .about-us-img {
      height: 471px;
      width: 708px;
    }
    .our-office {
      height: 743px;
      display: flex;
      justify-content: space-around;
      .first-img {
        align-self: flex-start;
      }
      .second-img {
        align-self: flex-end;
      }
      .h2 {
        position: absolute;
      }
    }
    .our-office-text {
      position: absolute;
      left: 35.5%;
      display: flex;
      width: 355px;
      justify-content: space-between;
      margin-top: -250px;
      h2 {
        font-size: 64px;
      }
      .white {
        color: #ffffff;
      }
    }
  }

  // middle

  .middle-block {
    background: url('/src/assets/img/about-us/background.png') no-repeat;
    height: 1112px;
    padding: 313px 763px 675px 240px;

    h3 {
      font-size: 48px;
      color: #ffffff;
      text-transform: uppercase;
    }
  }

  .our-workers {
    height: 1182px;
    padding: 208px 240px;
    h3 {
      font-size: 48px;
      width: 480px;
      text-transform: uppercase;
      margin-bottom: 100px;
    }
    .advantages-block-workers {
      .advantage {
        font-size: 48px;
        height: 195px;
        display: flex;
        align-items: center;
        cursor: default;

        .number {
          margin-right: 440px;
        }

        .advantage-header {
          text-transform: uppercase;
        }
        .advantage-hover {
          display: none;
          font-size: 20px;
        }
        &:hover {
          color: #4766af;
          .advantage-hover {
            display: block;
            color: #474747;
          }
        }
      }

      .divider {
        width: 100vw;
        position: absolute;
        left: 0;
        margin: 0;
      }
    }
  }
}
</style>
