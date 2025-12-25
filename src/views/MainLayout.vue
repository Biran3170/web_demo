<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useShopStore } from '@/stores/shop'
const shop = useShopStore();
</script>

<template>
  <div class="layout-wrapper">
    <aside class="sidebar">
      <div class="brand">Vòng Xinh ✨</div>
      <nav>
        <RouterLink to="/">Trang Chủ</RouterLink>
        <RouterLink to="/search">Tìm Kiếm</RouterLink>
        <RouterLink to="/cart">Giỏ Hàng ({{ shop.cart.length }})</RouterLink>
      </nav>
    </aside>

    <main class="content">
      <RouterView /> 
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.layout-wrapper {
  display: flex;
  min-height: 100vh;
  .sidebar {
    width: 250px;
    background-color: $bg-cream;
    padding: 20px;
    border-right: 2px solid white;

    .brand {
      font-size: 24px;
      color: $primary-pink;
      margin-bottom: 30px;
      font-weight: bold;
    }

    nav {
      a {
        display: block;
        padding: 15px;
        text-decoration: none;
        color: $text-dark;
        border-radius: 10px;
        margin-bottom: 5px;
        &:hover {
          background-color: white;
          color: $primary-pink;
        }
        &.router-link-active {
          background-color: $primary-pink;
          color: white;
        }
      }
    }
  }

  .content {
    flex: 1;
    padding: 40px;
  }
}
</style>