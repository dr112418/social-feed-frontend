<template>
  <div class="feed-item">
    <div class="feed-content">
      <template v-if="item.type === 'image'">
        <van-image
          class="feed-image"
          lazy-load
          :alt="item.title"
          :src="item.media"
          @click="onImageClick(item.media)"
        >
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
      </template>

      <template v-else-if="item.type === 'video'">
        <VideoPlayer :src="item.media" />
      </template>
    </div>
    <div class="feed-title">{{ item.title }}</div>
    <div class="feed-forum">
      <van-tag color="#F6F6F6" text-color="#666666" style="font-size: 11px">{{
        item.forum
      }}</van-tag>
    </div>

    <div class="user-info">
      <view class="user-left">
        <img class="user-avatar" :src="item.user.avatar" alt="用户头像" />
        <div class="user-name">{{ item.user.name }}</div>
      </view>

      <div
        class="user-right"
        @click="
          () => {
            item.whether = !item.whether
            item.likes += item.whether ? 1 : -1
          }
        "
      >
        <span style="font-size: 12px"
          ><van-icon :name="item.whether ? 'good-job' : 'good-job-o'" style="margin-right: 5px" />{{
            item.likes
          }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import VideoPlayer from './VideoPlayer.vue'
import { showImagePreview } from 'vant'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

// 处理图片点击事件
const onImageClick = (item) => {
  // 这里可以添加图片点击后的处理逻辑，比如打开大图预览
  showImagePreview([item])
}
</script>

<style scoped>
.feed-item {
  background-color: #fff;
  border-radius: 6px;
  margin-bottom: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.feed-content .feed-image {
  width: 100%;
  display: block;
}

.feed-title {
  padding: 8px 8px 0;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 500;
  color: #333;
}

.feed-forum {
  padding-left: 6px;
}

.user-info {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px;
  justify-content: space-between;
}

.user-left {
  display: flex;
  align-items: center;
}
.user-right {
  color: #666;
}
.user-avatar {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 5px;
  object-fit: cover;
}

.user-name {
  font-size: 12px;
  font-weight: 500;
  color: #666;
}
</style>
