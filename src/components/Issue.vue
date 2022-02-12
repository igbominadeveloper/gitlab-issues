<template>
  <div class="issue">
    <transition name="emoji">
      <div class="issue-emoji" @click="changeEmoji">
        {{ emojiHex | emoji }}
      </div>
    </transition>

    <div class="issue-body">
      <p v-text="title" />
      <p class="issue-body-milestone" v-if="milestone">
        Milestone: {{ milestone.title }}
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
  }),

  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    milestone: {
      type: Object,
      validator(milestone) {
        return milestone !== null;
      },
    },
  },

  mounted() {
    this.setIssueEmoji();
  },

  methods: {
    getEmojisFromStore() {
      const emojisInLocalstorage = localStorage.getItem('emojis');

      const emojisMap = emojisInLocalstorage
        ? JSON.parse(emojisInLocalstorage)
        : {};

      return emojisMap;
    },

    setIssueEmoji() {
      const emojis = this.getEmojisFromStore();

      this.emojiHex = emojis[this.id] ?? randomEmoji();
    },

    changeEmoji() {
      const newEmoji = randomEmoji();

      const emojisMap = this.getEmojisFromStore();

      emojisMap[this.id] = newEmoji;

      localStorage.setItem('emojis', JSON.stringify(emojisMap));

      this.emojiHex = newEmoji;
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

.emoji-enter-active,
.emoji-leave-active {
  transition: opacity 0.5s ease;
}

.emoji-enter-from,
.emoji-leave-to {
  opacity: 0;
}
</style>
