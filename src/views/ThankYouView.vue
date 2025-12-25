<template>
  <div class="thank-you">
    <h1>🎉 Đặt Hàng Thành Công!</h1>
    <p>Cảm ơn bạn đã ủng hộ Tiệm Vòng Xinh.</p>
    <p>Tiệm sẽ sớm liên hệ để chốt đơn và giao hàng cho bạn nhé.</p>
    
    <router-link to="/" class="btn-home">Quay về Trang Chủ</router-link>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.thank-you {
  text-align: center; padding-top: 100px;
  h1 { color: $success; font-size: 3rem; margin-bottom: 10px; }
  p { font-size: 1.2rem; }
  
  .btn-home {
    display: inline-block;
    margin-top: 30px;
    @include btn-theme($primary-pink);
    text-decoration: none;
  }
}
</style>