<template>
  <nav class="nav">
    <p>Tilig</p>
    <div class="nav-title">
      <p>{{ 128052 | emoji }}</p>
      <p>Welcome</p>
    </div>
    <p>Menu</p>
  </nav>
</template>

<script>
import { randomEmoji } from '@utils';

export default {
  created() {
    // console.log( randomEmoji();
  },
};
</script>

<style scoped>
.nav {
  background: var(--color-black);
  width: 100%;
  padding: 20px;
  color: var(--color-white);

  display: grid;
  grid-template-columns: 30px 1fr 30px;
}

.nav-title {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
</style>
