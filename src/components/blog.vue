<template>
  <div class="min-h-screen">
    <Header class="animate__animated animate__fadeInDown" />

    <!-- Hero Section -->
    <div
      class="bg-[url('./../assets/images/heroBg.jpg')] bg-cover bg-center w-full h-[478px] flex items-center justify-center"
    >
      <div class="text-center animate__animated animate__fadeInUp">
        <h1 class="font-bold text-5xl text-black mb-4">Notre Blog</h1>
        <p class="text-black text-xl">
          Découvrez nos derniers articles et actualités
          <span class="text-white">littéraires</span>
        </p>
      </div>
    </div>

    <!-- Blog Content -->
    <div class="container mx-auto px-4 py-16">
      <!-- Featured Article -->
      <div class="mb-16">
        <h2 class="font-bold text-4xl text-center text-gray-800 mb-12">
          Article à la une
        </h2>
        <div
          class="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg"
        >
          <div class="md:flex">
            <div class="md:w-1/2">
              <img
                src="./../assets/images/celebre.jpg"
                alt="Article principal"
                class="w-full h-32 md:h-full object-cover"
              />
            </div>
            <div class="md:w-1/2 p-8">
              <div class="flex items-center mb-4">
                <span
                  class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                  >Littérature</span
                >
                <span class="text-gray-500 ml-4">15 Janvier 2024</span>
              </div>
              <h3 class="font-bold text-3xl text-gray-800 mb-4">
                Les chefs-d'œuvre de la littérature française moderne
              </h3>
              <p class="text-gray-600 mb-6">
                Découvrez les auteurs contemporains qui redéfinissent la
                littérature française et leurs œuvres incontournables qui
                marquent notre époque...
              </p>
              <Button class="px-6 py-3"> Lire l'article </Button>
            </div>
          </div>
        </div>
      </div>

      <!-- Blog Posts Grid -->
      <div class="mb-16">
        <h2 class="font-bold text-4xl text-center text-gray-800 mb-12">
          Derniers articles
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Article 1 -->
          <article
            class="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src="./../assets/images/alice.webp"
              alt="Alice au pays des merveilles"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <div class="flex items-center mb-3">
                <span
                  class="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold"
                  >Fantasy</span
                >
                <span class="text-gray-500 ml-3 text-sm">12 Janvier 2024</span>
              </div>
              <h3 class="font-bold text-xl text-gray-800 mb-3">
                L'univers fantastique de Lewis Carroll
              </h3>
              <p class="text-gray-600 mb-4">
                Plongez dans l'analyse approfondie d'Alice au pays des
                merveilles et découvrez les symboles cachés...
              </p>
              <Button class="w-full py-2"> Lire plus </Button>
            </div>
          </article>

          <!-- Article 2 -->
          <article
            class="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src="./../assets/images/einstein.jpg"
              alt="Einstein"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <div class="flex items-center mb-3">
                <span
                  class="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold"
                  >Science</span
                >
                <span class="text-gray-500 ml-3 text-sm">10 Janvier 2024</span>
              </div>
              <h3 class="font-bold text-xl text-gray-800 mb-3">
                Einstein et la vulgarisation scientifique
              </h3>
              <p class="text-gray-600 mb-4">
                Comment les grands scientifiques ont-ils réussi à rendre leurs
                découvertes accessibles au grand public...
              </p>
              <Button class="w-full py-2"> Lire plus </Button>
            </div>
          </article>

          <!-- Article 3 -->
          <article
            class="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src="./../assets/images/chateau.jpg"
              alt="Château"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <div class="flex items-center mb-3">
                <span
                  class="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold"
                  >Histoire</span
                >
                <span class="text-gray-500 ml-3 text-sm">8 Janvier 2024</span>
              </div>
              <h3 class="font-bold text-xl text-gray-800 mb-3">
                Les châteaux dans la littérature
              </h3>
              <p class="text-gray-600 mb-4">
                De Kafka à Dumas, explorez comment les châteaux deviennent des
                personnages à part entière...
              </p>
              <Button class="w-full py-2"> Lire plus </Button>
            </div>
          </article>

          <!-- Article 4 -->
          <article
            class="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src="./../assets/images/merveilles.jpg"
              alt="Merveilles"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <div class="flex items-center mb-3">
                <span
                  class="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold"
                  >Critique</span
                >
                <span class="text-gray-500 ml-3 text-sm">5 Janvier 2024</span>
              </div>
              <h3 class="font-bold text-xl text-gray-800 mb-3">
                Les merveilles de la lecture
              </h3>
              <p class="text-gray-600 mb-4">
                Pourquoi lire reste-t-il l'une des activités les plus
                enrichissantes de notre époque moderne...
              </p>
              <Button class="w-full py-2"> Lire plus </Button>
            </div>
          </article>

          <!-- Article 5 -->
          <article
            class="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src="./../assets/images/chambre.webp"
              alt="Chambre de lecture"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <div class="flex items-center mb-3">
                <span
                  class="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold"
                  >Lifestyle</span
                >
                <span class="text-gray-500 ml-3 text-sm">3 Janvier 2024</span>
              </div>
              <h3 class="font-bold text-xl text-gray-800 mb-3">
                Créer l'espace de lecture parfait
              </h3>
              <p class="text-gray-600 mb-4">
                Conseils et astuces pour aménager un coin lecture confortable et
                inspirant chez vous...
              </p>
              <Button class="w-full py-2"> Lire plus </Button>
            </div>
          </article>

          <!-- Article 6 -->
          <article
            class="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            <div class="p-6">
              <div class="flex items-center mb-3">
                <span
                  class="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold"
                  >Actualité</span
                >
                <span class="text-gray-500 ml-3 text-sm">1 Janvier 2024</span>
              </div>
              <h3 class="font-bold text-xl text-gray-800 mb-3">
                Tendances littéraires 2024
              </h3>
              <p class="text-gray-600 mb-4">
                Découvrez les genres et auteurs qui vont marquer cette nouvelle
                année littéraire...
              </p>
              <Button class="w-full py-2"> Lire plus </Button>
            </div>
          </article>
        </div>
      </div>

      <!-- Newsletter Section -->
      <div class="bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center">
        <h2 class="font-bold text-3xl text-gray-800 mb-4">Restez informé</h2>
        <p class="text-gray-600 mb-6">
          Abonnez-vous à notre newsletter pour recevoir nos derniers articles et
          recommandations de lecture
        </p>
        <div class="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Votre adresse email"
            class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition duration-300"
          />
          <Button class="px-6 py-3"> S'abonner </Button>
        </div>
      </div>

      <!-- Categories Section -->
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./footer.vue";
import Button from "./Button.vue";
</script>
