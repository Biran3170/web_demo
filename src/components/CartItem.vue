<script setup>
defineProps({
  item: Object 
})
</script>

<template>
  <div class="cart-item">
    <input type="checkbox" v-model="item.checked" class="checkbox" />
    
    <div class="info">
      <h3>{{ item.product.name }}</h3>
      <p class="price">{{ item.product.price.toLocaleString() }} đ</p>
    </div>

    <div class="quantity">
      <span>Số lượng: {{ item.quantity }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/main.scss' as *;

.cart-item {
  display: flex; align-items: center;
  background: white; padding: 15px; margin-bottom: 15px;
  border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);

  .checkbox { width: 20px; height: 20px; margin-right: 15px; accent-color: $primary-pink; }
  .info { flex: 1; h3 { margin: 0; font-size: 16px; } .price { color: $primary-pink; font-weight: bold; } }
  .quantity { font-weight: bold; color: $text-dark; }
}
</style>