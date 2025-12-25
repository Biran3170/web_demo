<script setup>
import { useRouter } from 'vue-router'
import FeedbackItem from '@/components/FeedbackItem.vue'

const router = useRouter()
function goShop() {
  router.push('/search');
}
</script>

<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1>Tiệm Vòng Xinh ✨</h1>
        <p class="slogan">Những món quà độc đáo không đắt tiền</p>
        <p class="desc">
          Chuyên các loại vòng tay charm cute thiết kế riêng, các loại dây móc điện thoại, chìa khóa dành cho bạn.
          Mỗi chiếc vòng là một câu chuyện nhỏ.
        </p>
        <button @click="goShop">Khám Phá Ngay</button>
      </div>
      
      <div class="hero-image">
        <div class="circle-bg">💎</div>
      </div>
    </section>

    <section class="feedback-section">
      <h2>📸 Khách Yêu Feedback</h2>
      <div class="grid-feedback">
        <FeedbackItem v-for="i in 3" :key="i" :index="i" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.home-page {
  .hero-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    margin-bottom: 40px;

    .hero-content {
      flex: 1;
      padding-right: 20px;

      h1 {
        font-size: 3rem;
        color: $primary-pink;
        margin-bottom: 10px;
      }

      .slogan {
        font-size: 1.5rem;
        font-weight: bold;
        color: $text-dark;
      }

      .desc {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #666;
        margin-bottom: 30px;
      }

      button {
        @include btn-theme($primary-pink);
        padding: 15px 40px;
        font-size: 1.2rem;
        box-shadow: 0 4px 10px rgba(255, 183, 178, 0.5);
      }
    }

    .hero-image {
      flex: 1;
      display: flex;
      justify-content: center;

      .circle-bg {
        width: 300px; height: 300px;
        background-color: $bg-cream;
        border-radius: 50%;
        display: flex;
        align-items: center; justify-content: center;
        font-size: 5rem;
      }
    }
  }

  .feedback-section {
    h2 {
      text-align: center;
      color: $text-dark;
      margin-bottom: 30px;
      font-size: 2rem;
    }

    .grid-feedback {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
  }
}

@media (max-width: 768px) {
  .hero-section {
    flex-direction: column-reverse;
    text-align: center;
    
    .hero-content { padding-right: 0; margin-top: 20px; }
    .hero-image .circle-bg { width: 200px; height: 200px; font-size: 3rem; }
  }
}
</style>