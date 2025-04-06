<template>
  <footer class="footer">
    <div class="footer-widgets">
      <div class="container">
        <div class="row">
          <div class="col col-3">
            <div class="footer-logo">
              <img src="https://ext.same-assets.com/3253698089/882609388.png" alt="Fragrance Bloom" />
            </div>
            <div class="payment-methods">
              <img src="../../assets/easyPaisa.png" alt="EasyPaisa" />
              <img src="../../assets/Frame.png" alt="Frame" />
            </div>
          </div>

          <div class="col col-3">
            <h5 class="footer-title">Quick Links</h5>
            <ul class="footer-links">
              <li>
                <i class="link-icon"></i>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <i class="link-icon"></i>
                <router-link to="/products">Shop</router-link>
              </li>
              <li>
                <i class="link-icon"></i>
                <router-link to="/about">About Us</router-link>
              </li>
              <li>
                <i class="link-icon"></i>
                <router-link to="/contact">Contact Us</router-link>
              </li>
            </ul>
          </div>

          <div class="col col-3">
            <h5 class="footer-title">Contact info</h5>
            <p class="contact-info">pakclick@zontec.club</p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="copyright">
          Copyright © {{ currentYear }} | Powered by Data Network Solutions
        </div>
        <div class="back-to-top" @click="scrollToTop">
          <span class="arrow-up"></span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #f5f5f5;
  padding-top: 50px;

  &-widgets {
    padding-bottom: 30px;
  }

  &-logo {
    margin-bottom: 20px;

    img {
      height: 60px;
    }
  }

  &-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 25px;
    color: #333;
  }

  &-links {
    list-style: none;

    li {
      margin-bottom: 15px;
      display: flex;
      align-items: center;

      a {
        color: #666;
        transition: color 0.3s;

        &:hover {
          color: #e14272;
        }
      }

      .link-icon {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-right: 2px solid #e14272;
        border-top: 2px solid #e14272;
        transform: rotate(45deg);
        margin-right: 10px;
      }
    }
  }

  .contact-info {
    margin-bottom: 15px;
    color: #666;
  }

  .payment-methods {
    display: flex;
    margin-top: 20px;

    img {
      height: 30px;
      margin-right: 10px;
    }
  }

  &-bottom {
    background-color: #f0f0f0;
    padding: 20px 0;
    border-top: 1px solid #ddd;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .copyright {
      font-size: 0.9rem;
      color: #777;
    }

    .back-to-top {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #e14272;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #e61252;
      }

      .arrow-up {
        width: 10px;
        height: 10px;
        border-left: 2px solid #fff;
        border-top: 2px solid #fff;
        transform: rotate(45deg);
        margin-top: 4px;
      }
    }
  }

  @media (max-width: 768px) {
    .row {
      flex-direction: column;
    }

    .col {
      margin-bottom: 30px;
    }

    &-bottom {
      .container {
        flex-direction: column;
        text-align: center;
      }

      .copyright {
        margin-bottom: 15px;
      }
    }
  }
}
</style>
