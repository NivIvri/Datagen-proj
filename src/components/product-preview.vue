<template>
  <router-link class="product-preview" :to="`/product/${product._id}`">
    <div class="idx">{{ idx + 1 }}</div>
    <div :class="getClassName">
      <span>{{ product.name }}</span>
      <span>{{ product.price }} NIS</span>
      <div v-if="product.isDone" class="strike"></div>
    </div>
    <div class="img-container">
      <img
        @click.prevent="$emit('remove', product._id)"
        src="@/assets/img/trash.png"
      />
      <div>|</div>
      <img
        @click.prevent="$emit('onDone', product._id)"
        src="@/assets/img/pen.png"
      />
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Product-preview",
  props: {
    product: Object,
    idx: Number,
  },
  computed: {
    getClassName() {
      console.log(this.product.isDone, "");
      return this.product.isDone ? "info-product done" : "info-product";
    },
  },
};
</script>

<style>
</style>



