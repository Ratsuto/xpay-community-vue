<script setup>
import {ref, onMounted, getCurrentInstance} from "vue";
import {useConfirm} from "primevue/useconfirm";
import {useRouter} from 'vue-router';

const axios = getCurrentInstance().appContext.config.globalProperties.$axios;
const apiUrl = import.meta.env.VITE_API_URL;

const confirm = useConfirm();
const router = useRouter();
const users = ref({});
const operatorID = localStorage.getItem('operatorId');

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('sessionId');
  router.push('/');
}

const requireConfirmation = (event) => {
  confirm.require({
    target: event.currentTarget,
    group: 'headless',
    message: 'Do you want to logout?',
    accept: () => {
      logout();
    },
    reject: () => {

    }
  });
}

onMounted(async () => {
  const res = await axios.post(`${apiUrl}/users/get-user-detail`, {username: operatorID})
  if (res.data.success) {
    users.value = res.data.data
  }
});

localStorage.setItem('userRole', users.ROLE_NAME);
localStorage.setItem('userRoleType', users.ROLE_TYPE);

const menuItems = [
  {name: 'Discover', route: '/home', icon_name: 'explore'},
  {name: 'Challenges', route: '/challenge', icon_name: 'bolt'},
  {name: 'Progress', route: '/progress', icon_name: 'diversity_2'},
  {name: 'Saved', route: '/saved', icon_name: 'bookmark'},
  {name: 'Message', route: '/message', icon_name: 'chat_bubble'},
]
</script>

<template>
  <!-- Left Sidebar (Navigation) -->
  <aside class="hidden md:flex flex-col w-72 sticky top-0 h-screen p-6 border-r border-gray-100 dark:border-white/5 text-slate-800 dark:text-white">

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
          <Avatar :image="users.OPERATOR_IMAGE ? `data:image/jpeg;base64,${users.OPERATOR_IMAGE}` : 'src/assets/images/icons/default-image.svg'"
                  class="object-cover ring-2 ring-primary h-9 w-9"
                  shape="circle"/>

          <div class="flex flex-col gap-1">
            <span class="font-bold text-sm">{{ users.OPERATOR_NAME }}</span>
            <span class="text-xs text-text-sub dark:text-gray-400">@{{ users.OPERATOR_EMAIL.toString().split('@')[0] }}</span>
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