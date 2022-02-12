<template>
  <div class="issues">
    <app-header type="big" text="Gitlab Issues Emoji" />
    <div class="issues-section">
      <app-header text="Issues with milestone" />
      <app-issue
        v-for="{ id, title, milestone } in issuesWithMilestone"
        :key="id"
        :id="id"
        :title="title"
        :milestone="milestone"
      />
    </div>

    <div class="issues-section">
      <app-header text="Issues without milestone" />

      <div class="issues-list">
        <app-issue
          v-for="{
            id,
            title,
            milestone = { id: '' },
          } in issuesWithoutMilestone"
          :key="id"
          :id="id"
          :title="title"
          :milestone="milestone"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@components/Header.vue';
import AppIssue from '@components/Issue.vue';

import GitlabService from '@services';

export default {
  name: 'Issues',
  components: {
    AppHeader,
    AppIssue,
  },

  data: () => ({
    issues: [],
  }),

  computed: {
    issuesWithMilestone() {
      return this.issues.filter((issue) => issue.milestone);
    },

    issuesWithoutMilestone() {
      return this.issues.filter((issue) => !issue.milestone);
    },
  },

  methods: {
    async fetchAllIssues() {
      const service = new GitlabService();

      const issues = await service.getIssues();

      this.issues = issues;
    },
  },
  mounted() {
    this.fetchAllIssues();
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

  padding-bottom: 60px;
}
</style>
