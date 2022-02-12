<template>
  <div class="issues">
    <app-header type="big" text="Gitlab Issues Emoji" />
    <div class="issues-section">
      <app-header text="Issues with milestone" />
      <app-issue />
    </div>

    <div class="issues-section">
      <app-header text="Issues without milestone" />

      <div class="issues-list">
        <app-issue />
        <app-issue />
        <app-issue />
        <app-issue />
        <app-issue />
        <app-issue />
        <app-issue />
        <app-issue />
        <app-issue />
        <app-issue />
        <app-issue />
        <app-issue />
        <app-issue />
        <app-issue />
        <app-issue />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@components/Header.vue';
import AppIssue from '@components/Issue.vue';

export default {
  name: 'Issues',
  components: {
    AppHeader,
    AppIssue,
  },
};
</script>

<style lang="scss" scoped>
.issues-section {
  margin: 20px 0;
}

.issues-list {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}
</style>
