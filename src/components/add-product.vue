<template>
  <!--<main-layout>-->
  <form class="add" @submit.prevent="onSubmit">
    <img
      class="close"
      @click.prevent="$emit('close')"
      src="@/assets/img/cross.png"
    />
    <div class="inputs-container">
      <div class="input-container">
        <span>name</span>
        <input v-model="prodact.name" type="text" />
      </div>
      <div class="input-container">
        <span>price</span>
        <input v-model="prodact.price" min="0" type="number" />
      </div>
      <div class="input-container">
        <span>description</span>
        <textarea
          v-model="prodact.desc"
        ></textarea>
      </div>
    </div>
    <button type="submit"><img src="@/assets/img/send.svg" /></button>
  </form>
  <!--</main-layout>-->
</template>

<script>
import { DbService } from "@/service/db-service";

export default {
  name: "add-product",
  data() {
    return {
      prodact: {
        name: "",
        price: 0,
        desc: "",
        isDone: false,
      },
    };
  },
  methods: {
    async onSubmit() {
      this.prodact.price = +this.prodact.price;
      if (!this.prodact.name|| !this.prodact.desc) return
      await DbService.post("product", this.prodact);
      this.$emit("close");
      this.$emit("loadProduct");
    },
  },
};
</script>

<style>
</style>