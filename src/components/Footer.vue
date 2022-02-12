<template>
  <footer class="footer">Github Issues Challange</footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer {
  background: var(--color-black);
  color: var(--color-white);

  padding: 20px;
  text-align: center;

  flex-shrink: 0;

  position: fixed;
  bottom: 0;
  width: 100%;

  vertical-align: bottom;
  margin-top: 120px;
}
</style>
