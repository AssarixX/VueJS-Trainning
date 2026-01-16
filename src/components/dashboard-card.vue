<script setup lang="ts">
import BillingIcon from "./icons/billing-icon.vue";
import EuroIcon from "./icons/euro-icon.vue";
import Saving from "./icons/saving.vue";

import { ref, onMounted, computed } from "vue";

const finalBilling = 1350;
const finalSaving = 500;
const finalEuro = 200000;

const animatedBilling = ref(0);
const animatedSaving = ref(0);
const animatedEuro = ref(0);

const duration = 1500; // durée de l'animation en ms
let startTime = null;

// Formatted values
const formattedBilling = computed(() => animatedBilling.value);
const formattedSaving = computed(() => animatedSaving.value);
const formattedEuro = computed(() =>
  animatedEuro.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
);

const startAnimation = () => {
  startTime = performance.now();
  requestAnimationFrame(animateCounters);
};

const animateCounters = (timestamp) => {
  if (!startTime) startTime = timestamp;

  const elapsed = timestamp - startTime;
  const progress = Math.min(elapsed / duration, 1);

  // Animate values
  animatedBilling.value = Math.floor(progress * finalBilling);
  animatedSaving.value = Math.floor(progress * finalSaving);
  animatedEuro.value = Math.floor(progress * finalEuro);

  if (progress < 1) {
    requestAnimationFrame(animateCounters);
  }
};

onMounted(() => {
  startAnimation();
});
</script>

<template>
  <div class="flex gap-4 mb-8">
    <div
      class="flex flex-col rounded-2xl border border-gray-300 h-28 w-96 justify-center p-4 shadow-lg bg-gray-200/60 transition hover:scale-105"
    >
      <div class="flex gap-3 pb-2">
        <span
          ><BillingIcon
            class="size-8 bg-red-400 p-1 rounded-full text-gray-800/80"
          />
        </span>
        <span class="font-semibold text-2xl"
          >{{ formattedBilling }} livres</span
        >
      </div>
      <p class="text-sm text-gray-700">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div
      class="flex flex-col rounded-2xl border border-gray-300 h-28 w-96 justify-center p-4 shadow-lg bg-gray-200/60 transition hover:scale-105"
    >
      <div class="flex gap-3 pb-2">
        <span
          ><EuroIcon
            class="size-8 bg-red-400 p-1 rounded-full text-gray-800/80"
        /></span>
        <span class="font-semibold text-2xl">{{ formattedEuro }} €</span>
      </div>
      <p class="text-sm text-gray-700">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div
      class="flex flex-col rounded-2xl border border-gray-300 h-28 w-96 justify-center p-4 shadow-lg bg-gray-200/60 transition hover:scale-105"
    >
      <div class="flex gap-3 pb-2">
        <span
          ><Saving class="size-8 bg-red-400 p-1 rounded-full text-gray-800/80"
        /></span>
        <span class="font-semibold text-2xl">{{ formattedSaving }} €</span>
      </div>
      <p class="text-sm text-gray-700">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  </div>
</template>
