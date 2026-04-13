<template>
  <div id="app">
    <AppHeader />
    <main class="main-content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
</script>

<style scoped>
.main-content {
  min-height: calc(100vh - 140px);
  margin-top: 80px;
}

@media (max-width: 768px) {
  .main-content {
    margin-top: 70px;
  }
}
</style>