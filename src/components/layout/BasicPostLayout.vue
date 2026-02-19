<script setup>
defineProps({
  avatar: String,
  username: String,
  status: Boolean,
  postType: String,
  time: String,
  image: String
})
</script>

<template>
  <!-- Post 1: Image Showcase -->
  <article class="bg-background-card dark:bg-zinc-800 rounded-3xl p-6 shadow-soft duration-300 border border-gray-50 dark:border-white/5">
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

          <p class="text-xs text-slate-600 dark:text-gray-400 font-medium">
            {{ time }} • <span class="text-blue-500 bg-blue-50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded-md">{{ postType }}</span>
          </p>
        </div>
      </div>
      <slot name="btn_more"></slot>
    </div>

    <p class="text-gray-700 dark:text-gray-300 mb-4 font-medium">
      <slot/>
    </p>

    <div class="rounded-2xl h-64 md:h-96 overflow-hidden mb-5 relative group">
      <img alt="Abstract colorful fluid shapes design"
           data-alt="Abstract colorful fluid gradient shapes"
           class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
           v-if="image"
           :src="image"
      />
    </div>

    <!-- Expressive Reactions -->
    <div class="flex items-center justify-between pt-2">
      <div class="flex -space-x-3 hover:space-x-1 transition-all duration-300">
        <slot name="btn_reaction"></slot>
      </div>
      <div class="flex gap-4">
        <slot name="btn_engagement"></slot>
      </div>
    </div>
  </article>
</template>

<style scoped>

</style>