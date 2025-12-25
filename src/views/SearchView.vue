<script setup>
import { ref, computed } from 'vue'
import { useShopStore } from '@/stores/shop'
import ProductCard from '@/components/ProductCard.vue'
import PopupModal from '@/components/PopupModal.vue'

const shop = useShopStore();
const keyword = ref('');
const selectedItem = ref(null);

const results = computed(() => {
  return shop.products.filter(p => 
    p.name.toLowerCase().includes(keyword.value.toLowerCase()) || 
    p.color.includes(keyword.value.toLowerCase())
  )
})
</script>

<template>
  <div class="search-page">
    <h2>Kho Vòng Của Tiệm</h2>
    
    <input v-model="keyword" placeholder="Tìm tên vòng hoặc màu (hồng, đỏ...)" class="search-input" />

    <div class="product-grid">
      <ProductCard 
        v-for="p in results" 
        :key="p.id" 
        :product="p"
        @open-popup="selectedItem = p" 
      />
    </div>

    <PopupModal 
      v-if="selectedItem" 
      :product="selectedItem"
      @close="selectedItem = null"
      @add-cart="(p) => { shop.addToCart(p); selectedItem = null; }"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.search-page {
  .search-input {
    width: 100%;
    padding: 15px;
    border: 2px solid $primary-pink;
    border-radius: 8px;
    margin-bottom: 20px;
    outline: none;
    
    &:focus {
      box-shadow: 0 0 5px $primary-pink;
    }
  }
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
}
</style>