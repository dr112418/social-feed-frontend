<template>
  <div class="feed-item">
    <div class="user-info">
      <img class="user-avatar" :src="item.user.avatar" alt="用户头像" />
      <div class="user-name">{{ item.user.name }}</div>
    </div>

    <div class="feed-title">{{ item.title }}</div>

    <div class="feed-content">
      <template v-if="item.type === 'image'">
        <img v-lazy="item.media" :alt="item.title" />
      </template>

      <template v-else-if="item.type === 'video'">
        <VideoPlayer :src="item.media" />
      </template>
    </div>

    <div class="feed-footer">
      <div class="feed-time">{{ formatTime(item.timestamp) }}</div>
      <div class="feed-stats">
        <div class="stat-item">
          <span>👍 {{ formatNumber(item.likes) }}</span>
        </div>
        <div class="stat-item">
          <span>💬 {{ formatNumber(item.comments) }}</span>
        </div>
        <div class="stat-item" v-if="item.shares">
          <span>↗️ {{ formatNumber(item.shares) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import VideoPlayer from './VideoPlayer.vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

// 格式化时间
const formatTime = (timestamp) => {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now - date

  if (diff < 60000) {
    return '刚刚'
  } else if (diff < 3600000) {
    return `${Math.floor(diff / 60000)}分钟前`
  } else if (diff < 86400000) {
    return `${Math.floor(diff / 3600000)}小时前`
  } else {
    return `${Math.floor(diff / 86400000)}天前`
  }
}

// 格式化数字
const formatNumber = (num) => {
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + 'w'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'
  }
  return num
}
</script>

<style scoped>
.feed-item {
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.user-info {
  display: flex;
  align-items: center;
  padding: 10px;
}

.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}

.user-name {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.feed-title {
  padding: 0 10px 8px;
  font-size: 14px;
  line-height: 1.4;
  color: #333;
}

.feed-content img {
  width: 100%;
  display: block;
}

.feed-footer {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 12px;
  color: #999;
  border-top: 1px solid #f5f5f5;
}

.feed-stats {
  display: flex;
}

.stat-item {
  margin-left: 16px;
}

.stat-item:first-child {
  margin-left: 0;
}
</style>
