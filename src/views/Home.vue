<template>
  <main class="main">
    <app-navbar />

    <div class="main-content">
      <app-issues />
    </div>

    <app-footer />
  </main>
</template>

<script>
import AppNavbar from '@components/Navbar.vue';
import AppIssues from '@components/Issues.vue';
import AppFooter from '@components/Footer.vue';

export default {
  name: 'Home',
  components: {
    AppNavbar,
    AppIssues,
    AppFooter,
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  max-width: 1500px;
  margin: 0 auto;

  background-color: var(--color-white);
}

.main-content {
  padding: 20px;
}
</style>
