<script setup>
import Navbar from '~/components/Navbar.vue'
import CircleCursor from '@/components/CircleCursor.vue'
import Footer from '@/components/Footer.vue'
</script>
<template>
    <div class="relative w-screen h-screen">
        <CircleCursor />
        <Navbar />
        <main class="h-[calc(100vh-80px)]">
            <slot />
            <Footer />
        </main>
    </div>
</template>