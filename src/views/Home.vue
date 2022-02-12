<template>
  <main class="main">
    <app-navbar />

    <div class="main-content">
      <app-issues />
    </div>
  </main>
</template>

<script>
import AppNavbar from '@components/Navbar.vue';
import AppIssues from '@components/Issues.vue';

export default {
  name: 'Home',
  components: {
    AppNavbar,
    AppIssues,
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;

  background-color: var(--color-white);
}

.main-content {
  padding: 20px;
}
</style>
