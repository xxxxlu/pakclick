<template>
  <div class="contact-page">
    <div class="page-header" :style="headerStyle">
      <div class="container">
        <h1 class="page-title">CONTACT US</h1>
      </div>
    </div>

    <div class="container">
      <div class="contact-info-section">
        <div class="contact-info">
          <div class="info-item">
          </div>

          <div class="info-item">
            <div class="info-content">
              <h3 class="info-title">info@zontec.club</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-form-section">
        <h2 class="section-title">Send us a message</h2>

        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-row">
            <div class="form-group full-width">
              <input
                type="text"
                id="name"
                v-model="form.name"
                placeholder="Name"
                required
                class="form-control"
              >
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <input
                type="email"
                id="email"
                v-model="form.email"
                placeholder="Email"
                required
                class="form-control"
              >
            </div>

            <div class="form-group">
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                placeholder="Subject"
                required
                class="form-control"
              >
            </div>
          </div>

          <div class="form-row">
            <div class="form-group full-width">
              <textarea
                id="message"
                v-model="form.message"
                placeholder="Your message"
                required
                class="form-control"
                rows="6"
              ></textarea>
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn">Send the message</button>
          </div>
        </form>
      </div>

      <div class="gallery-section">
        <div class="gallery">
          <div class="gallery-item">
            <img src="https://fragrancebloom.com/wp-content/uploads/2020/07/store2-home-gallery-6.jpg" alt="Gallery 1">
          </div>
          <div class="gallery-item">
            <img src="https://fragrancebloom.com/wp-content/uploads/2020/07/store2-home-gallery-1.jpg" alt="Gallery 2">
          </div>
          <div class="gallery-item">
            <img src="https://fragrancebloom.com/wp-content/uploads/2020/07/store2-home-gallery-2.jpg" alt="Gallery 3">
          </div>
          <div class="gallery-item">
            <img src="https://fragrancebloom.com/wp-content/uploads/2020/07/store2-home-gallery-3.jpg" alt="Gallery 4">
          </div>
          <div class="gallery-item">
            <img src="https://fragrancebloom.com/wp-content/uploads/2020/07/store2-home-gallery-4.jpg" alt="Gallery 5">
          </div>
          <div class="gallery-item">
            <img src="https://fragrancebloom.com/wp-content/uploads/2020/07/store2-home-gallery-5.jpg" alt="Gallery 6">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      headerStyle: {
        backgroundColor: '#000',
        color: '#fff',
        padding: '50px 0'
      },
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // In a real app, this would send data to a backend
      alert('Thank you for your message! We will get back to you shortly.');

      // Reset form
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-page {
  margin-bottom: 60px;

  .page-header {
    margin-bottom: 40px;

    .page-title {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
    }
  }

  .contact-info-section {
    margin-bottom: 40px;

    .contact-info {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 40px;

      .info-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        .info-icon {
          width: 50px;
          height: 50px;
          margin-bottom: 15px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .info-title {
          font-size: 1.2rem;
          font-weight: 600;
        }
      }
    }
  }

  .contact-form-section {
    max-width: 800px;
    margin: 0 auto 50px;

    .section-title {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 30px;
    }

    .contact-form {
      .form-row {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;

        @media (max-width: 576px) {
          flex-direction: column;
          gap: 15px;
        }
      }

      .form-group {
        flex: 1;

        &.full-width {
          width: 100%;
        }
      }

      .form-control {
        width: 100%;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
        transition: border-color 0.3s;

        &:focus {
          outline: none;
          border-color: #e14272;
        }
      }

      textarea.form-control {
        resize: vertical;
        min-height: 150px;
      }

      .form-actions {
        text-align: center;
        margin-top: 30px;

        .btn {
          padding: 12px 30px;
          font-size: 1.1rem;
        }
      }
    }
  }

  .gallery-section {
    .gallery {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 15px;

      @media (max-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (max-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
      }

      .gallery-item {
        overflow: hidden;
        border-radius: 8px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;

          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }
  }
}
</style>
