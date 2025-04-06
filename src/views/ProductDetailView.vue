<template>
  <div class="product-detail">
    <div class="page-header" :style="headerStyle">
      <div class="container">
        <h1 class="page-title">{{ product.name }}</h1>
      </div>
    </div>

    <div class="container" v-if="product">
      <div class="product-container">
        <div class="product-image">
          <img :src="product.image" :alt="product.name" />
        </div>

        <div class="product-info">
          <h1 class="product-name">{{ product.name }}</h1>
          <div class="product-price">Rs.{{ formatPrice(product.price) }}</div>

          <div class="product-description">
            <p>{{ product.description }}</p>
          </div>

          <div class="product-actions">
            <div class="quantity-selector">
              <button @click="decreaseQuantity" class="qty-btn">-</button>
              <input type="number" v-model.number="quantity" min="1" class="qty-input">
              <button @click="increaseQuantity" class="qty-btn">+</button>
            </div>

            <button @click="addToCart" class="btn add-to-cart-btn">Add to cart</button>
          </div>

          <div class="product-meta" v-if="product.category">
            <div class="meta-item">
              <span class="meta-label">Category:</span>
              <span class="meta-value">{{ product.category }}</span>
            </div>
          </div>

          <div class="social-share">
            <div class="share-label">Share:</div>
            <div class="share-icons">
              <a href="#" class="share-icon facebook">
                <span class="icon-facebook"></span>
              </a>
              <a href="#" class="share-icon twitter">
                <span class="icon-twitter"></span>
              </a>
              <a href="#" class="share-icon linkedin">
                <span class="icon-linkedin"></span>
              </a>
              <a href="#" class="share-icon pinterest">
                <span class="icon-pinterest"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="product-tabs">
        <div class="tabs-header">
          <div
            :class="['tab-item', { active: activeTab === 'description' }]"
            @click="activeTab = 'description'"
          >
            Description
          </div>
          <div
            v-if="product.details"
            :class="['tab-item', { active: activeTab === 'details' }]"
            @click="activeTab = 'details'"
          >
            Details
          </div>
          <div
            :class="['tab-item', { active: activeTab === 'reviews' }]"
            @click="activeTab = 'reviews'"
          >
            Reviews (0)
          </div>
        </div>

        <div class="tab-content">
          <div v-if="activeTab === 'description'" class="tab-pane">
            <p>{{ product.description }}</p>
          </div>

          <div v-if="activeTab === 'details' && product.details" class="tab-pane">
            <div v-if="product.details.olfactoryArchitecture" class="details-section">
              <h3>Olfactory Architecture</h3>
              <ul class="details-list">
                <li><strong>Top:</strong> {{ product.details.olfactoryArchitecture.top }}</li>
                <li><strong>Heart:</strong> {{ product.details.olfactoryArchitecture.heart }}</li>
                <li><strong>Base:</strong> {{ product.details.olfactoryArchitecture.base }}</li>
              </ul>
            </div>

            <div v-if="product.details.bottleDesign" class="details-section">
              <h3>Bottle Design</h3>
              <ul class="details-list">
                <li v-for="(item, index) in product.details.bottleDesign" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>

            <div v-if="product.details.performance" class="details-section">
              <h3>Performance</h3>
              <ul class="details-list">
                <li><strong>Type:</strong> {{ product.details.performance.type }}</li>
                <li><strong>Longevity:</strong> {{ product.details.performance.longevity }}</li>
                <li><strong>Sillage:</strong> {{ product.details.performance.sillage }}</li>
                <li><strong>Optimal Application:</strong> {{ product.details.performance.optimalApplication }}</li>
              </ul>
            </div>
          </div>

          <div v-if="activeTab === 'reviews'" class="tab-pane">
            <p class="no-reviews">There are no reviews for this product yet.</p>

            <div class="write-review">
              <h3>Write a Review</h3>
              <form @submit.prevent="submitReview" class="review-form">
                <div class="form-group">
                  <label for="name">Name *</label>
                  <input type="text" id="name" v-model="review.name" required class="form-control">
                </div>

                <div class="form-group">
                  <label for="email">Email *</label>
                  <input type="email" id="email" v-model="review.email" required class="form-control">
                </div>

                <div class="form-group">
                  <label for="rating">Rating *</label>
                  <select id="rating" v-model="review.rating" required class="form-control">
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="comment">Your Review *</label>
                  <textarea id="comment" v-model="review.comment" required class="form-control"></textarea>
                </div>

                <button type="submit" class="btn">Submit Review</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="related-products" v-if="relatedProducts.length > 0">
        <h2 class="section-title">Related Products</h2>
        <div class="product-grid">
          <product-card
            v-for="product in relatedProducts"
            :key="product.id"
            :product="product"
          ></product-card>
        </div>
      </div>
    </div>

    <div v-else class="container">
      <div class="product-not-found">
        <p>Product not found.</p>
        <router-link to="/products" class="btn">Back to Products</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductCard from '@/components/product/ProductCard.vue';

