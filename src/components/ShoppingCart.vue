<template>
  <div class="container shopping-cart">
    <table class="table table-bordered">
      <tbody>
        <tr v-for="(item, $index) in cartItems" :key="$index">
          <td class="td-item-img align-middle">
            <img :src="item.src" alt="" class="img-fluid" />
          </td>
          <td class="td-item-name align-middle">
            <h4>
              {{ item.name }}
            </h4>
            <p>{{ item.description }}</p>
            <h5>${{ item.price.toLocaleString('de-DE') }}</h5>
          </td>
          <td class="td-item-quantity align-middle">
            <button
              class="btn change-quantity-button mr-2"
              @click="reduceItemQuantity($index)"
            >
              -</button
            >{{ item.quantity
            }}<button
              class="btn change-quantity-button ml-2"
              @click="increaseItemQuantity(item)"
            >
              +
            </button>
            <hr />
            <button class="btn-delete" @click="removeFromShoppingCart($index)">
              Eliminar
            </button>
          </td>
          <td class="td-item-price align-middle">
            <h5>Total Producto</h5>
            <h4>
              ${{
                parseInt(
                  item.price * (1 - item.discount / 100) * item.quantity
                ).toLocaleString('de-DE')
              }}
            </h4>
          </td>
        </tr>
      </tbody>
    </table>

    <div>
      <h4 class="mt-5 text-right" v-if="$store.state.shoppingCart.length > 0">
        El total a pagar es: ${{
          parseInt($store.getters['TotalAmountShoppingCart']).toLocaleString(
            'de-DE'
          )
        }}
      </h4>
      <h4 class="mt-5" v-else>
        No tienes productos en tu carrito de compras actualmente
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCartComponent',
  computed: {
    cartItems() {
      return this.$store.getters.productsOnShoppingCart
    }
  },
  methods: {
    increaseItemQuantity(item) {
      console.log('submit increaseItemQuantity')
      this.$store.dispatch('addProductToShoppingCart', item)
    },

    reduceItemQuantity(index) {
      console.log('submit reduceItemQuantity')
      this.$store.dispatch('reduceProductQuantity', index)
    },

    removeFromShoppingCart(index) {
      this.$store.dispatch('removeProductFromShoppingCart', index)
    }
  }
}
</script>

<style>
.td-item-img {
  width: 20%;
}

.td-item-name {
  width: 30%;
}

.td-item-quantity {
  width: 25%;
  font-size: 20px;
}

.td-item-price {
  width: 25%;
}

.btn:hover {
  color: #ffbd59;
}

.change-quantity-button {
  border-radius: 25%;
  background-color: #1fa2ff;
  color: #ffffff;
  border-color: #d454c3;
  font-size: 16px;
}

.btn-delete {
  background-color: transparent;
  border-color: transparent;
  font-size: 14px;
  color: #5a5a5a;
  text-decoration: underline;
}

.btn-delete:hover {
  color: #d454c3;
}
</style>
