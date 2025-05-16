<template>
    <div class="flex justify-center items-center h-screen">
        <div class="w-full max-w-sm bg-gray-100 p-6 rounded-md shadow-md text-center">
            <h1 class="text-2xl font-bold mb-4">Login</h1>
            <form @submit.prevent="login">
                <div class="mb-4">
                    <input type="text" v-model="username" placeholder="Username"
                        class="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div class="mb-4">
                    <input type="password" v-model="password" placeholder="Password"
                        class="w-full p-2 border border-gray-300 rounded" />
                </div>
                <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Login
                </button>
                <p v-if="error" class="mt-2 text-red-500 text-sm">{{ error }}</p>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'login'
})

import { ref, onMounted } from 'vue'
import { useCookie } from '#app'

const username = ref('')
const password = ref('')
const error = ref('')
const token = useCookie('user-token') // auto-SSR support

const login = async () => {
    error.value = ''

    const { data, error: fetchError } = await useFetch('/api/login', {
        method: 'POST',
        body: {
            username: username.value,
            password: password.value,
        },
    })

    if (fetchError.value) {
        error.value = 'Login failed. Please try again.'
        return
    }

    if (data.value?.token) {
        token.value = data.value.token
        navigateTo('/admin')           
    } else {
        error.value = 'Invalid credentials.'
    }
}
onMounted(() => {
  if (token.value) {
    navigateTo('/admin')           
  }
})


</script>