export default {
  name: 'ProductDetailView',
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
      quantity: 1,
      activeTab: 'description',
      review: {
        name: '',
        email: '',
        rating: 5,
        comment: ''
      }
    }
  },
  computed: {
    ...mapGetters(['getProductById', 'getProducts']),
    productId() {
      return parseInt(this.$route.params.id);
    },
    product() {
      return this.getProductById(this.productId) || {};
    },
    relatedProducts() {
      if (!this.product.category) return [];

      return this.getProducts
        .filter(p => p.category === this.product.category && p.id !== this.product.id)
        .slice(0, 4);
    }
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCart() {
      this.$store.dispatch('addToCart', {
        product: this.product,
        quantity: this.quantity
      });

      alert(`${this.quantity} x ${this.product.name} added to cart!`);
    },
    submitReview() {
      // In a real application, this would send the review to a backend
      alert('Thank you for your review! It will be visible after moderation.');
      this.review = {
        name: '',
        email: '',
        rating: 5,
        comment: ''
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.product-detail {
  margin-bottom: 60px;

  .page-header {
    .page-title {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
    }
  }

  .product-container {
    display: flex;
    gap: 40px;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .product-image {
    flex: 1;

    img {
      width: 100%;
      border-radius: 8px;
    }
  }

  .product-info {
    flex: 1;
  }

  .product-name {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .product-price {
    font-size: 1.8rem;
    color: #e14272;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .product-description {
    margin-bottom: 30px;
    color: #666;
    line-height: 1.6;
  }

  .product-actions {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;

    .quantity-selector {
      display: flex;
      align-items: center;

      .qty-btn {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f5f5f5;
        border: 1px solid #ddd;
        cursor: pointer;
        font-size: 1.2rem;

        &:first-child {
          border-radius: 4px 0 0 4px;
        }

        &:last-child {
          border-radius: 0 4px 4px 0;
        }
      }

      .qty-input {
        width: 50px;
        height: 40px;
        border: 1px solid #ddd;
        border-left: none;
        border-right: none;
        text-align: center;
        font-size: 1rem;
      }
    }

    .add-to-cart-btn {
      flex: 1;
      padding: 10px 20px;
      font-size: 1rem;
    }

    @media (max-width: 576px) {
      flex-direction: column;

      .quantity-selector {
        width: 100%;
        justify-content: center;
      }

      .add-to-cart-btn {
        width: 100%;
      }
    }
  }

  .product-meta {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;

    .meta-item {
      margin-bottom: 10px;

      .meta-label {
        font-weight: 600;
        margin-right: 5px;
      }
    }
  }

  .social-share {
    display: flex;
    align-items: center;

    .share-label {
      margin-right: 15px;
      font-weight: 600;
    }

    .share-icons {
      display: flex;
      gap: 10px;
    }

    .share-icon {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s;

      &:hover {
        background-color: #e14272;
        color: white;
      }
    }
  }

  .product-tabs {
    margin-bottom: 50px;

    .tabs-header {
      display: flex;
      border-bottom: 1px solid #ddd;

      .tab-item {
        padding: 15px 25px;
        cursor: pointer;
        font-weight: 600;
        border-bottom: 2px solid transparent;
        transition: all 0.3s;

        &.active {
          border-bottom-color: #e14272;
          color: #e14272;
        }

        &:hover:not(.active) {
          color: #e14272;
        }
      }

      @media (max-width: 576px) {
        flex-direction: column;
        border-bottom: none;

        .tab-item {
          border-bottom: 1px solid #ddd;

          &.active {
            border-bottom-color: #e14272;
            background-color: #f9f9f9;
          }
        }
      }
    }

    .tab-content {
      padding: 30px 0;
    }

    .tab-pane {
      line-height: 1.6;
      color: #666;

      p {
        margin-bottom: 15px;
      }
    }

    .details-section {
      margin-bottom: 30px;

      h3 {
        font-size: 1.2rem;
        margin-bottom: 15px;
        color: #333;
      }
    }

    .details-list {
      list-style: none;

      li {
        margin-bottom: 10px;

        strong {
          font-weight: 600;
          color: #333;
        }
      }
    }

    .no-reviews {
      margin-bottom: 30px;
    }

    .write-review {
      h3 {
        font-size: 1.2rem;
        margin-bottom: 20px;
      }
    }

    .review-form {
      .form-group {
        margin-bottom: 20px;
      }

      label {
        display: block;
        margin-bottom: 8px;
      }

      .form-control {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }

      textarea {
        min-height: 120px;
      }
    }
  }

  .product-not-found {
    text-align: center;
    padding: 50px 0;

    p {
      font-size: 1.2rem;
      margin-bottom: 20px;
      color: #666;
    }
  }

  .related-products {
    .section-title {
      text-align: center;
      margin-bottom: 30px;
    }

    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 25px;

      @media (max-width: 576px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 15px;
      }
    }
  }
}
</style>
