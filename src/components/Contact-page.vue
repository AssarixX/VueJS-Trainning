<template>
  <div class="min-h-screen">
    <Header class="animate__animated animate__fadeInDown" />

    <!-- Hero Section -->
    <div
      class="bg-[url('./../assets/images/heroBg.jpg')] bg-cover bg-center w-full h-[478px] flex items-center justify-center"
    >
      <div class="text-center animate__animated animate__fadeInUp">
        <h1 class="font-bold text-5xl text-black mb-4">Contactez-nous</h1>
        <p class="text-black text-xl">Nous sommes là pour vous aider</p>
      </div>
    </div>

    <!-- Contact Content -->
    <div class="container mx-auto px-4 py-16">
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
          <h2 class="font-bold text-3xl text-gray-800 mb-6">
            Envoyez-nous un message
          </h2>
          <form class="space-y-6">
            <div>
              <label class="block text-gray-700 font-semibold mb-2"
                >Nom complet</label
              >
              <input
                type="text"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition duration-300"
                placeholder="Votre nom complet"
              />
            </div>

            <div>
              <label class="block text-gray-700 font-semibold mb-2"
                >Email</label
              >
              <input
                type="email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition duration-300"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label class="block text-gray-700 font-semibold mb-2"
                >Sujet</label
              >
              <input
                type="text"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition duration-300"
                placeholder="Sujet de votre message"
              />
            </div>

            <div>
              <label class="block text-gray-700 font-semibold mb-2"
                >Message</label
              >
              <textarea
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition duration-300 resize-none"
                placeholder="Votre message..."
              ></textarea>
            </div>

            <Button class="w-full py-4 text-lg"> Envoyer le message </Button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <div class="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
            <h2 class="font-bold text-3xl text-gray-800 mb-6">
              Informations de contact
            </h2>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <LocationIcon class="size-6 text-gray-500 mt-1" />
                <div>
                  <h3 class="font-bold text-gray-800">Adresse</h3>
                  <p class="text-gray-500">
                    3 route Strasbourg<br />
                    67500 Haguenau
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <PersonIcon class="size-6 text-gray-500 mt-1" />
                <div>
                  <h3 class="font-bold text-gray-800">Téléphone</h3>
                  <p class="text-red-500 font-semibold">+2290196591522</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <ContactSupportIcon class="size-6 text-gray-500 mt-1" />
                <div>
                  <h3 class="font-bold text-gray-800">Email</h3>
                  <p class="text-gray-500">contact@bootin.com</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Hours -->
          <div class="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
            <h3 class="font-bold text-2xl text-gray-800 mb-4">
              Heures d'ouverture
            </h3>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span class="text-gray-700">Lundi - Vendredi</span>
                <span class="text-gray-500">9h00 - 18h00</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-700">Samedi</span>
                <span class="text-gray-500">10h00 - 16h00</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-700">Dimanche</span>
                <span class="text-red-500">Fermé</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-16">
        <h2 class="font-bold text-4xl text-center text-gray-800 mb-12">
          Questions fréquentes
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <h3 class="font-bold text-xl text-gray-800 mb-3">
              Comment passer une commande ?
            </h3>
            <p class="text-gray-500">
              Parcourez notre boutique, ajoutez les livres à votre panier et
              suivez le processus de commande simple.
            </p>
          </div>

          <div class="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <h3 class="font-bold text-xl text-gray-800 mb-3">
              Quels sont les délais de livraison ?
            </h3>
            <p class="text-gray-500">
              Nous livrons généralement sous 3-5 jours ouvrables pour la France
              métropolitaine.
            </p>
          </div>

          <div class="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <h3 class="font-bold text-xl text-gray-800 mb-3">
              Puis-je retourner un livre ?
            </h3>
            <p class="text-gray-500">
              Oui, vous avez 14 jours pour retourner un livre en parfait état.
            </p>
          </div>

          <div class="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <h3 class="font-bold text-xl text-gray-800 mb-3">
              Acceptez-vous les paiements sécurisés ?
            </h3>
            <p class="text-gray-500">
              Absolument ! Nous acceptons toutes les cartes bancaires et PayPal
              avec un cryptage SSL.
            </p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./footer.vue";
import Button from "./Button.vue";
import LocationIcon from "./icons/locationIcon.vue";
import PersonIcon from "./icons/personIcon.vue";
import ContactSupportIcon from "./icons/contactSupportIcon.vue";
</script>
