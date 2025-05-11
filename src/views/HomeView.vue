<template>
  <div class="home-view">
    <ContentFeed :feed-type="currentType" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ContentFeed from '@/components/ContentFeed.vue'

const props = defineProps({
  type: {
    type: String,
    default: 'general',
  },
})

const route = useRoute()
const currentType = computed(() => props.type || route.params.type || 'general')
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
