<script setup>

</script>

<template>
  <!-- Right Sidebar (Trending) -->
  <aside class="hidden lg:block w-80 sticky top-0 h-screen p-6 border-l border-gray-100 dark:border-white/5 overflow-y-auto text-slate-800 dark:text-white">
    <!-- Weekly Challenge Card -->
    <div class="bg-linear-to-br from-primary to-primary-hover rounded-3xl p-5 mb-8 text-white shadow-glow relative overflow-hidden">
      <div class="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -mr-8 -mt-8 blur-xl"></div>

      <div class="relative z-10">
        <div class="flex items-center gap-2 mb-2 opacity-90">
          <span class="material-icons-round text-white">emoji_events</span>
          <span class="text-xs font-bold uppercase tracking-wider">Weekly Challenge</span>
        </div>

        <h3 class="font-extrabold text-xl mb-2">Draw a Duck 🦆</h3>
        <p class="text-sm opacity-90 mb-4 font-medium">
          Create your best duck illustration in any style!
          Winner gets a "Quacktastic" badge.</p>
        <Button class="w-full bg-white border-none text-primary font-bold rounded-xl shadow-lg hover:bg-slate-100 transition-colors text-sm">Join
          Challenge
        </Button>
      </div>
    </div>

    <!-- Rising Stars -->
    <div class="mb-8">
      <div class="flex justify-between items-center mb-4 px-1">
        <h3 class="font-extrabold text-slate-800 dark:text-white">Rising Stars ✨</h3>
        <a class="text-primary text-xs font-bold hover:underline" href="#">View All</a>
      </div>

      <div class="space-y-2">
        <!-- Star 1 -->
        <div class="flex items-center gap-3 p-2 hover:bg-white dark:hover:bg-zinc-600 rounded-2xl transition-colors cursor-pointer group">
          <Avatar shape="circle"
                  size="large"
                  class="object-cover ring-2 ring-transparent group-hover:ring-primary transition-all"
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuDeti6pOCliG1BCaSGbyoPRsEfw1p_3tPthXOG0Q2pvS_EetKFJUBAxtNZ6lt4NxD_AOXJh4EihQi3mx3VINbl-_zSCqPQ8jb8uEsEYRXFNfB77djG6O-gjpNTc6q-SMqRIGhXt3uCQra6MMpunjAZxvn2cdb_YUiSa91KDzMHZcVN8tXsAOCDHCnPReNxHDriZR9ysf52xzi-zOopeyrxIWlTN6y9TWgfQpyYWJwD5-49bNpCaqlyGoHoh4bEQ6vyJXq_KW3L4-pg"
          />

          <div class="flex-1 min-w-0">
            <h4 class="font-bold text-sm truncate">Elena Code</h4>
            <p class="text-xs text-slate-500 dark:text-slate-300 truncate">Frontend Wizard</p>
          </div>

          <Button class="w-8 h-8 rounded-full border-none bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
            <span class="material-icons-round">add</span>
          </Button>
        </div>

        <!-- Star 2 -->
        <div class="flex items-center gap-3 p-2 hover:bg-white dark:hover:bg-zinc-600 rounded-2xl transition-colors cursor-pointer group">
          <Avatar shape="circle"
                  size="large"
                  class="object-cover ring-2 ring-transparent group-hover:ring-primary transition-all"
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuAPFGQVW7PblGhMSIl2TGymd4JA398wXZTtMc3ngvrkGnHmMuMshTrBIyST34HreVr2UTCmyg86MPXxLXA8MIgLdJ_CA3nKe_Sf03WNDydQhTijuHV-qlqHZwJhEkl4GZBqrOlbodLvvUMM_W8AOmI_WL6_YrCuHATIYw3eb4PGWjpMZ5zkKi94KugJqy_EEh-OQ4MGCqZy6LlmuQpiw-svQCUQRX2I89wWnF41kPE1M71eEtf7-CSHx-k6ZweOoCu0xJWttfJhJDY"
          />

          <div class="flex-1 min-w-0">
            <h4 class="font-bold text-sm truncate">Markus Draw</h4>
            <p class="text-xs text-slate-500 dark:text-slate-300 truncate">Illustrator</p>
          </div>

          <Button class="w-8 h-8 rounded-full border-none bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
            <span class="material-icons-round">add</span>
          </Button>
        </div>

        <!-- Star 3 -->
        <div class="flex items-center gap-3 p-2 hover:bg-white dark:hover:bg-zinc-600 rounded-2xl transition-colors cursor-pointer group">
          <Avatar shape="circle"
                  size="large"
                  class="object-cover ring-2 ring-transparent group-hover:ring-primary transition-all"
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuDJoqEJU32ihRWSg-gawTiBoNLDRbtxejmoG40PrsGML8qu9NUgycesZq6E80BgV-n9nsBwjLYBxW03fIjqFB7r3rDqDXCljp92HNYP1mdz0KTKfB7jtkCsK45mmrWw7jsmR3TWevS4SnX8VWgc-tA0RyObUA27ARZrWw49VKQ090letM7EnDl63vYVxPGDeoDG351W55yPPGeVaXoaLtishLbQqVR-XnHugfrKLR4wIcHZCt-7pAThmMBrTocOy7mOgZDdGjCQeLs"
          />

          <div class="flex-1 min-w-0">
            <h4 class="font-bold text-sm truncate">Jessie Type</h4>
            <p class="text-xs text-slate-500 dark:text-slate-300 truncate">Lettering Artist</p>
          </div>

          <Button class="w-8 h-8 rounded-full border-none bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
            <span class="material-icons-round">add</span>
          </Button>
        </div>
      </div>
    </div>

    <!-- Trending Topics -->
    <div class="bg-white dark:bg-zinc-800 rounded-3xl p-5 border border-gray-50 dark:border-white/5">
      <h3 class="font-extrabold text-slate-800 dark:text-white mb-4 px-1">
        Hot Topics 🔥
      </h3>

      <div class="flex flex-wrap gap-2">
        <p class="px-2 py-1.5 bg-slate-50 dark:bg-white/5 rounded-xl text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">#GenerativeArt</p>
        <p class="px-2 py-1.5 bg-slate-50 dark:bg-white/5 rounded-xl text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">#Figmaplugins</p>
        <p class="px-2 py-1.5 bg-slate-50 dark:bg-white/5 rounded-xl text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">#PortfolioHelp</p>
        <p class="px-2 py-1.5 bg-slate-50 dark:bg-white/5 rounded-xl text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">#DailyUI</p>
        <p class="px-2 py-1.5 bg-slate-50 dark:bg-white/5 rounded-xl text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">#Inspiration</p>
      </div>
    </div>

    <div class="mt-8 text-xs text-slate-500 dark:text-slate-300 text-center font-medium">
      <p>© 2026 Sparkle Inc. • <a class="hover:text-primary" href="#">Privacy</a> • <a class="hover:text-primary" href="#">Terms</a></p>
    </div>
  </aside>
</template>

<style scoped>

</style>