<script setup>
import {ref} from 'vue'
import {delay, motion} from "motion-v";

const remember = ref(false);
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
      <h2 class="text-3xl font-extrabold">Welcome back, <span class="text-primary">Sparkler!</span></h2>
    </motion.div>

    <motion.div :initial="{opacity: 0, y:20}"
                :animate="{opacity: 1, y:0}"
                :transition="{duration: 0.3, delay: 0.4}">
      <p class="text-slate-500 font-medium">We've missed your creative energy.</p>
    </motion.div>
  </div>

  <form class="flex flex-col gap-4">
    <motion.div :initial="{opacity: 0, y:20}"
                :animate="{opacity: 1, y:0}"
                :transition="{duration: 0.3, delay: 0.6}">
      <label class="block text-sm font-semibold mb-2 px-1" for="email">Email Address</label>
      <div class="relative flex items-center group">
        <i class="absolute pi pi-envelope pl-4 text-slate-500"></i>
        <InputText class="w-full h-12 bg-slate-100 shadow-none border-transparent focus:border-primary pl-10 rounded-full"
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
        <i class="absolute pi pi-lock z-1 pl-4 text-slate-500"></i>
        <Password toggleMask fluid
                  :feedback="false"
                  class="w-full"
                  input-class="h-12 bg-slate-100 shadow-none border-transparent focus:border-primary pl-10 rounded-full"
                  id="password"
                  required
                  placeholder="••••••••"/>
      </div>
    </motion.div>

    <motion.div :initial="{opacity: 0, y:20}"
                :animate="{opacity: 1, y:0}"
                :transition="{duration: 0.3, delay: 1}"
                class="flex items-center justify-end gap-2 text-sm">
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
      <Button class="w-full h-12 bg-primary hover:bg-primary-hover border-none rounded-full text-white transition-all active:scale-[0.98] flex items-center justify-center" type="submit">
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