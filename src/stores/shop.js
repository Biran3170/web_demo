import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', {
  state: () => ({
    products: [
      { id: 1, name: 'Vòng cá đại dương', color: 'xanh nuoc bien, xanh, lam', price: 150000, stock: 5, img: '/img/cadaiduong.jpg' },
      { id: 2, name: 'Vòng đỏ dâu tây', color: 'do', price: 50000, stock: 0, img: '/img/dodautay.jpg' },
      { id: 3, name: 'Vòng bé mèo kẹo mút', color: 'trang', price: 300000, stock: 3, img: '/img/meokemut.jpg' }
    ],
    cart: []
  }),
  getters: {
    totalBill: (state) => {
      return state.cart
        .filter(item => item.checked)
        .reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
    }
  },
  actions: {
    addToCart(item) {
      const exist = this.cart.find(c => c.product.id === item.id);
      if (exist) {
        exist.quantity++;
      } else {
        this.cart.push({ product: item, quantity: 1, checked: false }); 
      }
    }
  }
})