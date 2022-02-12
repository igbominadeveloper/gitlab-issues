<template>
  <div class="loading" />
</template>

<script>
export default {
  name: 'Loading',
};
</script>

<style lang="scss" scoped>
.loading {
  margin: 50px auto 0;
  border: 10px solid var(--color-primary-gray);
  border-radius: 50%;
  border-top: 10px solid var(--color-primary);
  width: 100px;
  height: 100px;
  animation: spinner 4s linear infinite;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
