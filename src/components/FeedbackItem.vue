<script setup>
defineProps({
  index: Number
})
</script>

<template>
  <div class="fb-item">
    <div class="photo">Ảnh Khách {{ index }}</div>
    <p>"Vòng xinh quá, rất cute, hợp với phong cách của tui"</p>
    <div class="stars">⭐⭐⭐⭐⭐</div>
  </div>
</template>

<style lang="scss" scoped>
.fb-item {
  background: white; padding: 20px; border-radius: 15px;
  text-align: center; transition: transform 0.3s ease;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);

  &:hover { transform: translateY(-5px); }

  .photo {
    height: 150px; background-color: #eee; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 15px; color: #888;
  }
  p { font-style: italic; color: #555; }
  .stars { color: gold; margin-top: 10px; }
}
</style>