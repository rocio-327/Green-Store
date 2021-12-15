const app = Vue.createApp({
  data() {
    return {
      products: [],
      categories: [],
      selectedCategory: '',
      selectedProducts: [],
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
    selectCategory(category) {
      console.log(category)
      this.selectedCategory = category
      this.updateSelectedProducts()
    },
    updateSelectedProducts() {
      let result = []
      for (product of this.products) {
        if (product.category === this.selectedCategory) {
          result.push(product)
        }
      }
      this.selectedProducts = result
      console.log(this.selectedProducts)
    },
  },
})
app.mount('#vue-app')
