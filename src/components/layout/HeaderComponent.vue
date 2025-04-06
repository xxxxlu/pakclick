<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <router-link to="/">
            <img src="../../assets/pakclick.png" alt="pakclick" />
          </router-link>
        </div>

        <nav class="nav">
          <ul class="nav-menu">
            <li class="nav-item">
              <router-link to="/" class="nav-link">HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">SHOP</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">ABOUT</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">CONTACT</router-link>
            </li>
          </ul>
        </nav>

        <div class="header-actions">
          <div class="cart-icon">
            <router-link to="/cart" class="cart-link">
              <span class="cart-count" v-if="cartItemCount > 0">{{ cartItemCount }}</span>
              <div class="cart-price">Rs.{{ cartTotal.toFixed(2) }}</div>
            </router-link>
          </div>
        </div>

        <div class="mobile-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <div class="search-overlay" v-if="searchOpen">
      <div class="search-container">
        <input type="text" placeholder="Search products..." v-model="searchQuery" @keyup.enter="performSearch">
        <button @click="performSearch">Search</button>
        <span class="close-search" @click="toggleSearch">&times;</span>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HeaderComponent',
  data() {
    return {
      mobileMenuOpen: false,
      searchOpen: false,
      searchQuery: ''
    }
  },
  computed: {
    ...mapGetters({
      cartItemCount: 'getCartItemCount',
      cartTotal: 'getCartTotal'
    })
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      document.body.classList.toggle('no-scroll', this.mobileMenuOpen);
    },
    toggleSearch() {
      this.searchOpen = !this.searchOpen;
      document.body.classList.toggle('no-scroll', this.searchOpen);
    },
    performSearch() {
      if (this.searchQuery.trim()) {
        this.$router.push({ path: '/products', query: { search: this.searchQuery } });
        this.toggleSearch();
        this.searchQuery = '';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #000;
  color: #fff;
  padding: 15px 0;
  position: relative;

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    img {
      height: 60px;
    }
  }

  .nav {
    @media (max-width: 768px) {
      display: none;
    }

    &-menu {
      display: flex;

      &.active {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #000;
        z-index: 999;
        padding: 80px 20px 20px;
      }
    }

    &-item {
      margin: 0 15px;
    }

    &-link {
      color: #fff;
      font-weight: bold;
      transition: color 0.3s;
      position: relative;

      &:hover, &.router-link-active {
        color: #e14272;

        &:after {
          width: 100%;
        }
      }

      &:after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #e14272;
        transition: width 0.3s;
      }
    }
  }

  .header-actions {
    display: flex;
    align-items: center;

    .login-icon, .cart-icon, .search-icon {
      margin-left: 25px;
      cursor: pointer;

      img {
        width: 24px;
        height: 24px;
      }
    }

    .cart-link {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .cart-count {
      position: absolute;
      top: -10px;
      right: -10px;
      background-color: #e14272;
      color: #fff;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }

    .cart-price {
      font-size: 0.8rem;
      margin-top: 3px;
    }
  }

  .mobile-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;

    @media (max-width: 768px) {
      display: flex;
    }

    span {
      width: 25px;
      height: 3px;
      background-color: #fff;
      margin: 2px 0;
      transition: all 0.3s;
    }

    &.active {
      span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }
  }

  .search-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;

    .search-container {
      width: 80%;
      max-width: 600px;
      position: relative;

      input {
        width: 100%;
        padding: 15px;
        font-size: 1.2rem;
        border: none;
        border-radius: 5px;
      }

      button {
        position: absolute;
        right: 5px;
        top: 5px;
        padding: 10px 15px;
        background-color: #e14272;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      .close-search {
        position: absolute;
        top: -40px;
        right: 0;
        color: #fff;
        font-size: 2rem;
        cursor: pointer;
      }
    }
  }
}

// Mobile menu styles
.no-scroll {
  overflow: hidden;
}

@media (max-width: 768px) {
  .header {
    .nav {
      &.active {
        display: block;

        .nav-menu {
          flex-direction: column;

          .nav-item {
            margin: 15px 0;

            .nav-link {
              font-size: 1.5rem;
            }
          }
        }
      }
    }
  }
}
</style>
