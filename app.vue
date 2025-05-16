<!-- app.vue -->
<script setup>
const route = useRoute()

const layout = computed(() => {
  return route.meta.layout ?? 'default'
})

defineAppConfig({
  layout
})
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
}
body {
  font-family: 'Prompt', sans-serif;
}
</style>
