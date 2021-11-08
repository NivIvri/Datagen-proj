<template>
  <main-layout>
    <router-view></router-view>
  </main-layout>
</template>

<script>
import MainLayout from "./components/main-layout.vue";

export default {
  components: {
    MainLayout,
  },
};
</script>
