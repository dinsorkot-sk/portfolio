<template>
    <nav class="w-64 bg-gray-800 text-white h-screen p-4 flex flex-col justify-between">
        <ul class="space-y-2">
            <li>
                <a href="/admin" class="block p-2 hover:bg-gray-700 rounded">Home</a>
            </li>
            <li>
                <a href="/admin/add-history" class="block p-2 hover:bg-gray-700 rounded">Add History</a>
            </li>
        </ul>
        <ul>
            <li>
                <a @click="logout" class="block p-2 hover:bg-gray-700 rounded">Logout</a>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { useCookie } from '#app'

const token = useCookie('user-token')

const logout = () => {
    token.value = null
    navigateTo('/admin/login')
}
</script>