<template>
    <nav class="text-white bg-gradient-to-t from-gray-900 to-black">
      <div class="container mx-auto px-4 py-4 border-b border-white">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <a href="#" class="text-2xl font-bold tracking-wider">DINSORKOT</a>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-8 items-center">
            <a href="#" class="hover:text-gray-300 transition duration-300">Home</a>
            <a href="#scroll-section" class="hover:text-gray-300 transition duration-300">About</a>
            <!-- Dropdown Group -->
            <div class="relative">
              <button @click="toggleDropdown" class="hover:text-gray-300 transition duration-300 cursor-pointer">
                Services
              </button>
              <div v-show="dropdownOpen" class="absolute left-0 mt-2 bg-white text-black rounded shadow-md z-10">
                <a href="#resume" class="block px-4 py-2 hover:bg-gray-200">Resume</a>
                <a href="#cv" class="block px-4 py-2 hover:bg-gray-200">CV</a>
              </div>
            </div>
            <a href="#contact" class="hover:text-gray-300 transition duration-300">Contact</a>
          </div>
  
          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMenu" 
            class="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg 
              v-if="!menuOpen" 
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              v-else 
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
  
        <!-- Mobile Navigation -->
        <div 
          v-show="menuOpen" 
          class="md:hidden mt-4"
        >
          <div class="flex flex-col space-y-4 pt-4 pb-3">
            <a href="#" class="hover:text-gray-300 transition duration-300">Home</a>
            <a href="#scroll-section" class="hover:text-gray-300 transition duration-300">About</a>
            <div>
              <p class="hover:text-gray-300 transition duration-300">Services</p>
              <div class="ml-4 mt-1 space-y-2">
                <a href="#resumen" class="block hover:text-gray-300 transition duration-300">Resumen</a>
                <a href="#cv" class="block hover:text-gray-300 transition duration-300">CV</a>
              </div>
            </div>
            <a href="#contact" class="hover:text-gray-300 transition duration-300">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const menuOpen = ref(false)
  const dropdownOpen = ref(false)
  
  function toggleMenu() {
    menuOpen.value = !menuOpen.value
  }
  
  function toggleDropdown() {
    dropdownOpen.value = !dropdownOpen.value
  }
  </script>