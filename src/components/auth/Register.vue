<script setup>
import {ref} from 'vue'
import {motion} from "motion-v";

const userId = ref("");
const fullName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

</script>

<template>
  <div class="flex flex-col gap-2">
    <motion.div :initial="{opacity: 0, y:20}"
                :animate="{opacity: 1, y:0}"
                :transition="{duration: 0.3}"
                class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-lg flex items-center justify-center text-primary">
        <span class="material-icons-round">bubble_chart</span>
      </div>
      <span class="font-extrabold text-xl tracking-tight">Sparkle.</span>
    </motion.div>

    <motion.div :initial="{opacity: 0, y:20}"
                :animate="{opacity: 1, y:0}"
                :transition="{duration: 0.3, delay: 0.2}">
      <h2 class="text-3xl font-extrabold">Join the <span class="text-primary">magic!</span></h2>
    </motion.div>

    <motion.div :initial="{opacity: 0, y:20}"
                :animate="{opacity: 1, y:0}"
                :transition="{duration: 0.3, delay: 0.4}">
      <p class="text-slate-500 dark:text-slate-300 font-medium">Create your account to start sharing ideas.</p>
    </motion.div>
  </div>

  <form class="flex flex-col gap-4">
    <motion.div :initial="{opacity: 0, x:-20}"
                :animate="{opacity: 1, x:0}"
                :transition="{duration: 0.3, delay: 0.6}">
      <label class="block text-sm font-semibold mb-2 px-1" for="user_id">User ID</label>
      <div class="relative flex items-center group">
        <i class="absolute pi pi-id-card pl-4 text-slate-500 dark:text-slate-300"></i>
        <InputText class="w-full h-12 bg-slate-100 dark:bg-zinc-600 shadow-none border-transparent focus:border-primary pl-10 rounded-full"
                   id="user_id"
                   placeholder="ABCXXXXX"
                   type="text"
                   v-model="userId"/>
      </div>
    </motion.div>

    <motion.div :initial="{opacity: 0, x:-20}"
                :animate="{opacity: 1, x:0}"
                :transition="{duration: 0.3, delay: 0.8}">
      <label class="block text-sm font-semibold mb-2 px-1" for="full_name">Full Name</label>
      <div class="relative flex items-center group">
        <i class="absolute pi pi-user pl-4 text-slate-500 dark:text-slate-300"></i>
        <InputText class="w-full h-12 bg-slate-100 dark:bg-zinc-600 shadow-none border-transparent focus:border-primary pl-10 rounded-full"
                   id="full_name"
                   placeholder="Your Name"
                   type="text"
                   v-model="fullName"/>
      </div>
    </motion.div>

    <motion.div :initial="{opacity: 0, x:-20}"
                :animate="{opacity: 1, x:0}"
                :transition="{duration: 0.3, delay: 1}">
      <label class="block text-sm font-semibold mb-2 px-1" for="email">Email Address</label>
      <div class="relative flex items-center group">
        <i class="absolute pi pi-envelope pl-4 text-slate-500 dark:text-slate-300"></i>
        <InputText class="w-full h-12 bg-slate-100 dark:bg-zinc-600 shadow-none border-transparent focus:border-primary pl-10 rounded-full"
                   id="email"
                   placeholder="hello@sparkle.com"
                   type="email"
                   v-model="email"/>
      </div>
    </motion.div>

    <motion.div :initial="{opacity: 0, x:-20}"
                :animate="{opacity: 1, x:0}"
                :transition="{duration: 0.3, delay: 1.2}">
      <label class="block text-sm font-semibold mb-2" for="password">Password</label>
      <div class="relative flex items-center group">
        <i class="absolute pi pi-lock z-1 pl-4 text-slate-500 dark:text-slate-300"></i>
        <Password toggleMask fluid
                  class="w-full"
                  input-class="h-12 bg-slate-100 dark:bg-zinc-600 shadow-none border-transparent focus:border-primary pl-10 rounded-full"
                  id="password"
                  required
                  placeholder="••••••••"
                  v-model="password"/>
      </div>
    </motion.div>

    <motion.div :initial="{opacity: 0, x:-20}"
                :animate="{opacity: 1, x:0}"
                :transition="{duration: 0.3, delay: 1.4}">
      <label class="block text-sm font-semibold mb-2" for="confirm_password">Confirm Password</label>
      <div class="relative flex items-center group">
        <i class="absolute pi pi-lock z-1 pl-4 text-slate-500 dark:text-slate-300"></i>
        <Password toggleMask fluid
                  class="w-full"
                  input-class="h-12 bg-slate-100 dark:bg-zinc-600 shadow-none border-transparent focus:border-primary pl-10 rounded-full"
                  id="confirm_password"
                  required
                  placeholder="••••••••"
                  v-model="confirmPassword"
                  :invalid="confirmPassword !== password"/>
      </div>
    </motion.div>

    <motion.div :initial="{opacity: 0, x:-20}"
                :animate="{opacity: 1, x:0}"
                :transition="{duration: 0.3, delay: 1.6}">
      <router-link :to="{name: 'RegisterSuccess'}">
        <Button class="w-full h-11 bg-primary hover:bg-primary-hover border-none rounded-full text-white transition-all active:scale-[0.98] flex items-center justify-center"
                type="submit">
          <span>Join Sparkle</span>
          <span class="material-icons-round scale-70">celebration</span>
        </Button>
      </router-link>
    </motion.div>
  </form>

  <motion.div :initial="{opacity: 0, y:20}"
              :animate="{opacity: 1, y:0}"
              :transition="{duration: 0.3, delay: 1.8}"
              class="text-center">
    <p class="font-semibold">
      Already a member?
      <router-link :to="{name: 'Login'}">
        <a class="text-primary hover:text-primary-hover ml-1 font-bold">Sing In</a>
      </router-link>
    </p>
  </motion.div>

  <motion.div :initial="{opacity: 0, scale:0}"
              :animate="{opacity: 1, scale:1}"
              :transition="{duration: 0.3, delay: 2}"
              class="flex items-center justify-center gap-2">
    <div class="h-px flex-1 bg-gray-100"></div>
    <span class="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">Creativity Awaits</span>
    <div class="h-px flex-1 bg-gray-100"></div>
  </motion.div>
</template>

<style scoped>

</style>