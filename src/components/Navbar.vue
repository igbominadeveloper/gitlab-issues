<template>
  <nav class="nav">
    <p class="nav-item nav-logo">Tilig</p>
    <div class="nav-title">
      <p>{{ 128052 | emoji }}</p>
      <p>Welcome</p>
    </div>
    <p class="nav-item nav-menu">Menu</p>
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
  color: var(--color-white);
  font-size: 18px;
  font-weight: bold;

  display: grid;
  grid-template-columns: 90px 1fr 90px;
  height: 60px;
  align-items: stretch;
}

.nav-title {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  font-size: 16px;
}

.nav-item {
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
}

.nav-logo {
  border-bottom-right-radius: 30px;
}

.nav-menu {
  border-bottom-left-radius: 30px;
  font-weight: 300;
}
</style>
