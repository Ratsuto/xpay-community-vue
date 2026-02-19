<script setup>
import {onMounted, ref, watch} from 'vue'
import {motion} from "motion-v";
import router from "@/router/index.js";

const theme = ref([
  {name: 'Default', value: 'light'},
  {name: 'Indigo', value: 'indigo-mode'},
  {name: 'Blue', value: 'blue-mode'},
  {name: 'Pink', value: 'pink-mode'},
  {name: 'Glass', value: 'glass-mode'},
  {name: 'Dark', value: 'dark-mode'}
])
const selectedTheme = ref(theme.value[0].value);
const remember = ref(false);

watch(selectedTheme, (val) => {
  const html = document.documentElement
  html.className = ''
  if (val !== 'light') html.classList.add(val)

  localStorage.setItem('theme', val)
})

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) selectedTheme.value = saved
})

const handleSignIn = async () => {
  await router.push({name: 'Home'});
}
</script>

<template>
  <Select v-model="selectedTheme"
          :options="theme"
          optionLabel="name"
          optionValue="value"
          size="small"
          placeholder="Select Theme"
          :pt="{
            option:({context})=>({
              class: ['hover:bg-primary/10 hover:text-primary text-sm rounded-xl', context.selected ? 'bg-primary/10 text-primary':'']
            }),
            overlay:{class: 'rounded-xl bg-background-card backdrop-blur-sm'}}"
          class="text-sm w-28 rounded-full bg-slate-100/50 dark:bg-zinc-700/50 shadow-none border-transparent focus:border-primary absolute top-4 right-8"/>

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
      <h2 class="text-3xl font-extrabold">Welcome back, <span class="text-primary">Sparkler!</span></h2>
    </motion.div>

    <motion.div :initial="{opacity: 0, y:20}"
                :animate="{opacity: 1, y:0}"
                :transition="{duration: 0.3, delay: 0.4}">
      <p class="text-slate-500 dark:text-gray-300 font-medium">We've missed your creative energy.</p>
    </motion.div>
  </div>

  <form class="flex flex-col gap-4">
    <motion.div :initial="{opacity: 0, y:20}"
                :animate="{opacity: 1, y:0}"
                :transition="{duration: 0.3, delay: 0.6}">
      <label class="block text-sm font-semibold mb-2 px-1" for="email">Email Address</label>
      <div class="relative flex items-center group">
        <i class="absolute pi pi-envelope pl-4 text-slate-500 dark:text-slate-300"></i>
        <InputText class="w-full h-12 bg-slate-100 dark:bg-zinc-600 shadow-none border-transparent focus:border-primary pl-10 rounded-full"
                   id="email"
                   placeholder="hello@sparkle.com"
                   type="email"/>
      </div>
    </motion.div>

    <motion.div :initial="{opacity: 0, y:20}"
                :animate="{opacity: 1, y:0}"
                :transition="{duration: 0.3, delay: 0.8}">
      <div class="flex justify-between items-center mb-2 px-1">
        <label class="block text-sm font-semibold" for="password">Password</label>
        <a class="text-xs text-primary hover:text-primary-hover" href="#">Forgot Password?</a>
      </div>

      <div class="relative flex items-center group">
        <i class="absolute pi pi-lock z-1 pl-4 text-slate-500 dark:text-slate-300"></i>
        <Password toggleMask fluid
                  :feedback="false"
                  class="w-full"
                  input-class="h-12 bg-slate-100 dark:bg-zinc-600 shadow-none border-transparent focus:border-primary pl-10 rounded-full"
                  id="password"
                  required
                  placeholder="••••••••"/>
      </div>
    </motion.div>

    <motion.div :initial="{opacity: 0, y:20}"
                :animate="{opacity: 1, y:0}"
                :transition="{duration: 0.3, delay: 1}"
                class="flex items-center justify-end gap-1 text-sm">
      <Checkbox v-model="remember"
                inputId="remember"
                name="remember"
                binary
                :pt="{box:({context})=>({
                      class:['rounded-full scale-80', context.checked ? 'bg-primary border-primary' : 'bg-transparent border-gray-300']})}"/>
      <label for="remember"> Keep me logged in </label>
    </motion.div>

    <motion.div :initial="{opacity: 0, y:20}"
                :animate="{opacity: 1, y:0}"
                :transition="{duration: 0.3, delay: 1.2}">
      <Button @click="handleSignIn" class="w-full h-11 bg-primary hover:bg-primary-hover border-none rounded-full text-white transition-all active:scale-[0.98] flex items-center justify-center"
              type="submit">
        <span>Sign In</span>
        <span class="material-icons-round scale-70">bolt</span>
      </Button>
    </motion.div>
  </form>

  <motion.div :initial="{opacity: 0, y:20}"
              :animate="{opacity: 1, y:0}"
              :transition="{duration: 0.3, delay: 1.4}"
              class="text-center">
    <p class="font-semibold">
      New here?
      <router-link :to="{name: 'Register'}">
        <a class="text-primary hover:text-primary-hover ml-1 font-bold">Join the community</a>
      </router-link>
    </p>
  </motion.div>

  <motion.div :initial="{opacity: 0, scale:0}"
              :animate="{opacity: 1, scale:1}"
              :transition="{duration: 0.3, delay: 1.6}"
              class="flex items-center justify-center gap-6 mt-4">
    <div class="h-px flex-1 bg-gray-100"></div>
    <span class="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">Sparkle Community</span>
    <div class="h-px flex-1 bg-gray-100"></div>
  </motion.div>
</template>

<style scoped>

</style>