<template>
  <div class="issue">
    <div class="issue-emoji" @click="assignNewEmoji">
      {{ emojiHex | emoji }}
    </div>

    <div class="issue-body">
      <p v-text="title" />
      <p class="issue-body-milestone" v-show="milestone.length > 0">
        Milestone: Challenge Completion
      </p>
    </div>
  </div>
</template>

<script>
import { randomEmoji } from '@utils';

export default {
  name: 'Issue',
  data: () => ({
    emojiHex: '',
    title: 'Test Issue',
    milestone: 'Milestone: Challenge Completion',
  }),
  created() {
    this.assignNewEmoji();
  },

  methods: {
    assignNewEmoji() {
      this.emojiHex = randomEmoji();
    },
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

  cursor: pointer;
}

.issue-emoji:hover {
  font-size: 25px;
  transition: font-size 0.3s 0.3s ease-in-out;
}

.issue-body {
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 5px;
}

.issue-body-milestone {
  opacity: 0.6;
}
</style>
