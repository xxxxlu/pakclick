<template>
  <div class="checkout-success">
    <div class="checkout-content">
      <div class="success-container">

        <h1 class="success-title">Thank You for Your Order!</h1>
        <p class="success-message">
          Your order has been placed and is being processed. You will receive a confirmation email shortly.
        </p>

        <div class="order-details">
          <h2 class="details-title">Order Details</h2>

          <div class="details-row">
            <span class="details-label">Order Number:</span>
            <span class="details-value">{{ orderNumber }}</span>
          </div>

          <div class="details-row">
            <span class="details-label">Order Date:</span>
            <span class="details-value">{{ orderDate }}</span>
          </div>

          <div class="details-row">
            <span class="details-label">Payment Method:</span>
            <span class="details-value">{{ paymentMethodDisplay }}</span>
          </div>

          <div class="details-row">
            <span class="details-label">Order Total:</span>
            <span class="details-value price">Rs.{{ formatPrice(savedCartTotal) }}</span>
          </div>
        </div>

        <div class="shipping-info">
          <h2 class="details-title">Shipping Information</h2>

          <div v-if="checkoutInfo.personalInfo" class="shipping-address">
            <p>{{ checkoutInfo.personalInfo.firstName }} {{ checkoutInfo.personalInfo.lastName }}</p>
            <p v-if="checkoutInfo.shippingAddress">
              {{ checkoutInfo.shippingAddress.address }}
              <span v-if="checkoutInfo.shippingAddress.apartment">, {{ checkoutInfo.shippingAddress.apartment }}</span>
            </p>
            <p v-if="checkoutInfo.shippingAddress">
              {{ checkoutInfo.shippingAddress.city }}, {{ checkoutInfo.shippingAddress.state }}, {{ checkoutInfo.shippingAddress.zip }}
            </p>
            <p v-if="checkoutInfo.shippingAddress">{{ checkoutInfo.shippingAddress.country }}</p>
            <p>{{ checkoutInfo.personalInfo.email }}</p>
            <p>{{ checkoutInfo.personalInfo.phone }}</p>
          </div>
        </div>

        <div class="order-items">
          <h2 class="details-title">Order Items</h2>

          <div class="item" v-for="item in cartItems" :key="item.product.id">
            <div class="item-image">
              <img :src="item.product.image" :alt="item.product.name">
            </div>
            <div class="item-details">
              <h3 class="item-name">{{ item.product.name }}</h3>
              <div class="item-info">
                <span class="item-quantity">Qty: {{ item.quantity }}</span>
                <span class="item-price">Rs.{{ formatPrice(item.product.price) }} each</span>
              </div>
            </div>
            <div class="item-total">
              Rs.{{ formatPrice(item.product.price * item.quantity) }}
            </div>
          </div>
        </div>

        <div class="action-buttons">
          <router-link to="/products" class="btn">Continue Shopping</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SuccessView',
  data() {
    return {
      orderNumber: 'FB' + Math.floor(100000 + Math.random() * 900000),
      orderDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      savedCartTotal: 0
    }
  },
  computed: {
    ...mapGetters({
      cartItems: 'getCartItems',
      cartTotal: 'getCartTotal',
      checkoutInfo: 'getCheckoutInfo'
    }),
    paymentMethodDisplay() {
      if (!this.checkoutInfo.paymentMethod) return 'Not specified';

      switch(this.checkoutInfo.paymentMethod.method) {
        case 'credit-card':
          return 'Credit Card';
        case 'cod':
          return 'Cash on Delivery';
        case 'jazzcash':
          return 'JazzCash';
        case 'easypaisa':
          return 'EasyPaisa';
        default:
          return this.checkoutInfo.paymentMethod.method;
      }
    }
  },
  created() {
    // Check if we have checkout information
    if (!this.checkoutInfo.personalInfo || !this.checkoutInfo.shippingAddress || !this.checkoutInfo.paymentMethod) {
      this.$router.push('/checkout/information');
      return;
    }

    // Check if cart is empty
    if (this.cartItems.length === 0) {
      this.$router.push('/cart');
      return;
    }
    
    // Save the cart total before it gets cleared
    this.savedCartTotal = this.cartTotal;
  },
  mounted() {
    // Complete the checkout process (clear cart and reset checkout info)
    this.$store.dispatch('completeCheckout');
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.checkout-success {
  .checkout-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .success-container {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    padding: 40px;
    margin-bottom: 60px;

    @media (max-width: 576px) {
      padding: 20px;
    }
  }

  .success-icon {
    text-align: center;
    margin-bottom: 20px;

    img {
      width: 80px;
      height: 80px;
      color: #4CAF50;
    }
  }

  .success-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 15px;
    color: #4CAF50;
  }

  .success-message {
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 40px;
    color: #666;
  }

  .order-details, .shipping-info, .order-items {
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
  }

  .details-title {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: #333;
  }

  .details-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    .details-label {
      font-weight: 600;
      color: #666;
    }

    .details-value {
      &.price {
        font-weight: 700;
        color: #e14272;
      }
    }
  }

  .shipping-address {
    p {
      margin-bottom: 8px;
      line-height: 1.4;
    }
  }

  .order-items {
    .item {
      display: flex;
      padding: 15px 0;
      border-bottom: 1px solid #f5f5f5;

      &:last-child {
        border-bottom: none;
      }

      .item-image {
        width: 70px;
        height: 70px;
        margin-right: 15px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
        }
      }

      .item-details {
        flex: 1;

        .item-name {
          font-size: 1.1rem;
          margin-bottom: 8px;
        }

        .item-info {
          display: flex;
          color: #666;
          font-size: 0.9rem;

          .item-quantity {
            margin-right: 15px;
          }
        }
      }

      .item-total {
        font-weight: 600;
        color: #333;
        display: flex;
        align-items: center;
      }
    }
  }

  .action-buttons {
    text-align: center;

    .btn {
      padding: 12px 30px;
      font-size: 1.1rem;
    }
  }
}
</style>
