<script setup lang="ts">
import {ref} from "vue";
import BasicPostLayout from "@/components/layout/BasicPostLayout.vue";

const postText = ref("");
</script>

<template>
  <!-- Search Bar (Top) -->
  <div class="flex items-center relative">
    <span class="material-icons-round absolute left-4 text-slate-500 dark:text-slate-300">search</span>
    <InputText class="w-full h-12 rounded-full pl-12 bg-background-card dark:bg-zinc-600 border-transparent focus:border-primary"
               placeholder="Search ideas, people, or tags..."/>
  </div>

  <!-- "What's on your mind?" Input Area -->
  <div class="bg-white dark:bg-zinc-800 rounded-3xl p-6 shadow-soft border-none relative overflow-hidden group">
    <!-- Decorative background blob -->
    <div class="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>

    <div class="flex gap-4">
      <Avatar
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuAU1DHmhRcmxtXH6PQlFigWs50SLdwYlPhprdF5-CFUraKuqlv3GTxYo6_bovEtD_K4IVmQIzR8BytqS_GHOvvYl4W1WNmo-LVy8SPCW92_2vINM6Ue24eBpIPMBDPMQ6Cnx8iY0LcE_yKbt_henje6HIjHkoKI7F0N48qLJ0HgP79WJkK0yt1JzOir-Vn1S1r1kONl2lRNy15gTs9LSduHtuqhHjTMAphp3Idjd1tfoT84st16GFWQTOJVOwNGD84Llh6cppL57co"
          class="ring-2 ring-gray-100 dark:ring-white/10 hidden sm:block"
          size="large"
          shape="circle"/>

      <div class="flex-1">
            <Textarea v-model="postText"
                      rows="3"
                      placeholder="What's sparking your joy today?"
                      class="w-full bg-transparent border-none shadow-none appearance-none min-h-3rem placeholder-gray-400"/>

        <div class="sm:flex grid grid-cols-1 items-center justify-between mt-4 gap-4">
          <div class="flex gap-2">
            <Button class="flex items-center gap-2 px-3 border-none rounded-full bg-info text-blue-600 hover:bg-blue-200 transition-colors text-sm font-semibold">
              <span class="material-icons-round scale-90">image</span>
              <span>Photo</span>
            </Button>

            <Button class="flex items-center gap-2 px-3 border-none rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors text-sm font-semibold">
              <span class="material-icons-round scale-90">palette</span>
              <span>Doodle</span>
            </Button>

            <Button class="flex items-center gap-2 px-3 border-none rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors text-sm font-semibold">
              <span class="material-icons-round scale-90">poll</span>
              <span>Poll</span>
            </Button>
          </div>

          <div class="flex items-center justify-end w-full">
            <Button class="bg-primary hover:bg-primary-hover border-none text-white px-6 rounded-full font-bold shadow-none transition-all active:scale-95 flex items-center gap-2">
              <span>Spark It</span>
              <span class="material-icons-round scale-80">send</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Filter Tabs -->
  <div class="flex gap-3 overflow-x-scroll hide-scrollbar">
    <a class="px-5 py-2 border-transparent bg-gray-900 dark:bg-white text-white dark:text-black rounded-full text-sm font-bold whitespace-nowrap">
      For You
    </a>

    <a class="px-5 py-2 border-transparent bg-white dark:bg-zinc-600 text-slate-500 dark:text-slate-100 rounded-full text-sm font-bold hover:border-primary hover:text-primary transition-colors whitespace-nowrap">
      Illustrations
    </a>

    <a class="px-5 py-2 border-transparent bg-white dark:bg-zinc-600 text-slate-500 dark:text-slate-100 rounded-full text-sm font-bold hover:border-primary hover:text-primary transition-colors whitespace-nowrap">UI
      Design
    </a>

    <a class="px-5 py-2 border-transparent bg-white dark:bg-zinc-600 text-slate-500 dark:text-slate-100 rounded-full text-sm font-bold hover:border-primary hover:text-primary transition-colors whitespace-nowrap">
      Photography
    </a>

    <a class="px-5 py-2 border-transparent bg-white dark:bg-zinc-600 text-slate-500 dark:text-slate-100 rounded-full text-sm font-bold hover:border-primary hover:text-primary transition-colors whitespace-nowrap">
      Typography
    </a>
  </div>

  <!-- Feed Content -->
  <div class="space-y-6">

    <BasicPostLayout username="Alex Rivera"
                     :status="true"
                     time="2 hours ago"
                     postType="UX Design"
                     avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuA6ZGQ-5CZrNFEX45_OXNZJ3urYQWTZhrkpH2HKKVnCPow5Ym0J8EhX9AIyCXq4-mOdUhcjCQPuvi73m6u3WhShZ2QQkRTwJcrE-fNMpqFgHEM4YXLqKwCjSuFJd1yIaC2HFOJQa8sSxzd-4jggWT3vCUox7g9tB-VQJdLikC2s9t-pEMa1OiwUXY5TiDvOgkLknu_NV4GryxViyh9UlTaQ9mkWbvy-88iPUfwBjgyQCSULyuxhJ1ajKY87d8h0yrGFfUhB2I5D-ok"
                     image="https://lh3.googleusercontent.com/aida-public/AB6AXuA3YAhKs8A9zMKjhC6Jks3cAweQqngfecKze4KtPV7A3sE08JxpA2rrE3kBKLm8fXL_bbZhftfkMPGUS12mrq-Nwx4E5BwXugtyUprVbDv7SG1sjk_u3H_6HgghSy1dmHBoNw4cNM3pMqrwEMbgf8yQFBGFJGFBXrPwJbveaqsxp9q9a5FNSOLhRkE5x-AHpUPWodtU6MX95zJ2jC8rdlDKdnEMNV4uCmLkLFFAgaruY8actRus8AZZit190Okw7icZYlkSnupnNQ4"
    >

      <template #btn_more>
        <Button class="text-gray-400 hover:text-primary transition-colors bg-transparent border-none p-0">
          <span class="material-icons-round">more_vert</span>
        </Button>
      </template>

      Experimenting with glass morphism in my latest app concept. What do you think about the blur
      intensity here? Is it too much? 🌫️✨

      <template #btn_reaction>
        <Button class="w-10 h-10 rounded-full bg-transparent text-xl hover:scale-125 transition-transform border-2 border-white dark:border-zinc-600 z-30"
                title="Love it">😍
        </Button>
        <div class="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-300 border-2 border-white dark:border-surface-dark z-0">
          +42
        </div>
      </template>

      <template #btn_engagement>
        <Button class="flex items-center bg-transparent border-none gap-1 text-slate-500 dark:text-slate-300 hover:text-primary font-bold text-sm transition-colors">
          <span class="material-icons-round scale-80">chat_bubble_outline</span>
          12 Comments
        </Button>
        <Button class="flex items-center bg-transparent border-none gap-1 text-slate-500 dark:text-slate-300 hover:text-primary font-bold text-sm transition-colors">
          <span class="material-icons-round text-lg">share</span>
          Share
        </Button>
      </template>
    </BasicPostLayout>

    <!-- Post 2: Text Based Question -->
    <article class="bg-linear-to-br from-pastel-purple to-white dark:from-purple-900/20 dark:to-surface-dark rounded-3xl p-8 shadow-soft border border-purple-100 dark:border-white/5 relative overflow-hidden">
      <div class="material-icons-round absolute -right-4 -bottom-4 text-9xl text-purple-100 dark:text-purple-900/30 z-0 rotate-12">lightbulb</div>
      <div class="relative z-10">
        <div class="flex justify-between items-start mb-4">
          <div class="flex items-center gap-3">
            <img alt="Author Avatar"
                 class="w-10 h-10 rounded-full object-cover ring-2 ring-purple-300"
                 data-alt="User avatar of a woman with curly hair"
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuAArIUjmjJCqMmR3VjompwX2etFJmihUnurdggMvLpmgWCtqVGnF-Ohzi6BLH1HVdC_REjTrp5kx_4d6nOtclefawfH7iHSuZ-zf9AdfKsgCMDH5M4hfUrRMHoY35quoFoMIalkV37Lv0WSBq-vZDlAAB14wR2EuSOLRjDl4MMULncusFcOPljzj5ZMCLumnSHTAHu3kbJl_9hbHlmreBBUpH5XzzTHKdVZO95ZyoXx_JNschGLNCGa0owQKOYJviD09eiMe9rTXnI"/>
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white leading-tight">Sarah Jenkins</h3>
              <p class="text-xs text-text-sub dark:text-gray-400 font-medium">5 hours ago • <span
                  class="text-purple-600 bg-purple-50 dark:bg-purple-900/30 px-1.5 py-0.5 rounded-md">Question</span>
              </p>
            </div>
          </div>
        </div>
        <h2
            class="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 leading-tight">
          Designers, what's your go-to font pairing for a modern tech blog? 🤔
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6 font-medium">I'm currently stuck between
          Inter/Playfair or Plus Jakarta/Merriweather. Help me out!</p>
        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-6">
                            <span
                                class="px-3 py-1 bg-white/60 dark:bg-white/10 rounded-lg text-xs font-bold text-purple-700 dark:text-purple-200 border border-purple-100 dark:border-white/10">#Typography</span>
          <span
              class="px-3 py-1 bg-white/60 dark:bg-white/10 rounded-lg text-xs font-bold text-purple-700 dark:text-purple-200 border border-purple-100 dark:border-white/10">#WebDesign</span>
        </div>
        <div class="flex items-center gap-4 border-t border-purple-100 dark:border-white/10 pt-4">
          <button
              class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark rounded-xl shadow-sm text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
            <span class="material-icons-round text-primary">tips_and_updates</span>
            24 Answers
          </button>
          <button
              class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark rounded-xl shadow-sm text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
            <span class="material-icons-round">bookmark_border</span>
            Save
          </button>
        </div>
      </div>
    </article>
    <!-- Post 3: Poll -->
    <article
        class="bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-soft hover:shadow-lg transition-shadow duration-300 border border-gray-50 dark:border-white/5">
      <div class="flex items-center gap-3 mb-4">
        <img alt="Author Avatar" class="w-10 h-10 rounded-full object-cover ring-2 ring-primary"
             data-alt="User avatar of a young man"
             src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4gpXBzfuUNEyIiepn1BSB1KYDcL1TJ5Gl7Ft44xpoqtnmrlLFFAd5XKMLDHsbX9oHkNElifYJNEOWRkzgUAdWuMWgQZGsO34XYu5VcDmfgFecurpM2JHpNMYVJaqlG6bslkAgalIvtJM-Nput9yb0ap86CbnCbftYkWqUWoSc9ls-LMccZmHOL5xndrnJhxdvGi6oI-1eZT8dXBS1sqp4nqhpfyMJgvf2DSyiV03t2qNF8kFF1Jl2oCeChqoSKAy7rxGVAJ5_6GQ"/>
        <div>
          <h3 class="font-bold text-gray-900 dark:text-white leading-tight">Davide Rossi</h3>
          <p class="text-xs text-text-sub dark:text-gray-400 font-medium">Just now • <span
              class="text-green-600 bg-pastel-green dark:bg-green-900/30 px-1.5 py-0.5 rounded-md">Poll</span>
          </p>
        </div>
      </div>
      <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold text-lg">Which color palette vibe for a
        kids' coding app?</p>
      <div class="space-y-3 mb-4">
        <!-- Option 1 -->
        <div class="relative group cursor-pointer">
          <div class="absolute inset-0 bg-pastel-blue rounded-xl w-[70%]"></div>
          <div
              class="relative flex justify-between items-center p-3 border-2 border-transparent group-hover:border-blue-200 rounded-xl z-10">
            <span class="font-bold text-gray-800 dark:text-gray-800">Neon Cyberpunk 👾</span>
            <span class="font-bold text-blue-600">70%</span>
          </div>
        </div>
        <!-- Option 2 -->
        <div class="relative group cursor-pointer">
          <div class="absolute inset-0 bg-gray-100 dark:bg-white/10 rounded-xl w-[30%]"></div>
          <div
              class="relative flex justify-between items-center p-3 border-2 border-transparent group-hover:border-gray-200 rounded-xl z-10">
            <span class="font-bold text-gray-800 dark:text-gray-200">Soft Pastels 🍦</span>
            <span class="font-bold text-gray-500">30%</span>
          </div>
        </div>
      </div>
      <div class="text-xs text-text-sub dark:text-gray-400 font-medium">158 votes • 2 days left</div>
    </article>
  </div>

  <!-- Loading Indicator -->
  <div class="py-8 flex justify-center">
    <div class="animate-bounce w-3 h-3 bg-primary rounded-full mx-1"></div>
    <div class="animate-bounce w-3 h-3 bg-primary/70 rounded-full mx-1 animation-delay-100"></div>
    <div class="animate-bounce w-3 h-3 bg-primary/40 rounded-full mx-1 animation-delay-200"></div>
  </div>
</template>

<style scoped>

</style>