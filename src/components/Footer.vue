<template>
  <footer class="footer">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <img src="/src/assets/img/logo-white.png" alt="" />
        <div class="links d-flex">
          <p v-if="width > 600">Разделы</p>
          <div class="line"></div>
          <div class="common-links">
            <a href="">Главная</a>
            <a href="">Команда</a>
            <a href="">Направления</a>
            <a href="">Кто мы</a>
            <a href="">Контакты</a>
            <a href="">Обсудить проект</a>
          </div>
        </div>
      </div>
      <hr class="divider" />
      <div class="d-flex justify-content-between footer-other-info" style="margin-left: 6px">
        <div class="copyright">© 2018-2023 SkyTeck Media</div>

        <div>
          <div class="d-flex footer-mobile-email">
            <div class="d-flex align-items-center">
              <img src="/src/assets/icons/phone-footer.svg" alt="" />
              <p style="margin-left: 16px">8 495 660-47-47</p>
            </div>
            <div class="d-flex justify-content-around">
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center">
                  <img src="/src/assets/icons/email-footer.svg" alt="" />
                  <p style="margin-left: 16px">alexander.ludanniy@skytecmedia.ru</p>
                </div>
                <div class="d-flex align-items-center">
                  <img src="/src/assets/icons/email-footer.svg" alt="" />
                  <p style="margin-left: 16px">reception@skytecmedia.ru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const width = window.innerWidth > 0 ? window.innerWidth : screen.width
</script>
