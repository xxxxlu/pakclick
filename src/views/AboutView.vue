<template>
  <div class="about-page">
    <div class="page-header" :style="headerStyle">
      <div class="container">
        <h1 class="page-title">ABOUT</h1>
      </div>
    </div>

    <div class="container">
      <div class="about-section">
        <div class="row">
          <div class="col col-6">
            <div class="about-content">
              <h2 class="section-title">About Fragrance Bloom</h2>
              <p class="section-text">
                Welcome to Fragrance Bloom, your ultimate destination for premium perfumes and fragrances. Founded with a passion for scents that captivate and enhance personal style, we have been delivering exceptional fragrance experiences since 2015.
              </p>
              <p class="section-text">
                At Fragrance Bloom, we believe that the right scent can transform your mood, evoke memories, and make a lasting impression. Our carefully curated collection includes top brands and rare finds, ensuring that every customer finds their perfect signature scent.
              </p>
              <p class="section-text">
                What sets us apart is our commitment to authenticity, quality, and customer satisfaction. Every product in our inventory is genuine, sourced directly from official distributors or manufacturers. We take pride in offering competitive prices without compromising on quality.
              </p>
            </div>
          </div>
          <div class="col col-6">
            <div class="about-image">
              <img src="https://fragrancebloom.com/wp-content/uploads/2025/03/mfk-baccarat-rouge-540-edp-key-visual-square-1670372092-scaled.jpg" alt="Fragrance Bloom Shop">
            </div>
          </div>
        </div>
      </div>

      <div class="mission-section">
        <div class="row">
          <div class="col col-6">
            <div class="mission-image">
              <img src="https://fragrancebloom.com/wp-content/uploads/2020/07/store2-home-counter-bg.jpg" alt="Our Mission">
            </div>
          </div>
          <div class="col col-6">
            <div class="mission-content">
              <h2 class="section-title">Our Mission</h2>
              <p class="section-text">
                Our mission is to help customers discover and experience the transformative power of premium fragrances. We strive to make luxury accessible by offering a diverse range of perfumes for every preference, occasion, and budget.
              </p>
              <p class="section-text">
                We are committed to providing an exceptional shopping experience with personalized recommendations, detailed product information, and prompt customer service. Our team of fragrance enthusiasts is dedicated to helping you navigate the complex world of scents.
              </p>
              <p class="section-text">
                At Fragrance Bloom, we also prioritize sustainability in our operations. From eco-friendly packaging to partnering with brands that value ethical sourcing, we are constantly working to minimize our environmental impact while maximizing your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="values-section">
        <h2 class="section-title text-center">Our Values</h2>
        <div class="values-grid">
          <div class="value-item">
            <div class="value-icon">
              <img src="https://ext.same-assets.com/3253698089/1609695495.png" alt="Authenticity" />
            </div>
            <h3 class="value-title">Authenticity</h3>
            <p class="value-desc">We guarantee 100% authentic products, directly sourced from official channels.</p>
          </div>

          <div class="value-item">
            <div class="value-icon">
              <img src="https://ext.same-assets.com/3253698089/3989116053.png" alt="Quality" />
            </div>
            <h3 class="value-title">Quality</h3>
            <p class="value-desc">We never compromise on quality, ensuring every product meets the highest standards.</p>
          </div>

          <div class="value-item">
            <div class="value-icon">
              <img src="https://ext.same-assets.com/3253698089/3217330399.png" alt="Customer Service" />
            </div>
            <h3 class="value-title">Customer Service</h3>
            <p class="value-desc">We prioritize customer satisfaction with attentive and responsive service.</p>
          </div>

          <div class="value-item">
            <div class="value-icon">
              <img src="https://ext.same-assets.com/3253698089/4133722438.png" alt="Integrity" />
            </div>
            <h3 class="value-title">Integrity</h3>
            <p class="value-desc">We operate with transparency and honesty in all our business practices.</p>
          </div>
        </div>
      </div>

      <div class="team-section">
        <h2 class="section-title text-center">Our Team</h2>
        <p class="section-subtitle text-center">Meet the passionate fragrance enthusiasts behind Fragrance Bloom</p>

        <div class="team-grid">
          <div class="team-member">
            <div class="member-image">
              <img src="https://fragrancebloom.com/wp-content/uploads/2020/07/store2-home-gallery-3.jpg" alt="Team Member">
            </div>
            <h3 class="member-name">Sarah Johnson</h3>
            <p class="member-position">Founder & CEO</p>
          </div>

          <div class="team-member">
            <div class="member-image">
              <img src="https://fragrancebloom.com/wp-content/uploads/2020/07/store2-home-gallery-5.jpg" alt="Team Member">
            </div>
            <h3 class="member-name">Michael Chen</h3>
            <p class="member-position">Fragrance Specialist</p>
          </div>

          <div class="team-member">
            <div class="member-image">
              <img src="https://fragrancebloom.com/wp-content/uploads/2020/07/store2-home-gallery-1.jpg" alt="Team Member">
            </div>
            <h3 class="member-name">Aisha Khan</h3>
            <p class="member-position">Customer Experience Manager</p>
          </div>

          <div class="team-member">
            <div class="member-image">
              <img src="https://fragrancebloom.com/wp-content/uploads/2020/07/store2-home-gallery-6.jpg" alt="Team Member">
            </div>
            <h3 class="member-name">David Miller</h3>
            <p class="member-position">Supply Chain Manager</p>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <div class="cta-content">
          <h2 class="cta-title">Elevate Your Fragrance Journey</h2>
          <p class="cta-text">Discover your perfect scent from our curated collection of premium fragrances.</p>
          <router-link to="/products" class="btn cta-btn">Shop Now</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      headerStyle: {
        backgroundColor: '#000',
        color: '#fff',
        padding: '50px 0'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.about-page {
  margin-bottom: 60px;

  .page-header {
    margin-bottom: 60px;

    .page-title {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
    }
  }

  .about-section, .mission-section {
    margin-bottom: 80px;

    .about-content, .mission-content {
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;

      @media (max-width: 768px) {
        padding: 0;
        margin-bottom: 30px;
      }
    }

    .about-image, .mission-image {
      img {
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }
    }

    .section-title {
      font-size: 2rem;
      margin-bottom: 20px;
      color: #333;
    }

    .section-text {
      margin-bottom: 20px;
      line-height: 1.7;
      color: #666;

      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (max-width: 768px) {
      .row {
        flex-direction: column;
      }

      .mission-section .row {
        flex-direction: column-reverse;
      }
    }
  }

  .values-section {
    margin-bottom: 80px;
    padding: 60px 0;
    background-color: #f9f9f9;

    .section-title {
      margin-bottom: 50px;
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;

      @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 576px) {
        grid-template-columns: 1fr;
      }
    }

    .value-item {
      text-align: center;
      padding: 20px;

      .value-icon {
        width: 70px;
        height: 70px;
        margin: 0 auto 20px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .value-title {
        font-size: 1.3rem;
        margin-bottom: 15px;
        color: #333;
      }

      .value-desc {
        color: #666;
        line-height: 1.6;
      }
    }
  }

  .team-section {
    margin-bottom: 80px;

    .section-title {
      font-size: 2rem;
      margin-bottom: 10px;
    }

    .section-subtitle {
      margin-bottom: 50px;
      color: #666;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;

      @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 576px) {
        grid-template-columns: 1fr;
      }
    }

    .team-member {
      text-align: center;

      .member-image {
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 20px;

        img {
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
          transition: transform 0.5s;

          &:hover {
            transform: scale(1.05);
          }
        }
      }

      .member-name {
        font-size: 1.2rem;
        margin-bottom: 5px;
        color: #333;
      }

      .member-position {
        color: #e14272;
        font-weight: 600;
      }
    }
  }

  .cta-section {
    background-color: #e14272;
    color: white;
    padding: 60px 20px;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 60px;

    .cta-title {
      font-size: 2rem;
      margin-bottom: 15px;
    }

    .cta-text {
      font-size: 1.1rem;
      margin-bottom: 30px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-btn {
      background-color: white;
      color: #e14272;
      padding: 12px 30px;
      font-size: 1.1rem;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .text-center {
    text-align: center;
  }
}
</style>
