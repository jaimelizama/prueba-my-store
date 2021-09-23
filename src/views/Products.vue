<template>
  <div>
    <div class="container">
      <input
        type="text"
        placeholder="Escriba el nombre del producto"
        style="width: 500px"
        class="search-product my-4"
        :value="$store.state.search"
        @input="$store.dispatch('setSearch', $event.target.value)"
      />
    </div>
    <!-- <button :value="$store.state.search">Ofertas</button> -->
    <div>
      <div v-if="$store.getters.searchedProducts.length > 0">
        <ProductList
          v-if="$store.getters.searchedProducts.length > 0"
          :products="$store.getters.searchedProducts"
        ></ProductList>
      </div>
      <div v-else>
        <div class="product-not-found my-5">Ups! Nada por aquí</div>
        <div>
          <img
            src="../assets/pulp-fiction-john-travolta.gif"
            alt=""
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue'
export default {
  name: 'Products',
  components: { ProductList }
}
</script>

<style scoped>
.container {
  margin-top: 75px;
}

.product-not-found {
  font-size: 24px;
  font-weight: bold;
}
</style>
