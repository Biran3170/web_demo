<template>
  <div class="error-page">
    <h1>404</h1>
    <h2>Úi chà! Bạn đi lạc rồi 😿</h2>
    <p>Đường dẫn này không tồn tại hoặc đã bị xóa.</p>
    <router-link to="/">Quay lại trang củ</router-link>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.error-page {
  text-align: center; padding-top: 100px;
  h1 { font-size: 6rem; color: $danger; margin: 0; }
  h2 { color: $text-dark; }
  a { 
    color: $primary-pink; 
    font-weight: bold; 
    font-size: 1.2rem;
  }
}
</style>