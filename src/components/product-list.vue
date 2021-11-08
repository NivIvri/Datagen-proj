<template>
  <section class="product-list-container" v-if="products">
    <div 
      v-for="(product, idx) in products"
      :key="idx"
    >
      <product-preview
        @onDone="$emit('onDone', $event)"
        @remove="$emit('remove', $event)"
        :product="product"
        :idx="idx"
      />
    </div>
    <div class="sum-price flex">
      <div>Total :</div>
      <div>{{ sum }} NIS</div>
    </div>
  </section>
</template>

<script>
import productPreview from "@/components/product-preview";
export default {
  name: "product-list",
  props: {
    products: Array,
  },

  components: {
    productPreview,
  },
  computed: {
    sum() {
      console.log(this.products,'this.products');
      return this.products.reduce((accumulator, product) => {
        return accumulator + product.price;
      }, 0);
    },
  },
};
</script>

<style>
</style>

