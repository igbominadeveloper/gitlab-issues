<template>
  <h1 :class="type === 'big' ? 'big-heading' : ''">{{ text }}</h1>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'small',
      validator(value) {
        return ['big', 'small'].includes(value);
      },
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 16px;
  font-weight: bold;

  margin: 0 0 15px;
}

.big-heading {
  font-size: 18px;
}
</style>
