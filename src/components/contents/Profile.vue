<script setup lang="ts">

</script>

<template>

  <div class="flex items-center gap-6 relative">
    <div class="relative group">
      <div class="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-white dark:bg-surface-dark shadow-lg ring-4 ring-white dark:ring-surface-dark">
        <Avatar
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAU1DHmhRcmxtXH6PQlFigWs50SLdwYlPhprdF5-CFUraKuqlv3GTxYo6_bovEtD_K4IVmQIzR8BytqS_GHOvvYl4W1WNmo-LVy8SPCW92_2vINM6Ue24eBpIPMBDPMQ6Cnx8iY0LcE_yKbt_henje6HIjHkoKI7F0N48qLJ0HgP79WJkK0yt1JzOir-Vn1S1r1kONl2lRNy15gTs9LSduHtuqhHjTMAphp3Idjd1tfoT84st16GFWQTOJVOwNGD84Llh6cppL57co"
            class="w-full h-full rounded-full object-cover"
            size="xlarge"
            shape="circle"/>
      </div>
      <div class="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-surface-dark"></div>
    </div>

    <div class="flex-1 pb-2 text-center md:text-left">
      <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-1 w-full">
        <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Mia Creative
        </h1>
        <div class="inline-flex items-center gap-1 px-3 py-1 bg-background-secondary text-primary dark:text-primary rounded-full text-xs font-bold border border-primary">
          <span class="material-icons-round scale-70">auto_awesome</span>
          <span>Rising Star</span>
        </div>
      </div>
      <p class="text-text-sub dark:text-gray-400 font-medium text-sm md:text-base mb-2">@miamakes</p>
    </div>

    <div class="absolute right-0 bottom-0">
      <div class="flex gap-3 items-center">
        <Button class="px-6 border-transparent bg-primary hover:bg-primary-hover text-white rounded-xl font-bold shadow-glow transition-all active:scale-95">
          <span class="material-icons-round text-sm">person_add</span>
          <span>Follow</span>
        </Button>

        <Button class="px-4 bg-white dark:bg-surface-dark text-slate-500 dark:text-slate-300 border border-gray-200 dark:border-white/10 hover:border-primary hover:text-primary rounded-xl font-bold transition-all">
          <span class="material-icons-round">mail</span>
        </Button>

        <Button class="px-4 bg-white dark:bg-surface-dark text-slate-500 dark:text-slate-300 border border-gray-200 dark:border-white/10 hover:border-primary hover:text-primary rounded-xl font-bold transition-all">
          <span class="material-icons-round">more_horiz</span>
        </Button>
      </div>
    </div>
  </div>

  <div class="flex flex-col xl:flex-row gap-6">
    <div class="w-full xl:w-1/3 space-y-6">
      <div class="bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-soft border border-gray-50 dark:border-white/5">
        <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
          <span class="material-icons-round text-primary">face</span>
          About Me
        </h3>

        <p class="text-slate-600 dark:text-slate-300 mb-4 text-sm">
          Hey! I'm Mia, a visual storyteller obsessed with vibrant colors and soft shapes.
          Currently exploring the world of 3D illustration and interactive web design. Let's make
          something magical! ✨
        </p>

        <div class="flex flex-wrap gap-2 mb-4">
          <div class="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-lg text-xs font-bold text-gray-600 dark:text-gray-400">📍
            San Francisco
          </div>
          <div class="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-lg text-xs font-bold text-gray-600 dark:text-gray-400">🔗
            miacreates.com
          </div>
          <div class="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-lg text-xs font-bold text-gray-600 dark:text-gray-400">🎈
            Since 2021
          </div>
        </div>
      </div>
      <div
          class="bg-linear-to-br from-pastel-purple to-white dark:from-purple-900/20 dark:to-surface-dark rounded-3xl p-6 shadow-soft border border-purple-100 dark:border-white/5 relative overflow-hidden">
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <p
                class="text-xs font-bold text-purple-600 dark:text-purple-300 uppercase tracking-wider mb-1">
              Creative Spark</p>
            <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white">8,450</h2>
          </div>
          <div
              class="w-16 h-16 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center text-purple-500 shadow-sm">
            <span class="material-icons-round text-3xl">bolt</span>
          </div>
        </div>
        <div class="mt-4 bg-white/50 dark:bg-black/20 rounded-full h-2 w-full overflow-hidden">
          <div class="bg-gradient-to-r from-purple-400 to-primary h-full rounded-full"
               style="width: 75%"></div>
        </div>
        <p class="text-xs text-text-sub mt-2 font-medium">Top 5% of creators this week!</p>
      </div>
      <div
          class="bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-soft border border-gray-50 dark:border-white/5">
        <div class="flex justify-between items-center mb-4">
          <h3 class="font-bold text-lg">Badges</h3>
          <a class="text-primary text-xs font-bold hover:underline" href="#">View All</a>
        </div>
        <div class="grid grid-cols-4 gap-2">
          <div class="aspect-square bg-pastel-blue rounded-xl flex items-center justify-center text-2xl"
               title="Early Bird">🐦
          </div>
          <div class="aspect-square bg-pastel-rose rounded-xl flex items-center justify-center text-2xl"
               title="Design Guru">🎨
          </div>
          <div class="aspect-square bg-pastel-green rounded-xl flex items-center justify-center text-2xl"
               title="Helpful Hand">🤝
          </div>
          <div class="aspect-square bg-pastel-yellow rounded-xl flex items-center justify-center text-2xl"
               title="Top Writer">✍️
          </div>
        </div>
      </div>
    </div>

    <div class="w-full xl:w-2/3">
      <div
          class="flex gap-2 mb-6 overflow-x-auto pb-2 hide-scrollbar border-b border-gray-200 dark:border-white/10">
        <button
            class="px-6 py-3 border-b-2 border-primary text-primary font-bold whitespace-nowrap bg-primary/5 rounded-t-lg transition-colors">
          My Sparks <span
            class="ml-2 bg-primary/20 text-primary-hover px-2 py-0.5 rounded-full text-xs">24</span>
        </button>
        <button
            class="px-6 py-3 border-b-2 border-transparent text-text-sub dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-bold whitespace-nowrap rounded-t-lg transition-colors">
          Doodles <span
            class="ml-2 bg-gray-100 dark:bg-white/10 text-gray-500 px-2 py-0.5 rounded-full text-xs">12</span>
        </button>
        <button
            class="px-6 py-3 border-b-2 border-transparent text-text-sub dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-bold whitespace-nowrap rounded-t-lg transition-colors">
          Achievements
        </button>
        <button
            class="px-6 py-3 border-b-2 border-transparent text-text-sub dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-bold whitespace-nowrap rounded-t-lg transition-colors">
          About
        </button>
      </div>
      <div class="space-y-6">
        <article
            class="bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-soft hover:shadow-lg transition-shadow duration-300 border-2 border-primary/10 relative">
          <div
              class="absolute -top-3 left-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
            <span class="material-icons-round text-xs">push_pin</span> Pinned Spark
          </div>
          <div class="mt-2 flex justify-between items-start mb-4">
            <div class="flex items-center gap-3">
              <img alt="Author Avatar"
                   class="w-10 h-10 rounded-full object-cover ring-2 ring-primary p-0.5"
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvV2IlEFrCJcKLAzF5-K68N_fXQxygWEVLpTohkbN_p0jwAS2MERTiNgzaGLsaqK-dFGd-CZ5acWA_S2GH3-4vxj3UFyO_O6w1dRPGq7uq-rSku6TI3uhkTpCnqaKqItTyy9vxbcXSbZCbWBEticdNj5vXJJc75YFS6JQbg5evWAD9Y83yIDoLv5aY6XY1yRUCWNI6ItAURTeYUW81qSsub6oFKx59N4lQB42uOHayGSHLUOqeCw5ZbwWCkODrUfWb5Qp_wuDiHAs"/>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white leading-tight">Mia
                  Creative</h3>
                <p class="text-xs text-text-sub dark:text-gray-400 font-medium">3 days ago •
                  <span
                      class="text-orange-500 bg-orange-50 dark:bg-orange-900/30 px-1.5 py-0.5 rounded-md">Illustration</span>
                </p>
              </div>
            </div>
            <button class="text-gray-400 hover:text-primary transition-colors"><span
                class="material-icons-round">more_vert</span></button>
          </div>
          <p class="text-gray-700 dark:text-gray-300 mb-4 font-medium leading-relaxed">
            Finally finished my "Neon Dreams" collection! 🌃 It's been a month of late nights
            and endless color adjustments, but I'm so happy with how it turned out. Swipe to see
            the process! 👇
          </p>
          <div class="grid grid-cols-2 gap-2 mb-5 rounded-2xl overflow-hidden h-64">
            <img alt="Neon city illustration" class="w-full h-full object-cover"
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3YAhKs8A9zMKjhC6Jks3cAweQqngfecKze4KtPV7A3sE08JxpA2rrE3kBKLm8fXL_bbZhftfkMPGUS12mrq-Nwx4E5BwXugtyUprVbDv7SG1sjk_u3H_6HgghSy1dmHBoNw4cNM3pMqrwEMbgf8yQFBGFJGFBXrPwJbveaqsxp9q9a5FNSOLhRkE5x-AHpUPWodtU6MX95zJ2jC8rdlDKdnEMNV4uCmLkLFFAgaruY8actRus8AZZit190Okw7icZYlkSnupnNQ4"/>
            <div
                class="relative w-full h-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <img alt="Process sketch" class="w-full h-full object-cover opacity-80"
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJoqEJU32ihRWSg-gawTiBoNLDRbtxejmoG40PrsGML8qu9NUgycesZq6E80BgV-n9nsBwjLYBxW03fIjqFB7r3rDqDXCljp92HNYP1mdz0KTKfB7jtkCsK45mmrWw7jsmR3TWevS4SnX8VWgc-tA0RyObUA27ARZrWw49VKQ090letM7EnDl63vYVxPGDeoDG351W55yPPGeVaXoaLtishLbQqVR-XnHugfrKLR4wIcHZCt-7pAThmMBrTocOy7mOgZDdGjCQeLs"/>
              <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                                            <span class="text-white font-bold text-lg flex items-center gap-2"><span
                                                class="material-icons-round">collections</span> +3</span>
              </div>
            </div>
          </div>
          <div
              class="flex items-center justify-between pt-2 border-t border-gray-50 dark:border-white/5">
            <div class="flex -space-x-2">
              <div
                  class="w-8 h-8 rounded-full bg-pastel-rose flex items-center justify-center text-sm border-2 border-white">
                🔥
              </div>
              <div
                  class="w-8 h-8 rounded-full bg-pastel-blue flex items-center justify-center text-sm border-2 border-white">
                💙
              </div>
              <div
                  class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500 border-2 border-white pl-1">
                +128
              </div>
            </div>
            <div class="flex gap-4">
              <button
                  class="flex items-center gap-1.5 text-text-sub dark:text-gray-400 hover:text-primary font-bold text-sm transition-colors">
                <span class="material-icons-round text-lg">chat_bubble_outline</span>
                24
              </button>
              <button
                  class="flex items-center gap-1.5 text-text-sub dark:text-gray-400 hover:text-primary font-bold text-sm transition-colors">
                <span class="material-icons-round text-lg">share</span>
              </button>
            </div>
          </div>
        </article>
        <article
            class="bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-soft hover:shadow-lg transition-shadow duration-300 border border-gray-50 dark:border-white/5">
          <div class="flex justify-between items-start mb-4">
            <div class="flex items-center gap-3">
              <img alt="Author Avatar"
                   class="w-10 h-10 rounded-full object-cover ring-2 ring-primary p-0.5"
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvV2IlEFrCJcKLAzF5-K68N_fXQxygWEVLpTohkbN_p0jwAS2MERTiNgzaGLsaqK-dFGd-CZ5acWA_S2GH3-4vxj3UFyO_O6w1dRPGq7uq-rSku6TI3uhkTpCnqaKqItTyy9vxbcXSbZCbWBEticdNj5vXJJc75YFS6JQbg5evWAD9Y83yIDoLv5aY6XY1yRUCWNI6ItAURTeYUW81qSsub6oFKx59N4lQB42uOHayGSHLUOqeCw5ZbwWCkODrUfWb5Qp_wuDiHAs"/>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white leading-tight">Mia
                  Creative</h3>
                <p class="text-xs text-text-sub dark:text-gray-400 font-medium">5 hours ago
                  • <span
                      class="text-purple-600 bg-purple-50 dark:bg-purple-900/30 px-1.5 py-0.5 rounded-md">Thought</span>
                </p>
              </div>
            </div>
            <button class="text-gray-400 hover:text-primary transition-colors"><span
                class="material-icons-round">more_vert</span></button>
          </div>
          <p class="text-gray-800 dark:text-gray-200 text-lg font-medium leading-relaxed mb-2">
            Anyone else feeling like the "Minimalism" trend is slowly fading away? I'm seeing so
            much more maximalism, complex gradients, and brutalist layouts lately. Thoughts? 🤔
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
                                    <span
                                        class="text-primary text-xs font-bold hover:underline cursor-pointer">#DesignTrends</span>
            <span
                class="text-primary text-xs font-bold hover:underline cursor-pointer">#UIUX</span>
          </div>
          <div
              class="flex items-center justify-between pt-2 border-t border-gray-50 dark:border-white/5">
            <div class="text-xs font-bold text-text-sub">45 Likes • 12 Comments</div>
            <div class="flex gap-4">
              <button
                  class="flex items-center gap-1.5 text-text-sub dark:text-gray-400 hover:text-primary font-bold text-sm transition-colors">
                <span class="material-icons-round text-lg">favorite_border</span>
                Like
              </button>
              <button
                  class="flex items-center gap-1.5 text-text-sub dark:text-gray-400 hover:text-primary font-bold text-sm transition-colors">
                <span class="material-icons-round text-lg">chat_bubble_outline</span>
                Reply
              </button>
            </div>
          </div>
        </article>
        <article
            class="bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-soft hover:shadow-lg transition-shadow duration-300 border border-gray-50 dark:border-white/5">
          <div class="flex justify-between items-start mb-4">
            <div class="flex items-center gap-3">
              <img alt="Author Avatar"
                   class="w-10 h-10 rounded-full object-cover ring-2 ring-primary p-0.5"
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvV2IlEFrCJcKLAzF5-K68N_fXQxygWEVLpTohkbN_p0jwAS2MERTiNgzaGLsaqK-dFGd-CZ5acWA_S2GH3-4vxj3UFyO_O6w1dRPGq7uq-rSku6TI3uhkTpCnqaKqItTyy9vxbcXSbZCbWBEticdNj5vXJJc75YFS6JQbg5evWAD9Y83yIDoLv5aY6XY1yRUCWNI6ItAURTeYUW81qSsub6oFKx59N4lQB42uOHayGSHLUOqeCw5ZbwWCkODrUfWb5Qp_wuDiHAs"/>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white leading-tight">Mia
                  Creative</h3>
                <p class="text-xs text-text-sub dark:text-gray-400 font-medium">1 day ago •
                  <span
                      class="text-green-600 bg-pastel-green dark:bg-green-900/30 px-1.5 py-0.5 rounded-md">Project</span>
                </p>
              </div>
            </div>
            <button class="text-gray-400 hover:text-primary transition-colors"><span
                class="material-icons-round">more_vert</span></button>
          </div>
          <p class="text-gray-700 dark:text-gray-300 mb-4 font-medium leading-relaxed">
            WIP for the new eco-friendly brand identity. Trying to keep it organic but modern.
            🌿
          </p>
          <div class="rounded-2xl overflow-hidden mb-5 relative group">
            <img alt="Green organic branding design"
                 class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuAArIUjmjJCqMmR3VjompwX2etFJmihUnurdggMvLpmgWCtqVGnF-Ohzi6BLH1HVdC_REjTrp5kx_4d6nOtclefawfH7iHSuZ-zf9AdfKsgCMDH5M4hfUrRMHoY35quoFoMIalkV37Lv0WSBq-vZDlAAB14wR2EuSOLRjDl4MMULncusFcOPljzj5ZMCLumnSHTAHu3kbJl_9hbHlmreBBUpH5XzzTHKdVZO95ZyoXx_JNschGLNCGa0owQKOYJviD09eiMe9rTXnI"/>
          </div>
          <div class="flex items-center justify-between pt-2">
            <div class="flex -space-x-3 hover:space-x-1 transition-all duration-300">
              <button
                  class="w-8 h-8 rounded-full bg-pastel-green flex items-center justify-center text-sm shadow-sm border-2 border-white z-20">🍃
              </button>
              <button
                  class="w-8 h-8 rounded-full bg-pastel-yellow flex items-center justify-center text-sm shadow-sm border-2 border-white z-10">✨
              </button>
              <div
                  class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500 border-2 border-white z-0 pl-1">
                +84
              </div>
            </div>
            <div class="flex gap-4">
              <button
                  class="flex items-center gap-1.5 text-text-sub dark:text-gray-400 hover:text-primary font-bold text-sm transition-colors">
                <span class="material-icons-round text-lg">chat_bubble_outline</span>
                8
              </button>
              <button
                  class="flex items-center gap-1.5 text-text-sub dark:text-gray-400 hover:text-primary font-bold text-sm transition-colors">
                <span class="material-icons-round text-lg">share</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>