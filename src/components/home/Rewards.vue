<template>
  <div class="rewards-block">
    <div class="rewards-title">Награды</div>
    <div class="rewards" id="rewards-block">
      <div class="d-flex justify-content-between">
        <div class="rewards__item">
          <img src="/src/assets/img/rewards/2021.png" alt="">
          <p>EFFIE 2021</p>
        </div>
        <div class="rewards__item">
          <img src="/src/assets/img/rewards/2022.png" alt="">
          <p>EFFIE 2022</p>
        </div>
        <div class="rewards__item">
          <img src="/src/assets/img/rewards/2023.png" alt="">
          <p>E+ 2023</p>
        </div>
      </div>
      <!-- SHOW FULL BTN -->
      <div class="rewards__open-full">
        <img src="/src/assets/img/rewards/show-full.png" alt="" @click="showFullRewards">
      </div>
      <div class="content" id="rewards-content">
        <div class="d-flex justify-content-between">
          <div class="column">
            <p>2021 - Золото «Бизнес- вызовы/Устойчивый успех»</p>
          </div>
          <div class="column">
            <p>2022 - Серебро «Банки. Финансы. Страхование» - Защитник Олег</p>
            <p>2022 - Серебро «Сезонный маркетинг»</p>
            <p>2022 - Серебро «Запуск нового продукта или услуги» - Защитник Олег</p>
            <p>2022 - Серебро «Продукты питания</p>
            <p>2022 - Серебро «Продукты питания</p>
            <p>2022 - Серебро «Кампании с краткосрочным эффектом»</p>
          </div>
          <div class="column">
            <p>2023 - Бронза «Продукты питания»</p>
            <p>2023 - Бронза «Устойчивый успех»</p>
            <p>2023 - Бронза «Компании
              с мгновенным эффектом»</p>
            <p>2023 - Бронза «Сезонный маркетинг»</p>
          </div>
        </div>
        <hr>
        <div class="d-flex justify-content-between mt-4">
          <div class="rewards__item">
            <img src="/src/assets/img/rewards/npbk.png" alt="">
            <p>НПБК</p>
          </div>
          <div class="rewards__item">
            <img src="/src/assets/img/rewards/silver_mercury.png" alt="">
            <p>Silver Mercury</p>
          </div>
          <div class="rewards__item">
            <img src="/src/assets/img/rewards/media_manager.png" alt="">
            <p class="text-center">Медиа менеджер России 2022</p>
          </div>
        </div>
        <div class="d-flex justify-content-between mt-5">
          <div class="column">
            <p>2022 - Серебро "Best content platform" - Спасибо мама за заботу, Амелотекс гель</p>
            <p>2021 Победитель «ТОП менеджеры НПБК» - Василий Туровец (Управляющий Партнер SkyTecKnowlogy)</p>
          </div>
          <div class="column">
            <p>2022 – Победитель - Мария Ельчинова (Генеральный директор SkyTecKnowlogy)</p>
            <p>2022 - Золото "Best event solution" - Пионеры рекламного космоса</p>
            <p>2023 - Золото “Тинькофф Мобайл
              – мобильный оператор, который смог”</p>
            <p>2023 - Бронза “Как Тинькофф Джуниор побеждает всех конкурентов и остается лидером рынка в детском сегменте»</p>
            <p>2023 - Бронза “Как Ozon и Фрайди привлекали аудиторию в период распродаж”</p>
          </div>
          <div class="column">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
function showFullRewards() {
  document.getElementById('rewards-content').classList.toggle('show');
  document.getElementById('rewards-block').classList.toggle('show');
}
</script>