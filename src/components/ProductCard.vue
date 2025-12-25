<script setup>
defineProps({
  product: Object
})
defineEmits(['open-popup'])
</script>

<template>
  <div class="card">
    <img :src="product.img" alt="sp" class="card-img" />
    <h3>{{ product.name }}</h3>
    
    <p v-if="product.stock > 0" class="stock">Còn: {{ product.stock }} chiếc</p>
    <p v-else class="out-stock">Hết hàng</p>
    
    <p class="price">{{ product.price.toLocaleString() }} đ</p>
    
    <button @click="$emit('open-popup', product)">Xem & Mua</button>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/main.scss' as *;

.card {
  background: white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover { transform: translateY(-5px); }

  h3 { margin: 10px 0; font-size: 16px; }
  .out-stock { color: $danger; font-style: italic; }
  .stock { color: $success; }
  
  button {
    @include btn-theme($primary-pink);
    width: 100%; 
    margin-top: 10px;
  }
}
.card-img {
  width: 100%;  
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}
</style>