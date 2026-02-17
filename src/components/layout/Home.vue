<script setup>
import {ref} from 'vue'
const postText = ref("");

</script>

<template>
  <body class="bg-background-color-light dark:bg-zinc-900 text-slate-700 dark:text-white antialiased min-h-screen">
  <!-- Navbar (Mobile/Tablet Top) & Desktop Wrapper -->
  <div class="max-w-360 mx-auto min-h-screen flex flex-col md:flex-row">
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
      <div class="mt-auto pt-6 border-t border-gray-100 dark:border-white/5">
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

    <!-- Main Feed Area -->
    <main class="flex-1 flex flex-col gap-6 p-4 md:p-8 overflow-y-auto">

      <!-- Mobile Header -->
      <div class="md:hidden flex justify-between items-center">
        <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
          <span class="material-icons-round">bubble_chart</span>
        </div>
        <img alt="User profile" class="w-10 h-10 rounded-full object-cover ring-2 ring-primary p-0.5"
             data-alt="User profile picture mobile"
             src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUPG5P1tJsDey9WeB9VpGEkgV9HUQyuO72663oLuGjYAuG8G-v5C_BfmyWuKyZBnwLpo8UBRpSGwnd85X4bzulS0ZopRxypunQsm6j1FC2-AQdfiNn6Tccc1LTq_oHPDJbWyWVvnXQHIw2Pk5VfKPrLvbhPylsNR6lxk694VKE6budOgNjiGkHQu6244kQM5uXDYEeFFja3jAa9JaglhmK1jV1ZI9j97ZrNW8KhfHi_UGcyAJulIFCBfIly_PwedAyDfP5LNH0MFc"/>
      </div>

      <!-- Search Bar (Top) -->
      <div class="flex items-center relative">
        <span class="material-icons-round absolute left-4 text-slate-500 dark:text-slate-300">search</span>
        <InputText class="w-full h-12 rounded-full pl-12 bg-background-white dark:bg-zinc-600 shadow-none focus:border-primary"
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
                      class="w-full bg-transparent border-none shadow-none appearance-none max-h-3rem placeholder-gray-400"/>

            <div class="flex flex-wrap items-center justify-between mt-4 gap-4">
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

              <Button class="bg-primary hover:bg-primary-hover border-none text-white px-6 rounded-full font-bold shadow-none transition-all active:scale-95 flex items-center gap-2">
                <span>Spark It</span>
                <span class="material-icons-round scale-80">send</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <!-- Filter Tabs -->
      <div class="flex gap-3 overflow-x-scroll hide-scrollbar">
        <Button class="px-5 py-2 border-transparent bg-gray-900 dark:bg-white text-white dark:text-black rounded-full text-sm font-bold whitespace-nowrap">
          For You
        </Button>

        <Button class="px-5 py-2 border-transparent bg-white dark:bg-zinc-600 text-slate-500 dark:text-slate-100 rounded-full text-sm font-bold hover:border-primary hover:text-primary transition-colors whitespace-nowrap">
          Illustrations
        </Button>

        <Button class="px-5 py-2 border-transparent bg-white dark:bg-zinc-600 text-slate-500 dark:text-slate-100 rounded-full text-sm font-bold hover:border-primary hover:text-primary transition-colors whitespace-nowrap">UI
          Design
        </Button>

        <Button class="px-5 py-2 border-transparent bg-white dark:bg-zinc-600 text-slate-500 dark:text-slate-100 rounded-full text-sm font-bold hover:border-primary hover:text-primary transition-colors whitespace-nowrap">
          Photography
        </Button>

        <Button class="px-5 py-2 border-transparent bg-white dark:bg-zinc-600 text-slate-500 dark:text-slate-100 rounded-full text-sm font-bold hover:border-primary hover:text-primary transition-colors whitespace-nowrap">
          Typography
        </Button>
      </div>

      <!-- Feed Content -->
      <div class="space-y-6">

        <!-- Post 1: Image Showcase -->
        <article class="bg-white dark:bg-zinc-800 rounded-3xl p-6 shadow-soft hover:shadow-lg transition-shadow duration-300 border border-gray-50 dark:border-white/5">
          <div class="flex justify-between items-start mb-4">
            <div class="flex items-center gap-3">
              <div class="relative">
                <img alt="Author Avatar"
                     class="w-10 h-10 rounded-full object-cover ring-2 ring-pastel-blue"
                     data-alt="User avatar of a man with glasses"
                     src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6ZGQ-5CZrNFEX45_OXNZJ3urYQWTZhrkpH2HKKVnCPow5Ym0J8EhX9AIyCXq4-mOdUhcjCQPuvi73m6u3WhShZ2QQkRTwJcrE-fNMpqFgHEM4YXLqKwCjSuFJd1yIaC2HFOJQa8sSxzd-4jggWT3vCUox7g9tB-VQJdLikC2s9t-pEMa1OiwUXY5TiDvOgkLknu_NV4GryxViyh9UlTaQ9mkWbvy-88iPUfwBjgyQCSULyuxhJ1ajKY87d8h0yrGFfUhB2I5D-ok"/>
                <div
                    class="absolute -bottom-1 -right-1 bg-green-400 w-3 h-3 rounded-full border-2 border-white dark:border-surface-dark">
                </div>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white leading-tight">Alex Rivera</h3>
                <p class="text-xs text-text-sub dark:text-gray-400 font-medium">2 hours ago • <span
                    class="text-blue-500 bg-blue-50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded-md">UX
                                        Design</span></p>
              </div>
            </div>
            <button class="text-gray-400 hover:text-primary transition-colors"><span
                class="material-icons-round">more_vert</span></button>
          </div>
          <p class="text-gray-700 dark:text-gray-300 mb-4 font-medium leading-relaxed">
            Experimenting with glassmorphism in my latest app concept. What do you think about the blur
            intensity here? Is it too much? 🌫️✨
          </p>
          <div class="rounded-2xl overflow-hidden mb-5 relative group">
            <img alt="Abstract colorful fluid shapes design"
                 class="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                 data-alt="Abstract colorful fluid gradient shapes"
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3YAhKs8A9zMKjhC6Jks3cAweQqngfecKze4KtPV7A3sE08JxpA2rrE3kBKLm8fXL_bbZhftfkMPGUS12mrq-Nwx4E5BwXugtyUprVbDv7SG1sjk_u3H_6HgghSy1dmHBoNw4cNM3pMqrwEMbgf8yQFBGFJGFBXrPwJbveaqsxp9q9a5FNSOLhRkE5x-AHpUPWodtU6MX95zJ2jC8rdlDKdnEMNV4uCmLkLFFAgaruY8actRus8AZZit190Okw7icZYlkSnupnNQ4"/>
          </div>
          <!-- Expressive Reactions -->
          <div class="flex items-center justify-between pt-2">
            <div class="flex -space-x-3 hover:space-x-1 transition-all duration-300">
              <button
                  class="w-10 h-10 rounded-full bg-pastel-rose flex items-center justify-center text-xl hover:scale-125 transition-transform shadow-sm border-2 border-white dark:border-surface-dark z-30"
                  title="Love it">😍
              </button>
              <button
                  class="w-10 h-10 rounded-full bg-pastel-blue flex items-center justify-center text-xl hover:scale-125 transition-transform shadow-sm border-2 border-white dark:border-surface-dark z-20"
                  title="Cool">❄️
              </button>
              <button
                  class="w-10 h-10 rounded-full bg-pastel-purple flex items-center justify-center text-xl hover:scale-125 transition-transform shadow-sm border-2 border-white dark:border-surface-dark z-10"
                  title="Creative">🎨
              </button>
              <div
                  class="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-300 border-2 border-white dark:border-surface-dark z-0 pl-1">
                +42
              </div>
            </div>
            <div class="flex gap-4">
              <button
                  class="flex items-center gap-1.5 text-text-sub dark:text-gray-400 hover:text-primary font-bold text-sm transition-colors">
                <span class="material-icons-round text-lg">chat_bubble_outline</span>
                12 Comments
              </button>
              <button
                  class="flex items-center gap-1.5 text-text-sub dark:text-gray-400 hover:text-primary font-bold text-sm transition-colors">
                <span class="material-icons-round text-lg">share</span>
                Share
              </button>
            </div>
          </div>
        </article>
        <!-- Post 2: Text Based Question -->
        <article
            class="bg-gradient-to-br from-pastel-purple to-white dark:from-purple-900/20 dark:to-surface-dark rounded-3xl p-8 shadow-soft border border-purple-100 dark:border-white/5 relative overflow-hidden">
                    <span
                        class="material-icons-round absolute -right-4 -bottom-4 text-9xl text-purple-100 dark:text-purple-900/30 -z-0 rotate-12">lightbulb</span>
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
    </main>
    <!-- Right Sidebar (Trending) -->
    <aside
        class="hidden lg:block w-80 sticky top-0 h-screen p-6 border-l border-gray-100 dark:border-white/5 overflow-y-auto">
      <!-- Weekly Challenge Card -->
      <div
          class="bg-gradient-to-br from-primary to-orange-400 rounded-3xl p-5 mb-8 text-white shadow-glow relative overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -mr-8 -mt-8 blur-xl"></div>
        <div class="relative z-10">
          <div class="flex items-center gap-2 mb-2 opacity-90">
            <span class="material-icons-round text-sm">emoji_events</span>
            <span class="text-xs font-bold uppercase tracking-wider">Weekly Challenge</span>
          </div>
          <h3 class="font-extrabold text-xl mb-2">Draw a Duck 🦆</h3>
          <p class="text-sm opacity-90 mb-4 font-medium">Create your best duck illustration in any style!
            Winner gets a "Quacktastic" badge.</p>
          <button
              class="w-full bg-white text-primary font-bold py-2.5 rounded-xl shadow-lg hover:bg-orange-50 transition-colors text-sm">Join
            Challenge
          </button>
        </div>
      </div>
      <!-- Rising Stars -->
      <div class="mb-8">
        <div class="flex justify-between items-center mb-4 px-1">
          <h3 class="font-extrabold text-gray-900 dark:text-white">Rising Stars ✨</h3>
          <a class="text-primary text-xs font-bold hover:underline" href="#">View All</a>
        </div>
        <div class="space-y-4">
          <!-- Star 1 -->
          <div
              class="flex items-center gap-3 p-2 hover:bg-white dark:hover:bg-surface-dark rounded-2xl transition-colors cursor-pointer group">
            <div class="relative">
              <img alt="User"
                   class="w-12 h-12 rounded-full object-cover ring-2 ring-transparent group-hover:ring-primary transition-all"
                   data-alt="Profile picture of a woman looking away"
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeti6pOCliG1BCaSGbyoPRsEfw1p_3tPthXOG0Q2pvS_EetKFJUBAxtNZ6lt4NxD_AOXJh4EihQi3mx3VINbl-_zSCqPQ8jb8uEsEYRXFNfB77djG6O-gjpNTc6q-SMqRIGhXt3uCQra6MMpunjAZxvn2cdb_YUiSa91KDzMHZcVN8tXsAOCDHCnPReNxHDriZR9ysf52xzi-zOopeyrxIWlTN6y9TWgfQpyYWJwD5-49bNpCaqlyGoHoh4bEQ6vyJXq_KW3L4-pg"/>
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="font-bold text-gray-900 dark:text-white text-sm truncate">Elena Code</h4>
              <p class="text-xs text-text-sub dark:text-gray-400 truncate">Frontend Wizard</p>
            </div>
            <button
                class="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <span class="material-icons-round text-sm">add</span>
            </button>
          </div>
          <!-- Star 2 -->
          <div
              class="flex items-center gap-3 p-2 hover:bg-white dark:hover:bg-surface-dark rounded-2xl transition-colors cursor-pointer group">
            <div class="relative">
              <img alt="User"
                   class="w-12 h-12 rounded-full object-cover ring-2 ring-transparent group-hover:ring-primary transition-all"
                   data-alt="Profile picture of a man smiling"
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPFGQVW7PblGhMSIl2TGymd4JA398wXZTtMc3ngvrkGnHmMuMshTrBIyST34HreVr2UTCmyg86MPXxLXA8MIgLdJ_CA3nKe_Sf03WNDydQhTijuHV-qlqHZwJhEkl4GZBqrOlbodLvvUMM_W8AOmI_WL6_YrCuHATIYw3eb4PGWjpMZ5zkKi94KugJqy_EEh-OQ4MGCqZy6LlmuQpiw-svQCUQRX2I89wWnF41kPE1M71eEtf7-CSHx-k6ZweOoCu0xJWttfJhJDY"/>
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="font-bold text-gray-900 dark:text-white text-sm truncate">Markus Draw</h4>
              <p class="text-xs text-text-sub dark:text-gray-400 truncate">Illustrator</p>
            </div>
            <button
                class="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <span class="material-icons-round text-sm">add</span>
            </button>
          </div>
          <!-- Star 3 -->
          <div
              class="flex items-center gap-3 p-2 hover:bg-white dark:hover:bg-surface-dark rounded-2xl transition-colors cursor-pointer group">
            <div class="relative">
              <img alt="User"
                   class="w-12 h-12 rounded-full object-cover ring-2 ring-transparent group-hover:ring-primary transition-all"
                   data-alt="Profile picture of a woman smiling brightly"
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJoqEJU32ihRWSg-gawTiBoNLDRbtxejmoG40PrsGML8qu9NUgycesZq6E80BgV-n9nsBwjLYBxW03fIjqFB7r3rDqDXCljp92HNYP1mdz0KTKfB7jtkCsK45mmrWw7jsmR3TWevS4SnX8VWgc-tA0RyObUA27ARZrWw49VKQ090letM7EnDl63vYVxPGDeoDG351W55yPPGeVaXoaLtishLbQqVR-XnHugfrKLR4wIcHZCt-7pAThmMBrTocOy7mOgZDdGjCQeLs"/>
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="font-bold text-gray-900 dark:text-white text-sm truncate">Jessie Type</h4>
              <p class="text-xs text-text-sub dark:text-gray-400 truncate">Lettering Artist</p>
            </div>
            <button
                class="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <span class="material-icons-round text-sm">add</span>
            </button>
          </div>
        </div>
      </div>
      <!-- Trending Topics -->
      <div class="bg-white dark:bg-surface-dark rounded-3xl p-5 border border-gray-50 dark:border-white/5">
        <h3 class="font-extrabold text-gray-900 dark:text-white mb-4 px-1">Hot Topics 🔥</h3>
        <div class="flex flex-wrap gap-2">
                    <span
                        class="px-3 py-1.5 bg-background-light dark:bg-white/5 rounded-xl text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">#GenerativeArt</span>
          <span
              class="px-3 py-1.5 bg-background-light dark:bg-white/5 rounded-xl text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">#Figma
                        plugins</span>
          <span
              class="px-3 py-1.5 bg-background-light dark:bg-white/5 rounded-xl text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">#PortfolioHelp</span>
          <span
              class="px-3 py-1.5 bg-background-light dark:bg-white/5 rounded-xl text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">#DailyUI</span>
          <span
              class="px-3 py-1.5 bg-background-light dark:bg-white/5 rounded-xl text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">#Inspiration</span>
        </div>
      </div>
      <div class="mt-8 text-xs text-text-sub dark:text-gray-500 text-center font-medium">
        <p>© 2023 Sparkle Inc. • <a class="hover:text-primary" href="#">Privacy</a> • <a
            class="hover:text-primary" href="#">Terms</a></p>
      </div>
    </aside>
  </div>
  </body>
</template>

<style scoped>

</style>