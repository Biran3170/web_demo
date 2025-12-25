<script setup>
defineProps({
  product: Object
})
defineEmits(['close', 'add-cart'])
</script>

<template>
  <div class="popup-overlay" @click.self="$emit('close')">
    <div class="popup-box">
      <h3>{{ product.name }}</h3>
      <img :src="product.img" alt="Chi tiết" class="popup-img" />
      <p class="price">Giá: {{ product.price.toLocaleString() }} đ</p>
      
      <div class="actions">
        <button class="btn-add" @click="$emit('add-cart', product)">
          Thêm vào giỏ
        </button>
        <button class="btn-close" @click="$emit('close')">Đóng</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/main.scss' as *;

.popup-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex; justify-content: center; align-items: center;
  z-index: 1000;

  .popup-box {
    background: white; padding: 30px; border-radius: 15px;
    width: 400px; text-align: center;
    animation: fadeIn 0.3s ease;

    .img-placeholder { 
      height: 150px; background: #eee; margin: 15px 0; 
      display: flex; align-items: center; justify-content: center;
    }

    .price { font-size: 1.2rem; font-weight: bold; color: $primary-pink; }

    .actions {
      margin-top: 20px; display: flex; gap: 10px; justify-content: center;
      .btn-add { @include btn-theme($success); }
      .btn-close { @include btn-theme($text-dark); }
    }
  }
}
.popup-img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin: 15px 0;
  border-radius: 10px;
  background-color: #f9f9f9;
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
</style>