<template>
  <section class="product-details" v-if="product">
    <router-link to="/">
<img src="@/assets/img/arrow.png" />
    </router-link>
    <h1>{{ product.name }}</h1>
    <p>{{ product.desc }}</p>
  </section>
</template>

<script>
import { DbService } from "@/service/db-service";

export default {
  name: "product-details",

  data() {
    return {
      product: null,
    };
  },
  created() {
    this.loadProduct();
  },

  methods: {
    async loadProduct() {
      try {
        const { productId } = this.$route.params;
        this.product = await DbService.get("product", productId);
      } catch (err) {
        this.product = null;
      }
    },
  },
};
</script>

<style>
</style>



