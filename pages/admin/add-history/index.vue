<template>
    <div class="max-w-4xl mx-auto py-10 px-4">
        <h1 class="text-3xl font-extrabold mb-6 text-gray-800">จัดการ Contents</h1>

        <!-- ฟอร์มเพิ่ม/แก้ไข -->
        <div class="bg-white shadow-lg rounded-lg p-6 mb-8">
            <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                    <label class="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        v-model="form.title"
                        class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        v-model="form.description"
                        class="mt-1 block w-full border border-gray-300 rounded-md p-2 h-32 resize-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    ></textarea>
                </div>
                <div class="flex space-x-2">
                    <button
                        type="submit"
                        class="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-md font-medium"
                    >
                        {{ isEdit ? 'อัปเดต' : 'เพิ่ม' }}
                    </button>
                    <button
                        v-if="isEdit"
                        @click="resetForm"
                        type="button"
                        class="bg-gray-500 hover:bg-gray-600 transition text-white px-5 py-2 rounded-md font-medium"
                    >
                        ยกเลิก
                    </button>
                </div>
            </form>
        </div>

        <!-- ตารางแสดงข้อมูล -->
        <div class="bg-white shadow-lg rounded-lg p-6 overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr class="bg-gray-50">
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="item in contents"
                        :key="item.id"
                        class="bg-white even:bg-gray-50 hover:bg-gray-100"
                    >
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ item.id }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ item.title }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ item.description }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 space-x-4">
                            <button @click="editItem(item)" class="text-blue-600 hover:underline">แก้ไข</button>
                            <button @click="deleteItem(item.id)" class="text-red-600 hover:underline">ลบ</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'admin'
})

import { ref, onMounted } from 'vue'
import { useFetch } from '#app'

interface Content {
    id: number
    title: string
    description: string
}

const contents = ref < Content[] > ([])
const form = ref < Partial < Content >> ({ title: '', description: '', id: undefined })
const isEdit = ref(false)

const loadContents = async () => {
    try {
        const { data } = await useFetch < Content[] > ('/api/contents')
        contents.value = data.value || []
    } catch (error) {
        console.error('Error loading contents:', error)
    }
}

const handleSubmit = async () => {
    if (isEdit.value) {
        await $fetch('/api/contents', {
            method: 'PUT',
            body: form.value
        })
    } else {
        await $fetch('/api/contents', {
            method: 'POST',
            body: form.value
        })
    }
    await loadContents()
    resetForm()
}

const editItem = (item: Content) => {
    form.value = { ...item }
    isEdit.value = true
}

const deleteItem = async (id: number) => {
    if (confirm('ยืนยันการลบ?')) {
        await $fetch('/api/contents', {
            method: 'DELETE',
            body: { id }
        })
        await loadContents()
    }
}

const resetForm = () => {
    form.value = { title: '', description: '', id: undefined }
    isEdit.value = false
}

loadContents()
</script>
