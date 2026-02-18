<script setup lang="ts">
import {ref} from 'vue';

const menuItems = [
  {name: 'Discover', route: '/home', icon_name: 'explore'},
  {name: 'Challenges', route: '/challenge', icon_name: 'bolt'},
  {name: 'Community', route: '/community', icon_name: 'diversity_2'},
  {name: 'Saved', route: '/saved', icon_name: 'bookmark'},
  {name: 'Message', route: '/message', icon_name: 'chat_bubble'},
]
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
    <nav class="flex-1 flex flex-col gap-2">
      <router-link v-for="item in menuItems"
                   :key="item.name"
                   :to="item.route"
                   v-slot="{ isActive, isExactActive}">
        <div :class="['flex items-center gap-4 px-4 py-3 rounded-full transition-all', isExactActive ?  'bg-primary text-white shadow-glow hover:scale-[1.02]' : 'dark:text-slate-300 hover:bg-white dark:hover:bg-zinc-600 hover:text-primary']">
          <span class="material-icons-round">{{ item.icon_name }}</span>
          <span class="font-bold">{{ item.name }}</span>
          <span v-if="item.name === 'Message'" class="ml-auto bg-red-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">3</span>
        </div>
      </router-link>
    </nav>

    <!-- User Mini Profile -->
    <div class="mt-auto pt-4 border-t border-gray-300 dark:border-white/5">
      <router-link :to="{name:'Profile'}"
                   v-slot="{ isActive, isExactActive}">
        <div :class="['flex items-center gap-3 p-3 rounded-2xl hover:bg-white dark:hover:bg-surface-dark cursor-pointer transition-colors', isExactActive ? 'bg-white': '']">
          <Avatar
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAU1DHmhRcmxtXH6PQlFigWs50SLdwYlPhprdF5-CFUraKuqlv3GTxYo6_bovEtD_K4IVmQIzR8BytqS_GHOvvYl4W1WNmo-LVy8SPCW92_2vINM6Ue24eBpIPMBDPMQ6Cnx8iY0LcE_yKbt_henje6HIjHkoKI7F0N48qLJ0HgP79WJkK0yt1JzOir-Vn1S1r1kONl2lRNy15gTs9LSduHtuqhHjTMAphp3Idjd1tfoT84st16GFWQTOJVOwNGD84Llh6cppL57co"
              class="w-10 h-10 object-cover ring-2 ring-primary p-0.5"
              shape="circle"/>

          <div class="flex flex-col">
            <span class="font-bold text-sm text-gray-900 dark:text-white">Mia Creative</span>
            <span class="text-xs text-text-sub dark:text-gray-400">@miamakes</span>
          </div>

          <div class="material-icons-round ml-auto text-gray-400">
            more_horiz
          </div>
        </div>
      </router-link>
    </div>
  </aside>
</template>

<style scoped>

</style>