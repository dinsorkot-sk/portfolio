<template>
    <div>
        <div class="flex">
           <Sidebar/>
            <main class="flex-1 p-4 h-screen overflow-y-auto">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import Sidebar from '~/components/Sidebar.vue';
import { useCookie } from '#app'

const token = useCookie('user-token')

onMounted(() => {
    if (!token.value) {
        navigateTo('/admin/login')
    }
})

</script>
