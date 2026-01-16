<script setup>
import LocationIcon from "./icons/locationIcon.vue";
</script>
<template>
  <div class="flex items-center mx-16">
    <img
      src="./../assets/images/facebookFollow.png"
      alt="Suvire"
      class="h-48 w-48"
    />
    <div class="">
      "Vous aimez le contenu qui vous inspire et vous simplifie la vie ?
      Rejoignez notre communauté pour des pépites quotidiennes ! ❤️👉 Bootin"
    </div>
  </div>
  <hr class="text-gray-300" />
  <section class="flex p-4 pt-8 gap-4 justify-around">
    <div class="flex flex-col gap-4">
      <div>
        <h4 class="font-bold">Adresse</h4>
        <p class="text-gray-500 flex gap-2 items-center">
          3 route Strasbourg <br />
          67500 Haguenau <LocationIcon class="size-6" />
        </p>
      </div>
      <div>
        <h4 class="font-bold">Téléphone</h4>
        <p class="text-red-500 font-semibold">+2290196591522</p>
      </div>
    </div>
    <div>
      <h4 class="font-bold">Navigation</h4>
      <p class="hover:underline text-gray-500">
        <RouterLink to="/">Home</RouterLink>
      </p>
      <p class="hover:underline text-gray-500">
        <RouterLink to="/shop">Shop</RouterLink>
      </p>
      <p class="hover:underline text-gray-500">
        <RouterLink to="/blog">Blog</RouterLink>
      </p>
      <p class="hover:underline text-gray-500">
        <RouterLink to="/author">Author</RouterLink>
      </p>
      <p class="hover:underline text-gray-500">
        <RouterLink to="/">Cart</RouterLink>
      </p>
      <p class="hover:underline text-gray-500">
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </p>
    </div>
    <div>
      <h4 class="font-bold">Informations</h4>
      <p class="hover:underline text-gray-500">
        <RouterLink>Legal notices</RouterLink>
      </p>
      <p class="hover:underline text-gray-500">
        <RouterLink>General conditions of sale</RouterLink>
      </p>
      <p class="hover:underline text-gray-500">
        <RouterLink>Data protection</RouterLink>
      </p>
      <p class="hover:underline text-gray-500">
        <RouterLink>cookie management</RouterLink>
      </p>
      <p class="hover:underline text-gray-500">
        <RouterLink>Contact</RouterLink>
      </p>
    </div>
  </section>
  <hr />
  <div></div>
</template>
