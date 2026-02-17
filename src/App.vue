<script setup>
import {onMounted} from "vue";

onMounted(() => {
  const saved = localStorage.getItem('theme')
  const html = document.documentElement
  html.className = ''
  if (saved !== 'light') html.classList.add(saved)
})
</script>

<template>
  <header>
  </header>

  <main>
    <router-view/>
  </main>
</template>

<style scoped>

</style>
