<script setup>
import Footer from "./footer.vue";
import Header from "./Header.vue";
import MainSection from "./MainSection.vue";
</script>

<template>
  <Header />
  <div
    class="bg-[url('./../assets/images/heroBg.jpg')] bg-cover bg-center w-full h-[478px] flex items-center justify-center"
  >
    <div class="text-center animate__animated animate__fadeInUp">
      <h3 class="font-bold text-4xl mb-4">Cultivez Vous</h3>
      <p class="text-xl">
        Avec une large selection de livres unique et
        <span class="text-white"> authentique</span>.
      </p>
    </div>
  </div>
  <MainSection class="pt-16" />
  <Footer />
</template>
