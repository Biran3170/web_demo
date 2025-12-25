<script setup>
import { useShopStore } from '@/stores/shop'
import { useRouter } from 'vue-router'
import CartItem from '@/components/CartItem.vue'

const shop = useShopStore();
const router = useRouter();

function goCheckout() {
  router.push('/order');
}
</script>

<template>
  <div class="cart-page">
    <h2>🛒 Giỏ Hàng Của Bạn</h2>

    <div v-if="shop.cart.length === 0" class="empty-cart">
      <p>Chưa có chiếc vòng nào được chọn...</p>
      <router-link to="/search">Đi chọn vòng ngay</router-link>
    </div>

    <div v-else class="cart-list">
      <CartItem 
        v-for="(item, index) in shop.cart" 
        :key="index" 
        :item="item" 
      />
    </div>

    <div class="cart-footer">
      <div class="total-section">
        <span>Tổng thanh toán:</span>
        <span class="price">{{ shop.totalBill.toLocaleString() }} đ</span>
      </div>
      
      <button @click="goCheckout" :disabled="shop.totalBill === 0">
        Đặt Hàng Ngay
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.cart-page {
  padding-bottom: 80px;

  .empty-cart {
    text-align: center;
    margin-top: 50px;
    a { color: $primary-pink; font-weight: bold; }
  }

  .cart-list {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .cart-footer {
    position: fixed;
    bottom: 0; left: 0; right: 0;
    
    background: white;
    padding: 20px 40px;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .total-section {
      font-size: 18px;
      .price { 
        color: $danger; 
        font-size: 24px; 
        font-weight: bold; 
        margin-left: 10px;
      }
    }

    button {
      @include btn-theme($primary-pink);
      padding: 15px 40px;
      font-size: 18px;

      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
        transform: none;
      }
    }
  }
}
</style>