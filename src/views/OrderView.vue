<script setup>
import { useShopStore } from '@/stores/shop'
import { useRouter } from 'vue-router'

const shop = useShopStore();
const router = useRouter();

function confirmOrder() {
  router.push('/thank-you');
}
</script>

<template>
  <div class="order-page">
    <h2>📝 Thông Tin Nhận Hàng</h2>

    <div class="order-container">
      <div class="form-section">
        <div class="form-group">
          <label>Địa chỉ nhận hàng:</label>
          <textarea placeholder="Số nhà, tên đường, phường/xã..."></textarea>
        </div>
        <div class="form-group">
          <label>Ghi chú cho tiệm:</label>
          <textarea placeholder="Ví dụ: Gói quà giúp mình nhé..."></textarea>
        </div>
      </div>

      <div class="summary-section">
        <h3>Đơn hàng của bạn</h3>
        <ul>
          <template v-for="item in shop.cart" :key="item.product.id">
            <li v-if="item.checked">
              <span>{{ item.product.name }} (x{{ item.quantity }})</span>
              <b>{{ (item.product.price * item.quantity).toLocaleString() }} đ</b>
            </li>
          </template>
        </ul>
        
        <div class="divider"></div>
        
        <div class="total-row">
          <span>Tổng cộng:</span>
          <span class="final-price">{{ shop.totalBill.toLocaleString() }} đ</span>
        </div>
        <p class="shipping-note">(Chưa bao gồm phí ship)</p>

        <button @click="confirmOrder">Xác Nhận Đặt Hàng</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.order-container {
  display: flex;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  .form-section {
    flex: 2;
    .form-group {
      margin-bottom: 20px;
      label { display: block; margin-bottom: 8px; font-weight: bold; }
      textarea {
        width: 100%; height: 100px; padding: 10px;
        border: 1px solid #ddd; border-radius: 8px;
        resize: none;
      }
    }
  }

  .summary-section {
    flex: 1;
    background: white;
    padding: 20px;
    border-radius: 15px;
    height: fit-content;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);

    ul {
      list-style: none; padding: 0;
      li {
        display: flex; justify-content: space-between;
        margin-bottom: 10px; font-size: 14px;
      }
    }

    .divider { border-bottom: 1px dashed #ccc; margin: 15px 0; }

    .total-row {
      display: flex; justify-content: space-between;
      font-size: 18px; font-weight: bold;
      .final-price { color: $primary-pink; }
    }

    .shipping-note { font-size: 12px; color: #888; text-align: right; }

    button {
      @include btn-theme($primary-pink);
      width: 100%; margin-top: 20px;
    }
  }
}
</style>