<template>
    <div
      class="fixed z-50 w-[60px] h-[60px] bg-white rounded-full mix-blend-difference pointer-events-none transition-none"
      :style="cursorStyle"
    ></div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const cursorStyle = ref<Record<string, string>>({
    left: '0px',
    top: '0px',
    transform: 'translate(-50%, -50%)',
  })
  
  let mouseX = 0
  let mouseY = 0
  let currentX = 0
  let currentY = 0
  
  function updateTargetPosition(e: MouseEvent): void {
    mouseX = e.clientX
    mouseY = e.clientY
  }
  
  // ปรับ speed: 0.25 (ค่าเดิม 0.1)
  function animateCursor(): void {
    currentX += (mouseX - currentX) * 0.25
    currentY += (mouseY - currentY) * 0.25
  
    cursorStyle.value.left = `${currentX}px`
    cursorStyle.value.top = `${currentY}px`
  
    requestAnimationFrame(animateCursor)
  }
  
  onMounted(() => {
    document.body.style.cursor = 'none' // ซ่อนเมาส์จริง
    window.addEventListener('mousemove', updateTargetPosition)
    requestAnimationFrame(animateCursor)
  })
  
  onUnmounted(() => {
    document.body.style.cursor = 'auto' // คืนค่าเมาส์ปกติเมื่อ component หาย
    window.removeEventListener('mousemove', updateTargetPosition)
  })
  </script>
  