<template>
  <div class="home-view">
    <div class="feed-tabs">
      <router-link
        v-for="tab in tabs"
        :key="tab.type"
        :to="{ name: 'feed', params: { type: tab.type } }"
        class="tab-item"
        :class="{ active: currentType === tab.type }"
      >
        {{ tab.label }}
      </router-link>
    </div>

    <ContentFeed :feed-type="currentType" />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import ContentFeed from '@/components/ContentFeed.vue';

const props = defineProps({
  type: {
    type: String,
    default: 'general'
  }
});

const route = useRoute();
const currentType = computed(() => props.type || route.params.type || 'general');

const tabs = [
  { type: 'general', label: '综合' },
  { type: 'travel', label: '旅行' },
  { type: 'food', label: '美食' }
];
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.feed-tabs {
  display: flex;
  background-color: #fff;
  padding: 12px 8px;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 10;
}

.tab-item {
  padding: 8px 16px;
  margin: 0 4px;
  border-radius: 16px;
  font-size: 14px;
  text-decoration: none;
  color: #666;
}

.tab-item.active {
  background-color: #f0f0f0;
  color: #333;
  font-weight: 500;
}
</style>
