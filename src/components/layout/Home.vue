<script setup>
import LeftSideBar from "@/components/layout/LeftSideBar.vue";
import RightSideBar from "@/components/layout/RightSideBar.vue";
</script>

<template>
  <body class="bg-background-color-light dark:bg-zinc-900 text-slate-700 dark:text-white antialiased min-h-screen">
  <!-- Navbar (Mobile/Tablet Top) & Desktop Wrapper -->
  <div class="max-w-350 mx-auto min-h-screen flex flex-col md:flex-row">
    <LeftSideBar/>
    <!-- Main Feed Area -->
    <main class="flex-1 flex flex-col gap-6 p-4 md:p-6 overflow-y-auto">
      <!-- Mobile Header -->
      <div class="md:hidden flex justify-between items-center">
        <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
          <span class="material-icons-round">bubble_chart</span>
        </div>
        <img alt="User profile" class="w-10 h-10 rounded-full object-cover ring-2 ring-primary p-0.5"
             data-alt="User profile picture mobile"
             src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUPG5P1tJsDey9WeB9VpGEkgV9HUQyuO72663oLuGjYAuG8G-v5C_BfmyWuKyZBnwLpo8UBRpSGwnd85X4bzulS0ZopRxypunQsm6j1FC2-AQdfiNn6Tccc1LTq_oHPDJbWyWVvnXQHIw2Pk5VfKPrLvbhPylsNR6lxk694VKE6budOgNjiGkHQu6244kQM5uXDYEeFFja3jAa9JaglhmK1jV1ZI9j97ZrNW8KhfHi_UGcyAJulIFCBfIly_PwedAyDfP5LNH0MFc"/>
      </div>

      <router-view/>
    </main>
    <RightSideBar/>
  </div>
  </body>
</template>

<style scoped>

</style>