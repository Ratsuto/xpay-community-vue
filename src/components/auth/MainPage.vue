<script setup>
import {motion} from "motion-v";
</script>

<template>
  <body class="bg-background-color-light dark:bg-zinc-900 text-text-main antialiased min-h-screen flex items-center justify-center p-4">
  <div class="max-w-275 w-full bg-background-white dark:bg-zinc-800 border border-white/20 dark:border-zinc-500/20 backdrop-blur-sm rounded-[3rem] shadow-2xl shadow-primary/30 dark:shadow-zinc-600/50 overflow-hidden flex flex-col md:flex-row min-h-175">
    <div class="md:w-1/2 bg-background-secondary dark:bg-zinc-700 relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div class="absolute inset-0 sparkle-pattern"></div>

      <div class="absolute top-10 left-10 w-16 h-16 bg-background-white/50 dark:bg-zinc-600/50 rounded-2xl rotate-12 flex items-center justify-center">
        <span class="material-icons-round text-primary">auto_awesome</span>
      </div>

      <div class="absolute bottom-20 left-16 w-12 h-12 bg-background-color-light dark:bg-zinc-600/90 rounded-full flex items-center justify-center">
        <span class="material-icons-round text-primary/40">palette</span>
      </div>

      <div class="absolute top-24 right-12 w-14 h-14 bg-background-white/60 dark:bg-zinc-600/70 rounded-3xl -rotate-12 flex items-center justify-center">
        <span class="material-icons-round text-primary/50 text-2xl">favorite</span>
      </div>

      <div class="absolute bottom-12 right-20 w-16 h-16 bg-primary/10 dark:bg-zinc-600 rounded-xl rotate-45 flex items-center justify-center">
        <span class="material-icons-round text-primary/60 text-3xl">lightbulb</span>
      </div>

      <div class="absolute top-1/2 left-4 -translate-y-1/2 w-8 h-8 bg-primary/30 dark:bg-zinc-500/50 rounded-full"></div>

      <div class="relative z-10">
        <motion.div :initial="{ opacity: 0, scale: 0 }"
                    :animate="{ opacity: 1, scale: 1 }"
                    :transition="{ duration: 0.5 , ease: 'ease-in', type:'spring' }"
                    class="w-24 h-24 bg-linear-to-tr from-primary dark:from-zinc-800 to-background-color-light dark:to-zinc-600 rounded-full flex items-center justify-center text-white shadow-glow mx-auto">
          <span class="material-icons-round scale-220">bubble_chart</span>
        </motion.div>

        <motion.div :initial="{ opacity: 0, y: 20 }"
                    :animate="{ opacity: 1, y: 0 }"
                    :transition="{ duration: 0.3, delay: 0.3 }">
          <h1 class="text-4xl font-extrabold text-gray-800 dark:text-white mb-4 tracking-tight leading-tight">Where ideas <br/><span class="text-primary">come to life.</span></h1>
        </motion.div>

        <motion.div :initial="{ opacity: 0, y: 20 }"
                    :animate="{ opacity: 1, y: 0 }"
                    :transition="{ duration: 0.3, delay: 0.6 }">
          <p class="text-slate-500 dark:text-gray-300 font-medium max-w-70 mx-auto">Join thousands of Sparklers sharing their creativity every day.</p>
        </motion.div>
      </div>

      <motion.div :initial="{ opacity: 0 }"
                  :animate="{ opacity: 1 }"
                  :transition="{ duration: 0.5, delay: 0.9 }"
                  class="mt-12 relative z-1 hidden lg:block">
        <img alt="Playful community graphic"
             class="w-64 fill-none h-64 object-cover rounded-3xl shadow-soft"
             src="/src/assets/images/logo/community_img.svg"/>
      </motion.div>
    </div>

    <div class="md:w-1/2 p-8 md:p-16 flex flex-col gap-6 justify-center text-slate-700 dark:text-white bg-background-white dark:bg-zinc-800 backdrop-blur-md relative">
      <router-view/>
    </div>
  </div>
  </body>
</template>

<style scoped>

</style>