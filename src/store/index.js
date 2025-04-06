import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        "id": 1,
        "name": "Benetton Cold Perfume for Men",
        "price": 4000.00,
        "image": "https://ext.same-assets.com/3253698089/2421300450.webp",
        "description": "A crisp, invigorating scent designed for the modern man who embraces freshness as a signature style. This fragrance captures the essence of cool confidence with its clean, aquatic aroma.",
        "category": "Men"
      },
      {
        "id": 2,
        "name": "BOSS The Scent Elixir Parfum Intense for Men",
        "price": 28000.00,
        "image": "https://ext.same-assets.com/925825801/2248861410.webp",
        "description": "An intense and captivating fragrance with bold notes that create a powerful, masculine scent experience.",
        "category": "Men"
      },
      {
        "id": 3,
        "name": "Burberry Her Blossom Eau de Toilette",
        "price": 25200.00,
        "image": "https://ext.same-assets.com/925825801/481030394.webp",
        "description": "A luminous springtime floral-gourmand that captures London's first blooms through sparkling citrus, tender blossoms, and creamy woods.",
        "category": "Women"
      },
      {
        "id": 4,
        "name": "Burberry Hero Eau de Parfum",
        "price": 36400.00,
        "image": "https://ext.same-assets.com/925825801/1015692377.webp",
        "description": "A bold and modern fragrance that embodies strength and masculinity with woody and aromatic notes.",
        "category": "Men"
      },
      {
        "id": 5,
        "name": "Burberry Touch Eau de Toilette",
        "price": 21000.00,
        "image": "https://ext.same-assets.com/925825801/3144114744.webp",
        "description": "A refined and elegant scent with a perfect balance of freshness and warmth for the sophisticated man.",
        "category": "Men"
      },
      {
        "id": 6,
        "name": "CK One Essence Parfum Intense",
        "price": 24000.00,
        "image": "https://ext.same-assets.com/925825801/4084836639.webp",
        "description": "An intensified version of the iconic CK One, offering a deeper and more powerful unisex fragrance experience.",
        "category": "Unisex"
      },
      {
        "id": 7,
        "name": "Dolce Violet Eau de Toilette",
        "price": 16800.00,
        "image": "https://ext.same-assets.com/925825801/2794853534.webp",
        "description": "A delicate and feminine fragrance featuring vibrant violet notes complemented by soft florals and a powdery finish.",
        "category": "Women"
      },
      {
        "id": 8,
        "name": "Dolce&Gabbana Pour Homme Intenso Eau de Parfum",
        "price": 26600.00,
        "image": "https://ext.same-assets.com/925825801/381130737.webp",
        "description": "An intense aromatic-woody fragrance that exudes warmth and sophistication with rich notes of tobacco and spices.",
        "category": "Men"
      },
      {
        "id": 9,
        "name": "Dolce&Gabbana The One for Men Eau de Parfum",
        "price": 30800.00,
        "image": "https://ext.same-assets.com/925825801/339884587.webp",
        "description": "A sophisticated oriental-spicy composition that redefines masculine elegance through its intoxicating blend of citrus, herbs, and precious woods.",
        "category": "Men"
      },
      {
        "id": 10,
        "name": "Dolce&Gabbana The One for Men Gold Eau de Parfum Intense",
        "price": 35000.00,
        "image": "https://ext.same-assets.com/925825801/345677501.webp",
        "description": "A luxurious and opulent interpretation of the classic The One, enhanced with rich golden notes and intensified longevity.",
        "category": "Men"
      },
      {
        "id": 11,
        "name": "Dolce&Gabbana Velvet Zafferano Eau de Parfum",
        "price": 84000.00,
        "image": "https://ext.same-assets.com/925825801/878130750.webp",
        "description": "An exclusive and luxurious fragrance featuring the rare and precious saffron note, blended with oriental spices and woods.",
        "category": "Unisex"
      },
      {
        "id": 12,
        "name": "Eternity Aromatic Essence For Men Gift Set",
        "price": 33800.00,
        "image": "https://ext.same-assets.com/925825801/2581313976.webp",
        "description": "A premium gift set featuring the aromatic and fresh Eternity Essence fragrance along with complementary grooming products.",
        "category": "Men"
      },
      {
        "id": 13,
        "name": "Eternity For Men Amber Essence Parfum Intense",
        "price": 41600.00,
        "image": "https://ext.same-assets.com/925825801/3614717357.webp",
        "description": "A rich and intense variation of the classic Eternity, featuring warm amber notes and enhanced longevity for a deeper sensory experience.",
        "category": "Men"
      },
      {
        "id": 14,
        "name": "Ferrari Scuderia Black Eau de Toilette for Men",
        "price": 8500.00,
        "image": "https://ext.same-assets.com/925825801/2428337642.webp",
        "description": "A dynamic and energetic fragrance inspired by the thrill of racing, featuring bold citrus and spicy notes with a masculine base.",
        "category": "Men"
      },
      {
        "id": 15,
        "name": "Ferrari Scuderia Red Eau de Toilette for Men",
        "price": 8537.00,
        "image": "https://ext.same-assets.com/925825801/533364041.webp",
        "description": "A passionate and invigorating scent that captures the spirit of Ferrari with vibrant red fruits, energizing spices, and woody base notes.",
        "category": "Men"
      },
      {
        "id": 16,
        "name": "Fragrance Concept",
        "price": 30800.00,
        "image": "https://ext.same-assets.com/925825801/2718209947.webp",
        "description": "An innovative fragrance concept that offers a unique and contemporary olfactory experience with exclusive and rare ingredients.",
        "category": "Unisex"
      },
      {
        "id": 17,
        "name": "Gucci Guilty Pour Homme Eau de Parfum",
        "price": 36400.00,
        "image": "https://ext.same-assets.com/925825801/1834476894.webp",
        "description": "A provocative and bold fragrance that combines the richness of rose with unexpected notes of chili pepper and vinegar for a contemporary twist.",
        "category": "Men"
      },
      {
        "id": 18,
        "name": "HUGO Man Eau de Toilette Gift Set",
        "price": 18200.00,
        "image": "https://ext.same-assets.com/925825801/3714931449.webp",
        "description": "A refreshing and energetic fragrance set for the modern, active man, featuring the iconic HUGO Man scent and complementary products.",
        "category": "Men"
      },
      {
        "id": 19,
        "name": "Jimmy Choo Aqua Man Eau de Toilette",
        "price": 16800.00,
        "image": "https://ext.same-assets.com/925825801/1977824038.webp",
        "description": "A fresh and invigorating aquatic fragrance for men that captures the essence of cool water with marine accords and crisp citrus notes.",
        "category": "Men"
      },
      {
        "id": 20,
        "name": "Jimmy Choo Man Blue Eau de Toilette (100ml)",
        "price": 22400.00,
        "image": "https://ext.same-assets.com/925825801/14172880.webp",
        "description": "A modern and sophisticated fragrance that offers a cool, aromatic blend with leather accords and a fresh aquatic twist.",
        "category": "Men"
      },
      {
        "id": 21,
        "name": "Jimmy Choo Man Extreme Eau de Parfum",
        "price": 23800.00,
        "image": "https://ext.same-assets.com/925825801/3549891082.webp",
        "description": "An intensified version of the classic Jimmy Choo Man, featuring stronger notes of pineapple leaf, lavender, and patchouli for a bolder statement.",
        "category": "Men"
      },
      {
        "id": 22,
        "name": "Lattafa Asad for Men Eau de Parfum (EDP)",
        "price": 6000.00,
        "image": "https://ext.same-assets.com/925825801/2120821042.webp",
        "description": "An exotic and powerful oriental fragrance featuring rich spices, warm amber, and deep woods for a commanding presence.",
        "category": "Men"
      },
      {
        "id": 23,
        "name": "Lattafa Fakhar for Men Eau de Parfum (EDP)",
        "price": 5539.00,
        "image": "https://ext.same-assets.com/925825801/814475583.webp",
        "description": "A bold and distinctive fragrance with a blend of aromatic spices, precious woods, and rich amber for the confident man.",
        "category": "Men"
      },
      {
        "id": 24,
        "name": "Lattafa Khamrah Eau de Parfum (EDP)",
        "price": 6000.00,
        "image": "https://ext.same-assets.com/925825801/235053273.webp",
        "description": "A luxurious and intoxicating oriental fragrance featuring saffron, rose, and oud with a rich, sweet vanilla and amber base.",
        "category": "Unisex"
      },
      {
        "id": 25,
        "name": "Magia Noire Eau de Parfum",
        "price": 17000.00,
        "image": "https://m.media-amazon.com/images/I/41ozE2GT5fL._AC_UL640_FMwebp_QL65_.jpg",
        "description": "A mysterious and enchanting fragrance that weaves dark florals with spicy notes and a rich, sensual base for an unforgettable trail.",
        "category": "Women"
      },
      {
        "id": 26,
        "name": "Mr. Burberry Eau de Parfum",
        "price": 32000.00,
        "image": "https://m.media-amazon.com/images/I/61lm8pNC1vL._AC_UL640_FMwebp_QL65_.jpg",
        "description": "A sophisticated and warm oriental-woody fragrance inspired by London's evening atmosphere with rich amber and spicy notes.",
        "category": "Men"
      },
      {
        "id": 27,
        "name": "Oud Ruler - Eau de Parfum",
        "price": 28000.00,
        "image": "https://m.media-amazon.com/images/I/41lMvIPTJiL._AC_UL640_FMwebp_QL65_.jpg",
        "description": "A majestic and powerful fragrance featuring the precious ingredient of oud, complemented by exotic spices and rich resins.",
        "category": "Unisex"
      },
      {
        "id": 28,
        "name": "Q by Dolce&Gabbana Eau de Parfum Rollerball",
        "price": 18500.00,
        "image": "https://m.media-amazon.com/images/I/213jDGQksTL._SX342_SY445_QL70_FMwebp_.jpg",
        "description": "A convenient and elegant rollerball format of the sophisticated Q fragrance, perfect for on-the-go application.",
        "category": "Women"
      },
      {
        "id": 29,
        "name": "The One Gold Eau de Parfum Intense",
        "price": 34200.00,
        "image": "https://m.media-amazon.com/images/I/61hCnUqZ22L._AC_UL640_FMwebp_QL65_.jpg",
        "description": "A luxurious and opulent interpretation of The One, featuring enhanced woody notes and amber for a more intense and long-lasting experience.",
        "category": "Men"
      },
      {
        "id": 30,
        "name": "The Queen Perfume",
        "price": 42000.00,
        "image": "https://m.media-amazon.com/images/I/617UxLxKKnL._AC_UL640_FMwebp_QL65_.jpg",
        "description": "A regal and sophisticated fragrance designed for the discerning woman, featuring precious florals, rare spices, and noble woods.",
        "category": "Women"
      },
      {
        "id": 31,
        "name": "Versace Eros Eau de Parfum",
        "price": 29800.00,
        "image": "https://m.media-amazon.com/images/I/51MPmEv78HL._AC_UL640_FMwebp_QL65_.jpg",
        "description": "A powerful and passionate fragrance that embodies sensuality with its blend of mint, green apple, vanilla, and woody notes.",
        "category": "Men"
      }
    ]
    ,
    cart: [],
    checkoutInfo: {
      personalInfo: null,
      shippingAddress: null,
      paymentMethod: null
    }
  },
  mutations: {
    ADD_TO_CART(state, { product, quantity }) {
      const existingProduct = state.cart.find(item => item.product.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.cart.push({ product, quantity });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.product.id !== productId);
    },
    UPDATE_CART_QUANTITY(state, { productId, quantity }) {
      const item = state.cart.find(item => item.product.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    CLEAR_CART(state) {
      state.cart = [];
    },
    SET_PERSONAL_INFO(state, info) {
      state.checkoutInfo.personalInfo = info;
    },
    SET_SHIPPING_ADDRESS(state, address) {
      state.checkoutInfo.shippingAddress = address;
    },
    SET_PAYMENT_METHOD(state, method) {
      state.checkoutInfo.paymentMethod = method;
    },
    RESET_CHECKOUT_INFO(state) {
      state.checkoutInfo = {
        personalInfo: null,
        shippingAddress: null,
        paymentMethod: null
      };
    }
  },
  actions: {
    addToCart({ commit }, { product, quantity = 1 }) {
      commit('ADD_TO_CART', { product, quantity });
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    },
    updateCartQuantity({ commit }, { productId, quantity }) {
      commit('UPDATE_CART_QUANTITY', { productId, quantity });
    },
    clearCart({ commit }) {
      commit('CLEAR_CART');
    },
    savePersonalInfo({ commit }, info) {
      commit('SET_PERSONAL_INFO', info);
    },
    saveShippingAddress({ commit }, address) {
      commit('SET_SHIPPING_ADDRESS', address);
    },
    savePaymentMethod({ commit }, method) {
      commit('SET_PAYMENT_METHOD', method);
    },
    completeCheckout({ commit }) {
      commit('CLEAR_CART');
      commit('RESET_CHECKOUT_INFO');
    }
  },
  getters: {
    getProducts: state => state.products,
    getProductById: state => id => {
      return state.products.find(product => product.id === parseInt(id));
    },
    getCartItems: state => state.cart,
    getCartTotal: state => {
      return state.cart.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
      }, 0);
    },
    getCartItemCount: state => {
      return state.cart.reduce((count, item) => count + item.quantity, 0);
    },
    getCheckoutInfo: state => state.checkoutInfo
  }
});
