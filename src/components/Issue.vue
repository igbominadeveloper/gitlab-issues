<template>
  <div class="issue">
    <div class="issue-emoji">
      {{ emojiHex | emoji }}
    </div>
    <div class="issue-body">
      <p>Test Issue</p>
      <p>Milestone: Challenge Completion</p>
    </div>
  </div>
</template>

<script>
import { randomEmoji } from '@utils';

export default {
  name: 'Issue',
  data: () => ({
    emojiHex: '',
  }),
  created() {
    this.emojiHex = randomEmoji();
  },
};
</script>

<style lang="scss" scoped>
.issue {
  height: 110px;
  width: 100%;
  max-width: 425px;

  border-radius: 20px;

  display: grid;
  grid-template-columns: 50px 1fr;

  color: var(--color-white);
  background: var(--color-primary);
}

.issue-emoji {
  background: var(--color-black);
  display: flex;
  align-items: center;
  justify-content: center;

  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.issue-body {
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
