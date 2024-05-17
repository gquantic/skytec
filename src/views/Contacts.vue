<template>
  <div class="contacts-page">
    <div class="upper-block">
      <div class="little-note">
        <h1>контакты</h1>
        <p>
          Свяжитесь любым удобным для вас способом или оставьте заявку, перезвоним в рабочее время с
          10:00 до 18:00
        </p>
      </div>
      <div class="circles">
        <div class="circle-item">
          <span class="front">Оставить заявку</span>
          <span class="back"></span>
        </div>
        <div class="circle-item second-circle">
          <span class="front">Связаться</span>
          <span class="back"></span>
        </div>
      </div>
    </div>
    <div class="bottom-block">
      <h2>Контакты</h2>
      <div class="other-contacts">
        <div class="one-contact">
          <h3>Почта</h3>
          <div>
            <p>alexander.ludanniy@skytecmedia.ru</p>
            <p>reception@skytecmedia.ru</p>
          </div>
        </div>
        <div class="one-contact">
          <h3>Телефон</h3>
          <p>8 495 660-47-47</p>
        </div>
        <div class="one-contact">
          <h3>Время работы</h3>
          <p>Пн-Пт 10:00-18:00</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.contacts-page {
  background: url('/src/assets/img/contacts/bg.png') no-repeat;
  height: max-content;

  .upper-block {
    padding: 459px 19.32vw 462px 14.22vw;
    display: flex;
    .little-note {
      color: #fff;
      h1 {
        font-size: 64px;
        text-transform: uppercase;
      }
      p {
        font-size: 20px;
        max-width: 33vw;
      }
    }
    .circles {
      display: flex;
      margin-left: 11.3vw;
      .second-circle {
        margin-left: 4.32vw;
      }
      .circle-item {
        width: 190px;
        height: 190px;
        .front {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: white;
          width: 190px;
          height: 190px;
          background-color: #4766af;
          border-radius: 50%;
          position: absolute;
          z-index: 1;
        }
        .back {
          display: block;
          position: absolute;
          width: 190px;
          height: 190px;
          margin-left: 10px;
          border: 1px solid white;
          border-radius: 50%;
          z-index: 0;
        }
      }
    }
  }
  .bottom-block {
    padding: 208px 16.56vw 208px 12.5vw;
    display: flex;
    h2 {
      font-size: 64px;
      text-transform: uppercase;
    }
    .other-contacts {
      margin-left: 20.9vw;
      display: flex;
      flex-direction: column;
      .one-contact {
        width: 32.81vw;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        margin-bottom: 42px;
        p {
          margin: 0;
          min-width: 17.03vw;
        }
        h3 {
          font-size: 20px;
        }
      }
    }
  }
}

@media only screen and (max-width: 1350px) {
  .contacts-page {
    .bottom-block {
      h2 {
        font-size: 56px;
      }
      .other-contacts {
        margin-left: 10vw;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .contacts-page {
    .upper-block {
      .circles {
        margin-left: 9vw;
        .circle-item {
          width: 140px;
          height: 140px;
          .front {
            width: 140px;
            height: 140px;
            font-size: 16px;
          }
          .back {
            width: 140px;
            height: 140px;
          }
        }
      }
    }
    .bottom-block {
      padding: 208px 12.56vw 208px 12.5vw;
      h2 {
        font-size: 42px;
      }
      .other-contacts {
        .one-contact {
          width: 45vw;
          p {
            min-width: 27vw;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 950px) {
  .contacts-page {
    .upper-block {
      .little-note {
        h1 {
          font-size: 42px;
        }
      }
    }
    .bottom-block {
      padding: 104px 12.56vw 104px 12.5vw;
      display: flex;
      flex-direction: column;
      .other-contacts {
        margin-left: 0;
        margin-top: 60px;
        .one-contact {
          width: 69vw;
          p {
            min-width: 37vw;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  .contacts-page {
    background: url('/src/assets/img/contacts/bg-mobile.png') no-repeat;
    background-size: 100%;
    .upper-block {
      flex-direction: column;
      .little-note {
        color: #fff;
        h1 {
          font-size: 48px;
          text-transform: uppercase;
        }
        p {
          margin-top: 16px;
          font-size: 20px;
          max-width: 77.5vw;
        }
      }
      .circles {
        margin-left: 0;
        .second-circle {
          margin-left: 17.5vw;
        }
      }
    }
  }
}
@media only screen and (max-width: 650px) {
  .contacts-page {
    .upper-block {
      padding: 279px 19.32vw 462px 14.22vw;
    }
  }
}

@media only screen and (max-width: 550px) {
  .contacts-page {
    .upper-block {
      padding: 232px 6.25vw 105px 6.25vw;
      height: 872px;
    }
  }
}

@media only screen and (max-width: 500px) {
  .contacts-page {
    background-size: 100vw 667px;
    .upper-block {
      height: 667px;
      .little-note {
        h1 {
          font-size: 20px;
        }
        p {
          font-size: 12px;
        }
      }
      .circles {
        .circle-item {
          width: 90px;
          height: 90px;
          margin-left: 6.25vw;
          .front {
            width: 90px;
            height: 90px;
            font-size: 10px;
          }
          .back {
            width: 90px;
            height: 90px;
            margin-left: 5px;
          }
        }
        .second-circle {
          margin-left: 17.5vw;
        }
      }
    }
    .bottom-block {
      padding: 48px 32vw 58px 6.25vw;
      h2 {
        font-size: 24px;
      }
      .other-contacts {
        margin-top: 0;
        .one-contact {
          margin-top: 24px;
          margin-bottom: 0;
          flex-direction: column;
          align-items: flex-start;
          height: auto;
          h3 {
            font-size: 16px;
          }
          p {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
