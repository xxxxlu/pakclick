<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero" :style="heroStyle">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Scent That Speaks Before You Do</h1>
          <p class="hero-subtitle">
            Discover signature fragrances that linger in memories. From soft florals to bold orientals, each scent is crafted to express who you are—without saying a word.
          </p>
          <router-link to="/products" class="btn hero-btn">See what's on sale</router-link>
        </div>
      </div>
    </section>

    <!-- Products on Sale Section -->
    <section class="section products-section">
      <div class="container">
        <h2 class="section-title">Products on sale</h2>
        <div class="product-grid">
          <product-card
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
          ></product-card>
        </div>
        <div class="text-center mt-4">
          <router-link to="/products" class="btn">More products</router-link>
        </div>
      </div>
    </section>

    <!-- Best Selling Products Section -->
    <section class="section products-section bg-light">
      <div class="container">
        <h2 class="section-title">Best selling products</h2>
        <div class="product-grid">
          <product-card
            v-for="product in bestSellingProducts"
            :key="product.id"
            :product="product"
          ></product-card>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="stats-section" :style="statsStyle">
      <div class="container">
        <div class="stats-container">
          <div class="stat-item">
            <div class="stat-number">60k+</div>
            <div class="stat-text">Active Customers</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">24hrs</div>
            <div class="stat-text">Long Lasting</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">10+</div>
            <div class="stat-text">Years</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Banner Section -->
    <section class="feature-banner">
      <div class="container">
        <div class="row">
          <div class="col col-6">
            <div class="feature-image">
              <img src="https://fragrancebloom.com/wp-content/uploads/2025/03/mfk-baccarat-rouge-540-edp-key-visual-square-1670372092-scaled.jpg" alt="Luxury Perfume" />
            </div>
          </div>
          <div class="col col-6">
            <div class="feature-content">
              <h2 class="feature-title">Elevate Every Moment with Signature Scents</h2>
              <p class="feature-text">
                Indulge in fragrances that captivate the senses. From warm and woody to sweet and seductive, find the scent that defines your mood, your story, your style.
              </p>
              <router-link to="/about" class="btn">About us</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Features Section -->
    <section class="services-section">
      <div class="container">
        <div class="services-grid">
          <div class="service-item">
            <div class="service-icon">
              <img src="https://ext.same-assets.com/3253698089/1609695495.png" alt="Return Policy" />
            </div>
            <h5 class="service-title">30 days free return</h5>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <img src="https://ext.same-assets.com/3253698089/3989116053.png" alt="Payment Methods" />
            </div>
            <h5 class="service-title">Multiple ways of payment</h5>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <img src="https://ext.same-assets.com/3253698089/3217330399.png" alt="Customer Support" />
            </div>
            <h5 class="service-title">Excellent support</h5>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <img src="https://ext.same-assets.com/3253698089/4133722438.png" alt="Satisfaction Guarantee" />
            </div>
            <h5 class="service-title">Satisfaction guarantee</h5>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <img src="https://ext.same-assets.com/3253698089/1054224386.png" alt="Fast Delivery" />
            </div>
            <h5 class="service-title">Super fast delivery</h5>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductCard from '@/components/product/ProductCard.vue';

export default {
  name: 'HomeView',
  components: {
    ProductCard
  },
  data() {
    return {
      heroStyle: {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://fragrancebloom.com/wp-content/uploads/2025/03/fragrance-spray-into-air.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      statsStyle: {
        backgroundImage: 'url(https://fragrancebloom.com/wp-content/uploads/2020/07/store2-home-numbers-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }
  },
  computed: {
    ...mapGetters(['getProducts']),
    featuredProducts() {
      return this.getProducts.slice(0, 5);
    },
    bestSellingProducts() {
      return this.getProducts.slice(0, 5).reverse();
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  height: 80vh;
  display: flex;
  align-items: center;
  color: white;
  padding: 0;
  position: relative;

  &-content {
    max-width: 600px;
    padding: 0 15px;
  }

  &-title {
    font-size: 3.5rem;
    margin-bottom: 20px;
    font-weight: 700;
    line-height: 1.2;
  }

  &-subtitle {
    font-size: 1.2rem;
    margin-bottom: 30px;
    line-height: 1.6;
  }

  &-btn {
    font-size: 1.1rem;
    padding: 12px 30px;
  }

  @media (max-width: 768px) {
    &-title {
      font-size: 2.5rem;
    }

    &-subtitle {
      font-size: 1rem;
    }
  }
}

.section {
  padding: 80px 0;

  @media (max-width: 768px) {
    padding: 50px 0;
  }
}

.products-section {
  .section-title {
    margin-bottom: 40px;
  }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 30px;

  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }
}

.bg-light {
  background-color: #f9f9f9;
}

.stats-section {
  padding: 80px 0;
  color: white;

  .stats-container {
    display: flex;
    justify-content: space-around;
    text-align: center;

    @media (max-width: 768px) {
      flex-direction: column;

      .stat-item {
        margin-bottom: 30px;
      }
    }
  }

  .stat-item {
    padding: 0 20px;
  }

  .stat-number {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .stat-text {
    font-size: 1.2rem;
  }
}

.feature-banner {
  padding: 80px 0;

  .feature-image {
    height: 100%;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  }

  .feature-content {
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .feature-title {
    font-size: 2.5rem;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  .feature-text {
    margin-bottom: 30px;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .row {
      flex-direction: column;
    }

    .feature-content {
      padding: 30px 0;
      text-align: center;
    }

    .feature-title {
      font-size: 2rem;
    }

    .feature-image {
      margin-bottom: 30px;
    }
  }
}

.services-section {
  background-color: #f5f5f5;
  padding: 60px 0;

  .services-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;

    @media (max-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .service-item {
    text-align: center;
  }

  .service-icon {
    margin-bottom: 15px;

    img {
      width: 60px;
      height: 60px;
    }
  }

  .service-title {
    font-size: 1rem;
    font-weight: 600;
    color: #666;
  }
}
</style>
