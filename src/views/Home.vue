<template>
  <main>
    <navbar />
  </main>
</template>

<script>
import Navbar from '@components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
};
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;

  background-color: var(--color-primary-gray);
}
</style>
