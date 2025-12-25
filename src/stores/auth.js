import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    users: JSON.parse(localStorage.getItem('user_db')) || [
      { username: 'admin', password: '123' } 
    ]
  }),
  
  actions: {
    register(username, password) {
      const exist = this.users.find(u => u.username === username);
      if (exist) {
        return false;
      }
      this.users.push({ username, password });
      localStorage.setItem('user_db', JSON.stringify(this.users));
      return true;
    },
    login(username, password) {
      const account = this.users.find(u => u.username === username && u.password === password);
      
      if (account) {
        this.user = { name: account.username };
        return true;
      } else {
        return false;
      }
    },

    logout() {
      this.user = null;
    }
  }
})