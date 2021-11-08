<template>
  <section class="home" v-if="products">
    <h1>Shopping cart</h1>
    <product-list
      :products="products"
      @remove="removeProduct"
      @onDone="onToggleTasck"
    />
    <div  @click="toggleAddProduct" class="add-product">
      <span>+</span>
      <span > Add Product</span>
    </div>
      <add-product v-if="onAddProduct" @loadProduct="loadProduct" @close="toggleAddProduct"></add-product>
  </section>
</template>

<script>
import { DbService } from "@/service/db-service";
import productList from "@/components/product-list";
import addProduct from "@/components/add-product";
import AddProduct from "../components/add-product.vue";

export default {
  name: "Home",

  data() {
    return {
      onAddProduct: false,
      products: [],
    };
  },
  async created() {
    this.loadProduct();
  },
  methods: {
    async loadProduct() {
      this.products = await DbService.query("product");
    },
    async removeProduct(productsId) {
      await DbService.remove("product", productsId);
      this.products = this.products.filter(
        (product) => product._id !== productsId
      );
    },
    onToggleTasck(productsId) {
      let product = this.products.find((product) => product._id === productsId);
      product.isDone = !product.isDone;
      DbService.put("product", product);
    },
    toggleAddProduct() {
      this.onAddProduct = !this.onAddProduct;
    },
  },

  components: {
    productList,
    addProduct,
    AddProduct,
  },
};
</script>

<style>
</style>