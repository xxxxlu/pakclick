<template>
  <div class="checkout-payment">
    <div class="checkout-content">
      <div class="checkout-form">
        <h2 class="section-title">Payment Method</h2>

        <form @submit.prevent="placeOrder">
          <div class="form-section">
            <h3 class="form-section-title">Select Payment Method</h3>

            <div class="payment-methods">

              <div class="payment-method" :class="{ active: paymentMethod === 'jazzcash' }">
                <div class="method-radio">
                  <input
                    type="radio"
                    id="jazzcash"
                    value="jazzcash"
                    v-model="paymentMethod"
                    name="payment-method"
                  >
                  <label for="jazzcash"></label>
                </div>

                <div class="method-content">
                  <div class="method-header">
                    <label for="jazzcash" class="method-title">easypaisa</label>
                    <div class="method-icons">
                      <img src="../../assets/easypaisa.png" alt="easypaisa" height="60">
                    </div>
                  </div>

                  <div class="method-form" v-if="paymentMethod === 'jazzcash'">
                    <div class="form-group">
                      <label for="jazzcash-number">Mobile Number *</label>
                      <input
                        type="text"
                        id="jazzcash-number"
                        v-model="jazzcash.number"
                        placeholder="03xxxxxxxxx"
                        required
                        class="form-control"
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="payment-method" :class="{ active: paymentMethod === 'easypaisa' }">
                <div class="method-radio">
                  <input
                    type="radio"
                    id="easypaisa"
                    value="easypaisa"
                    v-model="paymentMethod"
                    name="payment-method"
                  >
                  <label for="easypaisa"></label>
                </div>

                <div class="method-content">
                  <div class="method-header">
                    <label for="easypaisa" class="method-title">Frame</label>
                    <div class="method-icons">
                      <img src="../../assets/Frame.png" alt="EasyPaisa" height="70">
                    </div>
                  </div>

                  <div class="method-form" v-if="paymentMethod === 'easypaisa'">
                    <div class="form-group">
                      <label for="easypaisa-number">Mobile Number *</label>
                      <input
                        type="text"
                        id="easypaisa-number"
                        v-model="easypaisa.number"
                        placeholder="03xxxxxxxxx"
                        required
                        class="form-control"
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="form-section">
            <h3 class="form-section-title">Billing Address</h3>

            <div class="form-group">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="same-address"
                  v-model="sameAsShipping"
                >
                <label for="same-address">Same as shipping address</label>
              </div>
            </div>

            <div v-if="!sameAsShipping" class="billing-address-form">
              <!-- Billing address form fields would go here, similar to shipping address -->
              <p>Please provide your billing address.</p>
              <p class="text-muted">(For demonstration purposes, we'll use the shipping address)</p>
            </div>
          </div>

          <div class="form-actions">
            <router-link to="/checkout/information" class="btn-outline">Return to Information</router-link>
            <button type="submit" class="btn">Place Order</button>
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
  name: 'PaymentView',
  data() {
    return {
      paymentMethod: 'credit-card',
      sameAsShipping: true,
      creditCard: {
        number: '',
        name: '',
        expiry: '',
        cvv: ''
      },
      jazzcash: {
        number: ''
      },
      easypaisa: {
        number: ''
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
    // Check if we came here properly (with personal info)
    if (!this.checkoutInfo.personalInfo || !this.checkoutInfo.shippingAddress) {
      this.$router.push('/checkout/information');
    }
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    placeOrder() {
      // Save payment method to store
      const paymentDetails = { method: this.paymentMethod };

      switch(this.paymentMethod) {
        case 'credit-card':
          paymentDetails.details = { ...this.creditCard };
          break;
        case 'jazzcash':
          paymentDetails.details = { ...this.jazzcash };
          break;
        case 'easypaisa':
          paymentDetails.details = { ...this.easypaisa };
          break;
        default:
          paymentDetails.details = { method: 'Cash on Delivery' };
      }

      this.$store.dispatch('savePaymentMethod', paymentDetails);

      // Proceed to success page
      this.$router.push('/checkout/success');
    }
  }
}
</script>

<style lang="scss" scoped>
.checkout-payment {
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

  .payment-methods {
    .payment-method {
      display: flex;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 15px;
      transition: all 0.3s;

      &.active {
        border-color: #e14272;
        background-color: #fff9fa;
      }

      .method-radio {
        margin-right: 15px;

        input[type="radio"] {
          display: none;

          & + label {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 2px solid #ddd;
            border-radius: 50%;
            position: relative;
            cursor: pointer;

            &:after {
              content: '';
              position: absolute;
              top: 3px;
              left: 3px;
              width: 10px;
              height: 10px;
              background-color: #e14272;
              border-radius: 50%;
              opacity: 0;
              transition: opacity 0.3s;
            }
          }

          &:checked + label {
            border-color: #e14272;

            &:after {
              opacity: 1;
            }
          }
        }
      }

      .method-content {
        flex: 1;

        .method-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .method-title {
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
        }

        .method-description {
          color: #666;
          margin-top: 5px;
        }

        .method-icons {
          display: flex;
          gap: 10px;
        }

        .method-form {
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid #eee;
        }
      }
    }
  }

  .checkbox-group {
    display: flex;
    align-items: center;

    input[type="checkbox"] {
      margin-right: 10px;
    }

    label {
      cursor: pointer;
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

  .text-muted {
    color: #999;
    font-size: 0.9rem;
    font-style: italic;
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
