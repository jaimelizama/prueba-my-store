import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
    shoppingCart: [],
    products: [
      {
        name: 'Los Angeles Lakers',
        description: 'New Era Candy Cane 59FIFTY Fitted Hat - Pink',
        category: 'NBA',
        color: 'Rosado',
        clearance: true,
        discount: 10,
        price: 19990,
        src: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4296000/altimages/ff_4296506-83bc36d676d2738d17bbalt3_full.jpg&w=900'
      },
      {
        name: 'Space Jam',
        description:
          'A New Legacy New Era Tune Squad 59FIFTY Fitted Hat - Blue',
        category: 'Populares',
        color: 'Celeste',
        clearance: true,
        discount: 15,
        price: 24990,
        src: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4308000/altimages/ff_4308716-066049eebab76a831dfdalt1_full.jpg&w=900'
      },
      {
        name: 'Los Angeles Dodgers',
        description: 'New Era 59FIFTY Fitted Hat - Black',
        category: 'MLB',
        color: 'Negro',
        clearance: false,
        discount: 0,
        price: 24990,
        src: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_2976000/altimages/ff_2976714alt1_full.jpg&w=900'
      },
      {
        name: 'Philadelphia Eagles',
        description:
          'New Era Throwback 9FIFTY Adjustable Snapback Hat - Kelly Green',
        category: 'MLB',
        color: 'Verde',
        clearance: false,
        discount: 0,
        price: 14990,
        src: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_3183000/altimages/ff_3183014-6d608a164e3d5e37c911alt1_full.jpg&w=900'
      },
      {
        name: 'San Francisco 49ers',
        description: 'ew Era City Transit 59FIFTY Fitted Hat - Scarlet',
        category: 'MLB',
        color: 'Rojo',
        clearance: true,
        discount: 30,
        price: 19990,
        src: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4243000/altimages/ff_4243011-c2fb07e8de198ab981c9alt1_full.jpg&w=900'
      },
      {
        name: 'New York Red Bulls',
        description:
          'adidas Dassler Flat Brim Two-Tone Snapback Adjustable Hat - Navy/Red',
        category: 'Populares',
        color: 'Azul',
        clearance: false,
        discount: 0,
        price: 24990,
        src: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_2747000/altimages/ff_2747701alt1_full.jpg&w=900'
      },
      {
        name: 'Charlotte Hornets',
        description:
          'New Era Hardwood Classics Collection 59FIFTY Fitted Hat - White',
        category: 'NBA',
        color: 'Blanco',
        clearance: false,
        discount: 0,
        price: 9990,
        src: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4296000/altimages/ff_4296542-15fa7b0f2d93afb6345ealt1_full.jpg&w=900'
      },
      {
        name: 'New York Yankees',
        description: 'New Era Multi-Logo 59FIFTY Fitted Hat - Navy',
        category: 'MLB',
        color: 'Negro',
        clearance: false,
        discount: 0,
        price: 14990,
        src: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_2659000/altimages/ff_2659252alt1_full.jpg&w=900'
      },
      {
        name: 'Los Angeles Lakers',
        description: 'Mitchell & Ness Rainbow Sherbert Snapback Hat - Pink',
        category: 'NBA',
        color: 'Rosado',
        clearance: true,
        discount: 50,
        price: 24990,
        src: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4442000/altimages/ff_4442299-1e6ae67096987ca8ffcfalt1_full.jpg&w=900'
      },
      {
        name: 'Boston Celtics',
        description: 'New Era City Transit 59FIFTY Fitted Hat - Kelly Green',
        category: 'NBA',
        color: 'Verde',
        clearance: true,
        discount: 25,
        price: 19990,
        src: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4249000/altimages/ff_4249688-19c32706d4e8b024ed40alt1_full.jpg&w=900'
      },
      {
        name: 'Nike Skateboard',
        description: 'For skaters',
        category: 'Populares',
        color: 'Celeste',
        clearance: false,
        discount: 0,
        price: 24990,
        src: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4179000/altimages/ff_4179599-1557cfb5de75146cc584alt1_full.jpg&w=900'
      },
      {
        name: 'Cookies Solid',
        description: 'C-Bite Snapback Hat - White',
        category: 'Populares',
        color: 'Blanco',
        clearance: false,
        discount: 0,
        price: 19990,
        src: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4196000/altimages/ff_4196927-e036c62bd0f458cdda75alt1_full.jpg&w=900'
      },
      {
        name: 'The Amazing Spider-Man',
        description: '9FIFTY Adjustable Snapback Hat - Black',
        category: 'Populares',
        color: 'Negro',
        clearance: true,
        discount: 1,
        price: 14990,
        src: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_3722000/altimages/ff_3722618-b232d110ac5467a52cb4alt1_full.jpg&w=900'
      },
      {
        name: 'St. Louis Cardinals',
        description:
          'New Era On-Field Authentic Collection 59FIFTY Fitted Hat - Red',
        category: 'MLB',
        color: 'Rojo',
        clearance: false,
        discount: 0,
        price: 14990,
        src: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_3739000/altimages/ff_3739115-69ab4363479a86d06712alt1_full.jpg&w=900'
      },
      {
        name: 'Quiksilver',
        description: 'Isle Pile Adjustable Hat - White',
        category: 'Populares',
        color: 'Blanco',
        clearance: false,
        discount: 0,
        price: 24990,
        src: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4116000/altimages/ff_4116837-345ca20199b67fcfe05falt1_full.jpg&w=900'
      }
    ]
  },
  getters: {
    searchedProducts(state) {
      if (state.search === '') {
        return state.products
      } else {
        return state.products.filter(
          (product) =>
            product.name.toLowerCase().includes(state.search.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(state.search.toLowerCase()) ||
            product.color.toLowerCase().includes(state.search.toLowerCase())
        )
      }
    },

    searchProductByClearance(state) {
      return state.products.filter((product) => product.clearance === true)
    },

    productsOnShoppingCart(state) {
      return state.shoppingCart.map((item) => {
        const product = state.products.find(
          (product) => product.name === item.name
        )
        return {
          name: product.name,
          description: product.description,
          price: product.price,
          discount: product.discount,
          src: product.src,
          quantity: item.quantity
        }
      })
    },

    TotalAmountShoppingCart(state) {
      return state.shoppingCart.reduce((accumulator, item) => {
        accumulator =
          accumulator + item.price * (1 - item.discount / 100) * item.quantity
        return accumulator
      }, 0)
    },
    totalQuantityInShoppingCart(state) {
      return state.shoppingCart.reduce((accumulator, item) => {
        accumulator = accumulator + item.quantity
        return accumulator
      }, 0)
    }
  },
  mutations: {
    SET_SEARCH(state, newSearch) {
      state.search = newSearch
    },

    ADD_PRODUCT_TO_PRODUCT_LIST(state, newProduct) {
      state.products.push(newProduct)
    },

    ADD_PRODUCT_TO_SHOPPING_CART(state, product) {
      state.shoppingCart.push({ ...product, quantity: 1 })
    },

    INCREMENT_PRODUCT_QUANTITY(state, productAlreadyInShoppinCart) {
      productAlreadyInShoppinCart.quantity++
    },

    REDUCE_PRODUCT_QUANTITY(state, index) {
      state.shoppingCart[index].quantity--
    },

    REMOVE_PRODUCT_FROM_SHOPPING_CART(state, index) {
      state.shoppingCart.splice(index, 1)
    }
  },
  actions: {
    setSearch(context, newSearch) {
      context.commit('SET_SEARCH', newSearch)
    },

    addProductToProductList(context, newProduct) {
      context.commit('ADD_PRODUCT_TO_PRODUCT_LIST', { ...newProduct })
    },

    addProductToShoppingCart(context, product) {
      const productAlreadyInShoppinCart = context.state.shoppingCart.find(
        (productAlreadyInShoppinCart) =>
          (product.name && product.description) ===
          (productAlreadyInShoppinCart.name &&
            productAlreadyInShoppinCart.description)
      )

      if (productAlreadyInShoppinCart) {
        context.commit(
          'INCREMENT_PRODUCT_QUANTITY',
          productAlreadyInShoppinCart
        )
      } else {
        context.commit('ADD_PRODUCT_TO_SHOPPING_CART', product)
      }
    },

    reduceProductQuantity(context, index) {
      if (context.state.shoppingCart[index].quantity > 1) {
        context.commit('REDUCE_PRODUCT_QUANTITY', index)
      } else {
        context.commit('REMOVE_PRODUCT_FROM_SHOPPING_CART', index)
      }
    },
    removeProductFromShoppingCart(context, index) {
      const productIndex = context.state.shoppingCart[index]
      context.commit('REMOVE_PRODUCT_FROM_SHOPPING_CART', productIndex)
    }

    /**
     * Forma Similar a AddProductToShoppingCart
     */
    // removeProductFromShoppingCart(context, shoppingCart) {
    //   const productIndex = context.state.shoppingCart.find(
    //     (productIndex) =>
    //       (shoppingCart.name && shoppingCart.description) ===
    //       (productIndex.name && productIndex.description)
    //   )
    //   context.commit('REMOVE_PRODUCT_FROM_SHOPPING_CART', productIndex)
    // }
  },
  modules: {}
})
