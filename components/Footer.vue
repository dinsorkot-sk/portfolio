<template>
  <footer class="bg-black text-white w-full py-8 md:py-12 lg:py-16 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Top Section with SAY HELLO -->
      <div class="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 id="contact" class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">SAY HELLO</h2>
      </div>

      <!-- Social Media Links - Top Row -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 md:mb-16 lg:mb-20">
        <div v-for="(link, index) in topLinks" :key="`top-${index}`" class="flex items-center justify-center">
          <NuxtLink :to="link.url" class="group">
            <span class="uppercase font-light tracking-wider hover:text-yellow-400 transition-colors">{{ link.name
              }}</span>
          </NuxtLink>
          <span v-if="index < topLinks.length - 1" class="text-yellow-400 mx-2 md:mx-4 hidden sm:inline-block">✦</span>
        </div>
      </div>

      <!-- Center Circle with Text -->
      <div class="flex justify-center mb-10 md:mb-16 lg:mb-20">
        <div class="relative">
          <div
            class="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-yellow-400 rounded-full flex items-center justify-center">
            <span class="text-xl md:text-2xl">✳</span>
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 200 200" class="w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48">
              <path id="circlePath" d="M 100, 100
                    m -75, 0
                    a 75, 75 0 1, 1 150, 0
                    a 75, 75 0 1, 1 -150, 0" fill="none" />
              <text fill="white" font-size="10">
                <textPath href="#circlePath">
                  LET'S TALK ABOUT PROJECT ✦ LET'S TALK ABOUT PROJECT ✦
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      <!-- Social Media Links - Bottom Row -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 gap-y-6 mb-8">
        <div v-for="(link, index) in bottomLinks" :key="`bottom-${index}`" class="flex items-center justify-center">
          <NuxtLink :to="link.url" class="group">
            <span class="uppercase font-light tracking-wider hover:text-yellow-400 transition-colors">{{ link.name
              }}</span>
          </NuxtLink>
          <span v-if="index < bottomLinks.length - 1"
            class="text-yellow-400 mx-2 md:mx-4 hidden sm:inline-block">✦</span>
        </div>
      </div>

      <!-- Bottom Line -->
      <div class="w-full h-px bg-gray-800 mb-4"></div>

      <!-- Footer Bottom -->
      <div class="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        <NuxtLink :to="footerLink.url" class="hover:text-white transition-colors mb-4 sm:mb-0">
          {{ footerLink.text }}
        </NuxtLink>
        <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <span>{{ companyName }}</span>
          <span class="hidden sm:inline-block">|</span>
          <NuxtLink to="/privacy" class="hover:text-white transition-colors">{{ privacyPolicy }}</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Contract {
  id: number
  title: string
  link: string
  layout: string
}

const contracts = ref<Contract[]>([])

const { data: contractsData } = await useFetch<Contract[]>('/api/contracts')
contracts.value = contractsData.value || []

const topLinks = computed(() =>
  contracts.value
    .filter(contract => contract.layout === 'top')
    .map(contract => ({
      name: contract.title,
      url: contract.link,
    }))
)

const bottomLinks = computed(() =>
  contracts.value
    .filter(contract => contract.layout === 'bottom')
    .map(contract => ({
      name: contract.title,
      url: contract.link,
    }))
)

const footerLink = {
  url: 'https://github.com/dinsorkot-sk',
  text: 'https://github.com/dinsorkot-sk'
}

const companyName = 'sk.dinsorkot@gmail.com'
const privacyPolicy = 'PRIVACY POLICY'
</script>

<style scoped>
@media (max-width: 640px) {
  #circlePath {
    transform: scale(0.9);
  }
}
</style>