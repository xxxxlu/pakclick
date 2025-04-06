<template>
  <div class="cart-page">
    <div class="page-header" :style="headerStyle">
      <div class="container">
        <h1 class="page-title">Cart</h1>
      </div>
    </div>

    <div class="container">
      <div class="checkout-steps">
        <div class="step active">
          <span class="step-number">1</span>
          <span class="step-text">Cart</span>
        </div>
        <div class="step">
          <span class="step-number">2</span>
          <span class="step-text">Checkout</span>
        </div>
        <div class="step">
          <span class="step-number">3</span>
          <span class="step-text">Order</span>
        </div>
      </div>

      <div v-if="cartItems.length" class="cart-content">
        <div class="cart-items">
          <div class="cart-header">
            <div class="header-product">Product</div>
            <div class="header-price">Price</div>
            <div class="header-quantity">Quantity</div>
            <div class="header-total">Total</div>
          </div>

          <div class="cart-item" v-for="item in cartItems" :key="item.product.id">
            <div class="item-product">
              <div class="product-image">
                <img :src="item.product.image" :alt="item.product.name">
              </div>
              <div class="product-info">
                <h3 class="product-name">{{ item.product.name }}</h3>
                <button class="remove-btn" @click="removeItem(item.product.id)">
                  Remove
                </button>
              </div>
            </div>

            <div class="item-price">Rs.{{ formatPrice(item.product.price) }}</div>

            <div class="item-quantity">
              <div class="quantity-selector">
                <button @click="decreaseQuantity(item)" class="qty-btn">-</button>
                <input
                  type="number"
                  v-model.number="item.quantity"
                  @change="updateQuantity(item)"
                  min="1"
                  class="qty-input"
                >
                <button @click="increaseQuantity(item)" class="qty-btn">+</button>
              </div>
            </div>

            <div class="item-total">Rs.{{ formatPrice(item.product.price * item.quantity) }}</div>
          </div>
        </div>

        <div class="cart-summary">
          <h2 class="summary-title">Cart Totals</h2>

          <div class="summary-row">
            <span class="row-label">Subtotal</span>
            <span class="row-value">Rs.{{ formatPrice(cartTotal) }}</span>
          </div>

          <div class="summary-row">
            <span class="row-label">Shipping</span>
            <span class="row-value">Free</span>
          </div>

          <div class="summary-row total">
            <span class="row-label">Total</span>
            <span class="row-value">Rs.{{ formatPrice(cartTotal) }}</span>
          </div>

          <router-link to="/checkout" class="btn checkout-btn">
            Proceed to Checkout
          </router-link>
        </div>
      </div>

      <div v-else class="empty-cart">
        <div class="empty-cart-icon">
          <img src="https://ext.same-assets.com/137830375/3228090214.svg" alt="Empty Cart" />
        </div>
        <p class="empty-cart-message">Your cart is currently empty.</p>
        <router-link to="/products" class="btn">Return to shop</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CartView',
  data() {
    return {
      headerStyle: {
        backgroundColor: '#000',
        color: '#fff',
        padding: '50px 0',
        marginBottom: '40px'
      }
    }
  },
  computed: {
    ...mapGetters({
      cartItems: 'getCartItems',
      cartTotal: 'getCartTotal'
    })
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    increaseQuantity(item) {
      this.$store.dispatch('updateCartQuantity', {
        productId: item.product.id,
        quantity: item.quantity + 1
      });
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        this.$store.dispatch('updateCartQuantity', {
          productId: item.product.id,
          quantity: item.quantity - 1
        });
      }
    },
    updateQuantity(item) {
      // Ensure quantity is at least 1
      if (item.quantity < 1) {
        item.quantity = 1;
      }

      this.$store.dispatch('updateCartQuantity', {
        productId: item.product.id,
        quantity: item.quantity
      });
    },
    removeItem(productId) {
      this.$store.dispatch('removeFromCart', productId);
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-page {
  margin-bottom: 60px;

  .page-header {
    .page-title {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
    }
  }

  .checkout-steps {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;

    .step {
      display: flex;
      align-items: center;
      margin: 0 15px;
      position: relative;

      &:not(:last-child)::after {
        content: '';
        position: absolute;
        right: -20px;
        top: 50%;
        width: 25px;
        height: 1px;
        background-color: #ddd;
      }

      &.active {
        .step-number {
          background-color: #e14272;
          color: #fff;
        }

        .step-text {
          color: #e14272;
        }
      }

      .step-number {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        margin-right: 10px;
      }

      .step-text {
        font-weight: 600;
      }
    }

    @media (max-width: 576px) {
      flex-direction: column;
      align-items: flex-start;

      .step {
        margin: 10px 0;

        &:not(:last-child)::after {
          display: none;
        }
      }
    }
  }

  .cart-content {
    display: flex;
    gap: 30px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .cart-items {
    flex: 2;

    .cart-header {
      display: flex;
      padding: 15px;
      background-color: #f5f5f5;
      margin-bottom: 15px;
      border-radius: 4px;
      font-weight: 600;

      .header-product {
        flex: 3;
      }

      .header-price, .header-quantity, .header-total {
        flex: 1;
        text-align: center;
      }

      @media (max-width: 576px) {
        display: none;
      }
    }

    .cart-item {
      display: flex;
      padding: 15px;
      border-bottom: 1px solid #eee;
      align-items: center;

      .item-product {
        flex: 3;
        display: flex;
        gap: 15px;

        .product-image {
          width: 80px;
          height: 80px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 4px;
          }
        }

        .product-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .product-name {
            font-weight: 600;
            margin-bottom: 10px;
          }

          .remove-btn {
            background: none;
            border: none;
            color: #e14272;
            cursor: pointer;
            padding: 0;
            text-align: left;
            font-size: 0.9rem;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }

      .item-price, .item-total {
        flex: 1;
        text-align: center;
      }

      .item-quantity {
        flex: 1;
        display: flex;
        justify-content: center;

        .quantity-selector {
          display: flex;
          align-items: center;

          .qty-btn {
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f5f5f5;
            border: 1px solid #ddd;
            cursor: pointer;
            font-size: 1rem;

            &:first-child {
              border-radius: 4px 0 0 4px;
            }

            &:last-child {
              border-radius: 0 4px 4px 0;
            }
          }

          .qty-input {
            width: 40px;
            height: 30px;
            border: 1px solid #ddd;
            border-left: none;
            border-right: none;
            text-align: center;
            font-size: 0.9rem;
          }
        }
      }

      @media (max-width: 576px) {
        flex-direction: column;
        gap: 15px;
        align-items: flex-start;

        .item-product {
          width: 100%;
        }

        .item-price, .item-quantity, .item-total {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: right;

          &::before {
            content: attr(data-label);
            font-weight: 600;
          }
        }

        .item-price::before {
          content: "Price:";
        }

        .item-quantity::before {
          content: "Quantity:";
        }

        .item-total::before {
          content: "Total:";
        }
      }
    }
  }

  .cart-summary {
    flex: 1;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    align-self: flex-start;

    .summary-title {
      font-size: 1.3rem;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
    }

    .summary-row {
      display: flex;
      justify-content: space-between;
      padding: 15px 0;
      border-bottom: 1px solid #eee;

      .row-label {
        font-weight: 600;
      }

      &.total {
        font-size: 1.2rem;
        font-weight: 700;
        color: #e14272;
      }
    }

    .checkout-btn {
      width: 100%;
      margin-top: 20px;
      padding: 12px;
      font-size: 1rem;
    }
  }

  .empty-cart {
    text-align: center;
    padding: 50px 0;

    .empty-cart-icon {
      margin-bottom: 20px;

      img {
        width: 70px;
        height: 70px;
      }
    }

    .empty-cart-message {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 20px;
    }
  }
}
</style>
