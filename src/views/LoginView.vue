<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore();
const router = useRouter();
const route = useRoute();
const isRegisterMode = ref(false);
const errorMessage = ref('');

const formData = ref({
  username: '',
  password: '',
  confirmPassword: ''
});
function handleLogin() {
  errorMessage.value = '';
  const success = auth.login(formData.value.username, formData.value.password);
  
  if (success) {
    alert(`Chào mừng ${formData.value.username} quay lại!`);
    const redirectPath = route.query.redirect || '/'; 
    router.replace(redirectPath);
  } else {
    errorMessage.value = "Sai tên đăng nhập hoặc mật khẩu rồi nè!";
  }
}

function handleRegister() {
  errorMessage.value = '';
  if (!formData.value.username || !formData.value.password) {
    errorMessage.value = "Vui lòng nhập đủ thông tin!";
    return;
  }
  if (formData.value.password !== formData.value.confirmPassword) {
    errorMessage.value = "Mật khẩu xác nhận không khớp!";
    return;
  }
  const success = auth.register(formData.value.username, formData.value.password);

  if (success) {
    alert("Đăng ký thành công! Hãy đăng nhập ngay nhé.");
    isRegisterMode.value = false;
    formData.value = { username: '', password: '', confirmPassword: '' };
  } else {
    errorMessage.value = "Tên tài khoản này đã có người dùng rồi :(";
  }
}
function switchMode() {
  isRegisterMode.value = !isRegisterMode.value;
  errorMessage.value = '';
  formData.value = { username: '', password: '', confirmPassword: '' };
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-card">
      <h2>{{ isRegisterMode ? '📝 Đăng Ký Thành Viên' : '🔐 Đăng Nhập' }}</h2>
      
      <div class="form-group">
        <label>Tài khoản:</label>
        <input v-model="formData.username" placeholder="Nhập tên đăng nhập..." />
      </div>

      <div class="form-group">
        <label>Mật khẩu:</label>
        <input type="password" v-model="formData.password" placeholder="Nhập mật khẩu..." />
      </div>

      <div class="form-group" v-if="isRegisterMode">
        <label>Nhập lại mật khẩu:</label>
        <input type="password" v-model="formData.confirmPassword" placeholder="Xác nhận mật khẩu..." />
      </div>

      <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>
      
      <button v-if="!isRegisterMode" @click="handleLogin">Đăng Nhập Ngay</button>
      <button v-else @click="handleRegister">Tạo Tài Khoản</button>

      <div class="switch-mode">
        <p v-if="!isRegisterMode">
          Chưa có tài khoản? 
          <span @click="switchMode">Đăng ký tại đây</span>
        </p>
        <p v-else>
          Đã có tài khoản? 
          <span @click="switchMode">Quay lại đăng nhập</span>
        </p>
      </div>

      <router-link to="/" class="back-home">Về trang chủ</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.auth-page {
  display: flex; justify-content: center; align-items: center;
  min-height: 100vh;
  background-color: $bg-cream;

  .auth-card {
    background: white; padding: 40px; border-radius: 20px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    width: 380px; text-align: center;

    h2 { color: $primary-pink; margin-bottom: 20px; }

    .form-group {
      text-align: left; margin-bottom: 15px;
      label { font-weight: bold; font-size: 0.9rem; display: block; margin-bottom: 5px; }
      input {
        width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 8px;
        box-sizing: border-box; // Quan trọng để không vỡ khung
        &:focus { outline: 2px solid $primary-pink; border-color: transparent; }
      }
    }

    .error-text { color: $danger; font-size: 0.9rem; margin-bottom: 10px; }

    button {
      @include btn-theme($primary-pink);
      width: 100%; font-size: 1rem; margin-bottom: 15px;
    }

    .switch-mode {
      font-size: 0.9rem; margin-bottom: 15px;
      span {
        color: $primary-pink; font-weight: bold; cursor: pointer;
        &:hover { text-decoration: underline; }
      }
    }

    .back-home { color: #888; text-decoration: none; font-size: 0.8rem; }
  }
}
</style>