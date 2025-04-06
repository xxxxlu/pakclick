<template>
  <div class="checkout-information">
    <div class="checkout-content">
      <div class="checkout-form">
        <h2 class="section-title">Shipping Information</h2>

        <form @submit.prevent="proceedToPayment">
          <div class="form-section">
            <h3 class="form-section-title">Personal Information</h3>

            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  v-model="personalInfo.firstName"
                  required
                  class="form-control"
                >
              </div>

              <div class="form-group">
                <label for="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  v-model="personalInfo.lastName"
                  required
                  class="form-control"
                >
              </div>
            </div>

            <div class="form-group">
              <label for="email">Email Address *</label>
              <input
                type="email"
                id="email"
                v-model="personalInfo.email"
                required
                class="form-control"
              >
            </div>

            <div class="form-group">
              <label for="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                v-model="personalInfo.phone"
                required
                class="form-control"
              >
            </div>
          </div>

          <div class="form-section">
            <h3 class="form-section-title">Shipping Address</h3>

            <div class="form-group">
              <label for="address">Street Address *</label>
              <input
                type="text"
                id="address"
                v-model="shippingAddress.address"
                required
                class="form-control"
              >
            </div>

            <div class="form-group">
              <label for="apartment">Apartment, suite, etc. (optional)</label>
              <input
                type="text"
                id="apartment"
                v-model="shippingAddress.apartment"
                class="form-control"
              >
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="city">City *</label>
                <input
                  type="text"
                  id="city"
                  v-model="shippingAddress.city"
                  required
                  class="form-control"
                >
              </div>

              <div class="form-group">
                <label for="state">State/Province *</label>
                <input
                  type="text"
                  id="state"
                  v-model="shippingAddress.state"
                  required
                  class="form-control"
                >
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="zip">Postal/ZIP Code *</label>
                <input
                  type="text"
                  id="zip"
                  v-model="shippingAddress.zip"
                  required
                  class="form-control"
                >
              </div>

              <div class="form-group">
                <label for="country">Country *</label>
                <select
                  id="country"
                  v-model="shippingAddress.country"
                  required
                  class="form-control"
                >
                  <option value="">Select a country</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
            </div>
          </div>

          <div class="form-actions">
            <router-link to="/cart" class="btn-outline">Return to Cart</router-link>
            <button type="submit" class="btn">Continue to Payment</button>
          </div>
        </form>
      </div>

      <div class="checkout-summary">
        <h2 class="summary-title">Order Summary</h2>

        <div class="cart-items">
          <div class="cart-item" v-for="item in cartItems" :key="item.product.id">
            <div class="item-image">
              <img :src="item.product.image" :alt="item.product.name">
              <span class="item-quantity">{{ item.quantity }}</span>
            </div>
            <div class="item-info">
              <h3 class="item-name">{{ item.product.name }}</h3>
              <div class="item-price">Rs.{{ formatPrice(item.product.price) }}</div>
            </div>
          </div>
        </div>

        <div class="summary-totals">
          <div class="total-row">
            <span class="total-label">Subtotal</span>
            <span class="total-value">Rs.{{ formatPrice(cartTotal) }}</span>
          </div>

          <div class="total-row">
            <span class="total-label">Shipping</span>
            <span class="total-value">Free</span>
          </div>

          <div class="total-row final-total">
            <span class="total-label">Total</span>
            <span class="total-value">Rs.{{ formatPrice(cartTotal) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'InformationView',
  data() {
    return {
      personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      },
      shippingAddress: {
        address: '',
        apartment: '',
        city: '',
        state: '',
        zip: '',
        country: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      cartItems: 'getCartItems',
      cartTotal: 'getCartTotal',
      checkoutInfo: 'getCheckoutInfo'
    })
  },
  created() {
    // If there's already saved checkout information, pre-fill the form
    if (this.checkoutInfo.personalInfo) {
      this.personalInfo = { ...this.checkoutInfo.personalInfo };
    }

    if (this.checkoutInfo.shippingAddress) {
      this.shippingAddress = { ...this.checkoutInfo.shippingAddress };
    }
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    proceedToPayment() {
      // Save the information to the store
      this.$store.dispatch('savePersonalInfo', { ...this.personalInfo });
      this.$store.dispatch('saveShippingAddress', { ...this.shippingAddress });

      // Proceed to payment step
      this.$router.push('/checkout/payment');
    }
  }
}
</script>

<style lang="scss" scoped>
.checkout-information {
  .checkout-content {
    display: flex;
    gap: 30px;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  .checkout-form {
    flex: 3;

    .section-title {
      font-size: 1.5rem;
      margin-bottom: 30px;
    }
  }

  .form-section {
    margin-bottom: 30px;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 20px;

    .form-section-title {
      font-size: 1.2rem;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
    }
  }

  .form-row {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;

    .form-group {
      flex: 1;
    }

    @media (max-width: 576px) {
      flex-direction: column;
      gap: 0;
    }
  }

  .form-group {
    margin-bottom: 15px;

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
    }

    .form-control {
      width: 100%;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;

      &:focus {
        border-color: #e14272;
        outline: none;
      }
    }
  }

  .form-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    .btn, .btn-outline {
      padding: 12px 20px;
      font-size: 1rem;
    }

    .btn-outline {
      background-color: transparent;
      border: 1px solid #ddd;
      color: #333;
      border-radius: 25px;
      transition: all 0.3s;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;

      &:hover {
        border-color: #e14272;
        color: #e14272;
      }
    }

    @media (max-width: 576px) {
      flex-direction: column-reverse;
      gap: 15px;

      .btn, .btn-outline {
        width: 100%;
      }
    }
  }

  .checkout-summary {
    flex: 2;
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    align-self: flex-start;

    .summary-title {
      font-size: 1.3rem;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
    }

    .cart-items {
      margin-bottom: 20px;
      max-height: 300px;
      overflow-y: auto;
    }

    .cart-item {
      display: flex;
      gap: 15px;
      padding: 10px 0;
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: none;
      }

      .item-image {
        position: relative;
        width: 60px;
        height: 60px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
        }

        .item-quantity {
          position: absolute;
          top: -10px;
          right: -10px;
          background-color: #e14272;
          color: white;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 600;
        }
      }

      .item-info {
        flex: 1;

        .item-name {
          font-size: 1rem;
          margin-bottom: 5px;
        }

        .item-price {
          color: #e14272;
          font-weight: 600;
        }
      }
    }

    .summary-totals {
      .total-row {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid #eee;

        .total-label {
          font-weight: 600;
        }

        &.final-total {
          font-size: 1.2rem;
          font-weight: 700;
          color: #e14272;
          border-bottom: none;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
