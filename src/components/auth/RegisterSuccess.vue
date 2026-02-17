<script setup>
import {motion} from "motion-v";
</script>

<template>
  <motion.div :initial="{opacity: 0, scale:0}"
              :animate="{opacity: 1, scale:1}"
              :transition="{duration: 0.5, type: 'spring'}"
              class="flex flex-col gap-6 items-center text-center w-full">
    <div class="relative mb-6">
      <div class="absolute -top-4 -left-4 text-yellow-400">
        <span class="material-icons-round text-2xl">auto_awesome</span>
      </div>

      <div class="absolute -bottom-2 -left-8 text-orange-300">
        <span class="material-icons-round text-xl">star</span>
      </div>

      <div class="absolute bottom-4 -right-8 text-success opacity-60">
        <span class="material-icons-round text-2xl">celebration</span>
      </div>

      <div class="w-32 h-32 bg-green-300/20 rounded-full flex items-center justify-center relative">
        <div class="w-24 h-24 bg-success rounded-full flex items-center justify-center text-white shadow-lg shadow-success">
          <span class="material-symbols-outlined scale-250">check</span>
        </div>
      </div>
    </div>

    <h1 class="text-3xl font-extrabold flex flex-col gap-2">
      Welcome to the
      <span class="text-primary">Sparkle family!</span>
    </h1>

    <p class="text-lg">
      We're so excited to have you here! Les's start sharing your amazing ideas with the world.
    </p>

    <router-link :to="{name: 'Login'}">
      <Button class="w-full h-11 bg-primary hover:bg-primary-hover border-none rounded-full text-white transition-all active:scale-[0.98] flex items-center justify-center">
        <span>Start Exploring</span>
        <span class="material-icons-round">rocket_launch</span>
      </Button>
    </router-link>
  </motion.div>
</template>

<style scoped>

</style>