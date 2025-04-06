<template>
  <div class="checkout-page">
    <div class="page-header" :style="headerStyle">
      <div class="container">
        <h1 class="page-title">Checkout</h1>
      </div>
    </div>

    <div class="container">
      <div class="checkout-steps">
        <div class="step">
          <span class="step-number">1</span>
          <span class="step-text">Cart</span>
        </div>
        <div class="step active">
          <span class="step-number">2</span>
          <span class="step-text">Checkout</span>
        </div>
        <div class="step">
          <span class="step-number">3</span>
          <span class="step-text">Order</span>
        </div>
      </div>

      <div v-if="cartItems.length === 0" class="empty-checkout">
        <p>Your cart is empty. Please add some products before checkout.</p>
        <router-link to="/products" class="btn">Browse Products</router-link>
      </div>

      <div v-else class="checkout-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CheckoutView',
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
      cartItems: 'getCartItems'
    })
  },
  created() {
    // If the route is exactly '/checkout', redirect to the information step
    if (this.$route.path === '/checkout') {
      this.$router.replace('/checkout/information');
    }

    // If the cart is empty, redirect to cart page
    if (this.cartItems.length === 0) {
      this.$router.push('/cart');
    }
  }
}
</script>

<style lang="scss" scoped>
.checkout-page {
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

  .empty-checkout {
    text-align: center;
    padding: 50px 0;

    p {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 20px;
    }
  }
}
</style>
