<script setup lang="ts">
defineProps({
  avatar: String,
  hashTag: String[''],
  postType: String,
  status: Boolean,
  time: String,
  title: String,
  username: String,
})
</script>

<template>
  <!-- Post 2: Text Based Question -->
  <article class="bg-linear-to-br from-primary/70 to-white/70 dark:to-zinc-600 backdrop-blur-md rounded-3xl p-8 relative overflow-hidden">
    <div class="relative z-10">
      <div class="material-icons-round absolute right-4 bottom-4 scale-500 text-primary/70 z-0 rotate-12">lightbulb</div>
      <div class="flex justify-between items-center mb-4">
        <div class="flex items-center gap-3">
          <div class="relative">
            <Avatar alt="Author Avatar"
                    size="large"
                    shape="circle"
                    class="ring-2 ring-primary"
                    data-alt="User avatar of a man with glasses"
                    :image="avatar"/>
            <div :class="['absolute bottom-1 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-zinc-600', status ? 'bg-green-400':'bg-slate-500']"></div>
          </div>

          <div class="flex flex-col gap-1">
            <h3 class="font-bold text-gray-900 dark:text-white">
              {{ username }}
            </h3>

            <p class="text-xs text-slate-100 dark:text-gray-400 font-medium">
              {{ time }} • <span class="text-purple-600 bg-purple-500/10 px-1.5 py-0.5 rounded-md">{{ postType }}</span>
            </p>
          </div>
        </div>
      </div>

      <!--      <div class="flex justify-between items-start mb-4">
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
            </div>-->

      <h2 class="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-slate-100 mb-4">
        {{ title }}
      </h2>

      <p class="text-slate-600 dark:text-slate-300 mb-6 font-medium">I'm currently stuck between
        Inter/Playfair or Plus Jakarta/Merryweather. Help me out!
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-6">
        <p class="px-3 py-1 text-purple-600 bg-purple-500/10 dark:bg-white/10 rounded-lg text-xs font-bold border border-purple-100 dark:border-white/10">#Typography</p>
        <p class="px-3 py-1 text-purple-600 bg-purple-500/10 dark:bg-white/10 rounded-lg text-xs font-bold border border-purple-100 dark:border-white/10">#WebDesign</p>
      </div>

      <div class="flex items-center gap-4 border-t border-slate-100 dark:border-white/10 pt-4">
        <Button class="px-4 border-none hover:bg-background-color-light bg-white dark:bg-zinc-400 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
          <span class="material-icons-round scale-80">tips_and_updates</span>
          24 Answers
        </Button>
        <Button class="px-4 border-none hover:bg-background-color-light bg-white dark:bg-zinc-400 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
          <span class="material-icons-round scale-80">bookmark_border</span>
          Save
        </Button>
      </div>
    </div>
  </article>
</template>

<style scoped>

</style>