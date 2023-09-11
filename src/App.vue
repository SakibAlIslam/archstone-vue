<script setup>
  import Navbar from "./components/Ui/Navbar/Navbar.vue";
  import Footer from "./components/Ui/Footer/Footer.vue";
  import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <Navbar />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>

</style>
