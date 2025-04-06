<template>
  <div class="products">
    <div class="page-header" :style="headerStyle">
      <div class="container">
        <h1 class="page-title">Products</h1>
      </div>
    </div>

    <div class="container">
      <div class="products-container">
        <div class="filters">
          <div class="filter-group">
            <h3 class="filter-title">Categories</h3>
            <div class="filter-options">
              <div class="filter-option">
                <input type="checkbox" id="all" v-model="filters.categories" value="all" @change="updateFilters">
                <label for="all">All</label>
              </div>
              <div class="filter-option">
                <input type="checkbox" id="men" v-model="filters.categories" value="Men" @change="updateFilters">
                <label for="men">Men</label>
              </div>
              <div class="filter-option">
                <input type="checkbox" id="women" v-model="filters.categories" value="Women" @change="updateFilters">
                <label for="women">Women</label>
              </div>
              <div class="filter-option">
                <input type="checkbox" id="unisex" v-model="filters.categories" value="Unisex" @change="updateFilters">
                <label for="unisex">Unisex</label>
              </div>
            </div>
          </div>

          <div class="filter-group">
            <h3 class="filter-title">Price Range</h3>
            <div class="price-range">
              <div class="price-inputs">
                <input
                  type="number"
                  placeholder="Min"
                  v-model.number="filters.priceRange.min"
                  @change="updateFilters"
                >
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  v-model.number="filters.priceRange.max"
                  @change="updateFilters"
                >
              </div>
            </div>
          </div>

          <div class="filter-group mobile-hide">
            <h3 class="filter-title">Sort By</h3>
            <select v-model="sortOption" @change="updateFilters" class="sort-select">
              <option value="default">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="name-a-z">Name: A to Z</option>
              <option value="name-z-a">Name: Z to A</option>
            </select>
          </div>
        </div>

        <div class="products-content">
          <div class="products-header">
            <h2 class="products-count">{{ filteredProducts.length }} Products</h2>
            <div class="sort-dropdown mobile-only">
              <select v-model="sortOption" @change="updateFilters" class="sort-select">
                <option value="default">Default</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="name-a-z">Name: A to Z</option>
                <option value="name-z-a">Name: Z to A</option>
              </select>
            </div>
          </div>

          <div v-if="filteredProducts.length > 0" class="products-grid">
            <product-card
              v-for="product in filteredProducts"
              :key="product.id"
              :product="product"
            ></product-card>
          </div>

          <div v-else class="empty-state">
            <p>No products match your filters.</p>
            <button @click="resetFilters" class="btn">Reset Filters</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductCard from '@/components/product/ProductCard.vue';

export default {
  name: 'ProductsView',
  components: {
    ProductCard
  },
  data() {
    return {
      headerStyle: {
        backgroundColor: '#000',
        color: '#fff',
        padding: '50px 0',
        marginBottom: '40px'
      },
      filters: {
        categories: ['all'],
        priceRange: {
          min: null,
          max: null
        }
      },
      sortOption: 'default',
      searchQuery: ''
    }
  },
  computed: {
    ...mapGetters(['getProducts']),
    filteredProducts() {
      let filtered = [...this.getProducts];

      // Apply category filter
      if (!this.filters.categories.includes('all')) {
        filtered = filtered.filter(product =>
          this.filters.categories.includes(product.category)
        );
      }

      // Apply price range filter
      if (this.filters.priceRange.min !== null) {
        filtered = filtered.filter(product =>
          product.price >= this.filters.priceRange.min
        );
      }

      if (this.filters.priceRange.max !== null && this.filters.priceRange.max > 0) {
        filtered = filtered.filter(product =>
          product.price <= this.filters.priceRange.max
        );
      }

      // Apply search query if present
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
        );
      }

      // Apply sorting
      switch (this.sortOption) {
        case 'price-low-high':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high-low':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'name-a-z':
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name-z-a':
          filtered.sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          // Default sorting (by id or any other default)
          filtered.sort((a, b) => a.id - b.id);
      }

      return filtered;
    }
  },
  created() {
    // Check for search query in URL
    if (this.$route.query.search) {
      this.searchQuery = this.$route.query.search;
    }
  },
  methods: {
    updateFilters() {
      // Handle the case where "all" is selected along with other categories
      if (this.filters.categories.includes('all') && this.filters.categories.length > 1) {
        if (this.filters.categories[0] === 'all') {
          this.filters.categories = this.filters.categories.slice(1);
        } else {
          this.filters.categories = ['all'];
        }
      }
    },
    resetFilters() {
      this.filters = {
        categories: ['all'],
        priceRange: {
          min: null,
          max: null
        }
      };
      this.sortOption = 'default';
      this.searchQuery = '';

      // Remove search param from URL if present
      if (this.$route.query.search) {
        this.$router.replace({ query: {} });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.products {
  margin-bottom: 60px;

  .page-header {
    .page-title {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
    }
  }

  .products-container {
    display: flex;
    gap: 30px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .filters {
    width: 250px;
    flex-shrink: 0;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 20px;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      .filter-group {
        flex: 1 0 45%;
        min-width: 200px;
      }
    }
  }

  .filter-group {
    margin-bottom: 25px;
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;

    &:last-child {
      border-bottom: none;
    }
  }

  .filter-title {
    font-size: 1.1rem;
    margin-bottom: 15px;
    font-weight: 600;
  }

  .filter-option {
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    label {
      margin-left: 10px;
      cursor: pointer;
    }

    input[type="checkbox"] {
      cursor: pointer;
    }
  }

  .price-inputs {
    display: flex;
    align-items: center;
    gap: 10px;

    input {
      width: 80px;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }

  .sort-select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
  }

  .products-content {
    flex: 1;
  }

  .products-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .products-count {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 25px;

    @media (max-width: 576px) {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 15px;
    }
  }

  .empty-state {
    text-align: center;
    padding: 40px 0;

    p {
      margin-bottom: 20px;
      font-size: 1.1rem;
      color: #666;
    }
  }

  .mobile-only {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .mobile-hide {
    @media (max-width: 768px) {
      display: none;
    }
  }
}
</style>
