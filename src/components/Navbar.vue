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
export default {
  name: 'Navbar',
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
  height: 65px;
  align-items: stretch;

  position: sticky;
  top: 0px;
  z-index: 1;
}

.nav-title {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-size: 16px;
}

.nav-item {
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: bolder;
}

.nav-item:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: all 0.3s linear;
  background: linear-gradient(var(--color-white), var(--color-primary));
}

.nav-logo {
  border-bottom-right-radius: 38px 108px;
}

.nav-menu {
  border-bottom-left-radius: 49px 108px;
  font-weight: 300;
}
</style>
