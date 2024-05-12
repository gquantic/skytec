<template>
  <div class="short-desc-block block">
    <div class="container d-flex align-items-end">
      <h3>
        Медийное агентство полного цикла с объективным взглядом на медиа и рекламу
        <svg
          width="30"
          height="84"
          viewBox="0 0 30 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.7216 77.3431L14.6722 83.7071C14.3009 84.0976 13.6991 84.0976 13.3278 83.7071L7.27842 77.3431C6.90719 76.9526 6.90719 76.3195 7.27842 75.9289C7.64964 75.5384 8.25151 75.5384 8.62273 75.9289L13.0494 80.5858L13.0494 25L14.9506 25L14.9506 80.5858L19.3773 75.9289C19.7485 75.5384 20.3504 75.5384 20.7216 75.9289C21.0928 76.3195 21.0928 76.9526 20.7216 77.3431Z"
            fill="white"
          />
          <ellipse cx="15" cy="15.3179" rx="15" ry="15.3179" fill="#476EB3" />
        </svg>
      </h3>
    </div>
  </div>
</template>

<style lang="scss">
.short-desc-block {
  height: 1102px;
  width: 100%;
  background: url(/src/assets/img/short-desc/bg.webp);
  display: flex;
  align-items: end;

  h3 {
    color: #ffffff;
    font-size: 48px;
    font-weight: bold;
    width: 872px;
    margin-bottom: 125px;
    text-transform: uppercase;

    svg {
      transform: translateY(35px);
      margin-left: 10px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .short-desc-block {
    background: url(/src/assets/img/short-desc/bg-mobile.png) no-repeat;
    background-size: 100vw;
    height: 100vh;

    h3 {
      // TODO
      font-size: 20px;
      width: 57.5vw;
    }
  }
}
</style>
<script setup lang="ts"></script>
