const app = Vue.createApp({
  data() {
    return {
      products: [],
      categories: [],
    }
  },
  mounted() {
    this.loadProducts()
    this.loadCategories()
  },
  methods: {
    async loadProducts() {
      let response = await fetch('https://fakestoreapi.com/products')
      this.products = await response.json()
    },
    async loadCategories() {
      let response = await fetch('https://fakestoreapi.com/products/categories')
      this.categories = await response.json()
    },
  },
})
app.mount('#vue-app')
