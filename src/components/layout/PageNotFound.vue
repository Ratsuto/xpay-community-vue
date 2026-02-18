<script setup>

</script>

<template>
  <article class="bg-white dark:bg-zinc-800 rounded-3xl p-6 border border-gray-50 dark:border-white/5">
    <div class="flex flex-col items-center justify-center py-8 px-16 gap-6 border-none">
      <h1 class="text-2xl text-gray-500">Uh oh, Nothing Here!</h1>
      <img src="/src/assets/images/icons/logo-not-found.png" alt="logo" class="h-64"/>
      <h2 class="text-gray-500">Page does not exist.</h2>
      <router-link to="/home">
        <Button icon="pi pi-caret-left" label="Back to Home" class="bg-primary hover:bg-primary-hover rounded-full border-none"></Button>
      </router-link>
    </div>
  </article>
</template>

<style scoped>

</style>