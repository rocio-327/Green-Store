const app = Vue.createApp({
	data() {
		return {
			products: [],
			categories: [],
			selectedCategory: "",
		};
	},
	computed: {
		filteredProducts() {
			if (this.selectedCategory === "") {
				return this.products;
			}

			let result = [];
			for (product of this.products) {
				if (this.isProductInView(product)) {
					result.push(product);
				}
			}
			return result;
		},
	},

	mounted() {
		this.loadProducts();
		this.loadCategories();
	},
	methods: {
		async loadProducts() {
			let response = await fetch("https://fakestoreapi.com/products");
			this.products = await response.json();
		},
		async loadCategories() {
			let response = await fetch(
				"https://fakestoreapi.com/products/categories"
			);
			this.categories = await response.json();
		},
		filterButtonClicked(category) {
			this.selectedCategory = category;
		},
		isProductInView(product) {
			if (product.category === this.selectedCategory) {
				return true;
			} else {
				return false;
			}
		},
	},
});
app.mount("#vue-app");
