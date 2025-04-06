<template>
  <div class="product-card">
    <div class="product-image">
      <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
        <img :src="product.image" :alt="product.name" />
      </router-link>
      <div class="product-actions">
        <button class="action-btn add-to-cart" @click="addToCart">
          <i class="cart-icon"></i>
        </button>
        <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" class="action-btn view-details">
          <i class="view-icon"></i>
        </router-link>
      </div>
    </div>
    <div class="product-info">
      <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" class="product-name">
        {{ product.name }}
      </router-link>
      <div class="product-price">Rs.{{ formatPrice(product.price) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    addToCart() {
      this.$store.dispatch('addToCart', {
        product: this.product,
        quantity: 1
      });

      // Optional: Show a toast notification or some feedback
      alert(`${this.product.name} added to cart!`);
    }
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    .product-actions {
      opacity: 1;
    }
  }

  .product-image {
    position: relative;
    overflow: hidden;
    padding-top: 100%; // 1:1 Aspect ratio

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .product-actions {
    position: absolute;
    bottom: 15px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 10px;
    opacity: 0;
    transition: opacity 0.3s;

    .action-btn {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;

      &:hover {
        background-color: #e14272;
        color: #fff;

        i {
          border-color: #fff;
        }
      }
    }

    .cart-icon, .view-icon {
      display: inline-block;
      width: 18px;
      height: 18px;
      position: relative;
    }

    .cart-icon::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 16px;
      height: 10px;
      border: 2px solid #555;
      border-radius: 3px 3px 0 0;
      border-bottom: none;
    }

    .cart-icon::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 4px;
      width: 2px;
      height: 8px;
      background-color: #555;
      box-shadow: 6px 0 0 #555;
    }

    .view-icon::before {
      content: '';
      position: absolute;
      top: 4px;
      left: 0;
      width: 16px;
      height: 10px;
      border: 2px solid #555;
      border-radius: 8px;
    }

    .view-icon::after {
      content: '';
      position: absolute;
      top: 8px;
      left: 6px;
      width: 4px;
      height: 4px;
      background-color: #555;
      border-radius: 50%;
    }
  }

  .product-info {
    padding: 15px;
    text-align: center;
  }

  .product-name {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
    color: #333;
    text-decoration: none;
    transition: color 0.3s;
    height: 2.4em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    &:hover {
      color: #e14272;
    }
  }

  .product-price {
    color: #e14272;
    font-weight: 700;
    font-size: 1.1rem;
  }
}
</style>
