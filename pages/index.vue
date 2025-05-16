<template>
    <div>
        <!-- Hero Section -->
        <section
            class="flex flex-col gap-6 items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6">
            <h1 class="text-4xl md:text-7xl font-extrabold tracking-widest">PORTFOLIO</h1>
            <button @click="scrollToSection"
                class="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition">
                Scroll Down
            </button>
        </section>

        <!-- Scroll Section -->
        <section id="scroll-section" ref="scrollSection" class="min-h-screen bg-black text-gray-200 px-10 py-20">
            <div class="max-w-5xl mx-auto flex flex-col gap-16">
                <!-- Dynamic Profile Items -->
                <div v-for="(item, index) in profiles" :key="index"
                    class="flex flex-col md:flex-row md:items-center gap-8">
                    <div class="md:w-2/5 text-yellow-400 font-semibold text-2xl md:text-right">
                        {{ item.title }}
                    </div>
                    <div class="md:flex-grow flex items-center">
                        <div class="bg-yellow-500 w-full rounded-lg shadow-md" :style="{ height: itemHeight }"></div>
                    </div>
                    <div class="md:w-2/5 text-gray-300 text-base leading-relaxed whitespace-pre-line">
                        {{ item.description }}
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useFetch } from '#app';

interface ProfileItem {
    title: string;
    description: string;
}

const { data: contents, error } = await useFetch<ProfileItem[]>('/api/contents');

const scrollSection = ref<HTMLElement | null>(null);
const itemHeight = '100%';

const profiles = ref<ProfileItem[]>([]);

const scrollToSection = () => {
    if (scrollSection.value) {
        scrollSection.value.scrollIntoView({ behavior: 'smooth' });
    }
};

onMounted(() => {
    if (Array.isArray(contents.value)) {
        profiles.value = contents.value;
    } else {
        console.warn('Expected array from /api/contents but got:', contents.value);
    }
});
</script>
