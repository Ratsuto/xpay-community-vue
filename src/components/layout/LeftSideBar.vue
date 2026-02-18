<script setup lang="ts">

</script>

<template>
  <!-- Left Sidebar (Navigation) -->
  <aside class="hidden md:flex flex-col w-72 sticky top-0 h-screen p-6 border-r border-gray-100 dark:border-white/5">

    <!-- Logo -->
    <div class="flex items-center gap-3 mb-10 px-2">
      <div class="w-10 h-10 rounded-xl flex items-center justify-center text-primary shadow-glow">
        <span class="material-icons-round scale-170">bubble_chart</span>
      </div>
      <span class="font-extrabold text-2xl tracking-tight dark:text-white">Sparkle.</span>
    </div>

    <!-- Navigation Links -->
    <nav class="flex-1 space-y-2">
      <a class="flex items-center gap-4 px-4 py-3 bg-primary text-white rounded-full shadow-glow transition-transform hover:scale-[1.02]" href="#">
        <span class="material-icons-round">explore</span>
        <span class="font-bold">Discover</span>
      </a>

      <a class="flex items-center gap-4 px-4 py-3 text-text-sub dark:text-gray-400 hover:bg-white dark:hover:bg-surface-dark hover:text-primary rounded-2xl transition-colors" href="#">
        <span class="material-icons-round">bolt</span>
        <span class="font-bold">Challenges</span>
      </a>

      <a class="flex items-center gap-4 px-4 py-3 text-text-sub dark:text-gray-400 hover:bg-white dark:hover:bg-surface-dark hover:text-primary rounded-2xl transition-colors" href="#">
        <span class="material-icons-round">diversity_2</span>
        <span class="font-bold">Community</span>
      </a>

      <a class="flex items-center gap-4 px-4 py-3 text-text-sub dark:text-gray-400 hover:bg-white dark:hover:bg-surface-dark hover:text-primary rounded-2xl transition-colors" href="#">
        <span class="material-icons-round">bookmark</span>
        <span class="font-bold">Saved</span>
      </a>

      <a class="flex items-center gap-4 px-4 py-3 text-text-sub dark:text-gray-400 hover:bg-white dark:hover:bg-surface-dark hover:text-primary rounded-2xl transition-colors" href="#">
        <span class="material-icons-round">chat_bubble</span>
        <span class="font-bold">Messages</span>
        <span class="ml-auto bg-red-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">3</span>
      </a>
    </nav>

    <!-- User Mini Profile -->
    <div class="mt-auto pt-6 border-t border-gray-300 dark:border-white/5">
      <div class="flex items-center gap-3 p-2 rounded-2xl hover:bg-white dark:hover:bg-surface-dark cursor-pointer transition-colors">
        <img alt="Smiling user portrait"
             class="w-10 h-10 rounded-full object-cover ring-2 ring-primary p-0.5"
             data-alt="User profile picture of a smiling woman"
             src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvV2IlEFrCJcKLAzF5-K68N_fXQxygWEVLpTohkbN_p0jwAS2MERTiNgzaGLsaqK-dFGd-CZ5acWA_S2GH3-4vxj3UFyO_O6w1dRPGq7uq-rSku6TI3uhkTpCnqaKqItTyy9vxbcXSbZCbWBEticdNj5vXJJc75YFS6JQbg5evWAD9Y83yIDoLv5aY6XY1yRUCWNI6ItAURTeYUW81qSsub6oFKx59N4lQB42uOHayGSHLUOqeCw5ZbwWCkODrUfWb5Qp_wuDiHAs"/>
        <div class="flex flex-col">
          <span class="font-bold text-sm text-gray-900 dark:text-white">Mia Creative</span>
          <span class="text-xs text-text-sub dark:text-gray-400">@miamakes</span>
        </div>
        <span class="material-icons-round ml-auto text-gray-400">more_horiz</span>
      </div>
    </div>
  </aside>
</template>

<style scoped>

</style>