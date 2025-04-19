<template>
  <div class="video-container">
    <video
      ref="videoRef"
      controls
      preload="metadata"
      :poster="poster"
      @play="onPlay"
    >
      <source :src="src" type="video/mp4">
      您的浏览器不支持视频播放
    </video>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    default: ''
  }
});

const videoRef = ref(null);

// 处理视频播放（自动停止其他正在播放的视频）
const onPlay = () => {
  document.querySelectorAll('video').forEach(video => {
    if (video !== videoRef.value && !video.paused) {
      video.pause();
    }
  });
};

onMounted(() => {
  // 使用Intersection Observer监听视频是否在视图中
  const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting && videoRef.value && !videoRef.value.paused) {
      videoRef.value.pause();
    }
  }, { threshold: 0.3 });

  if (videoRef.value) {
    observer.observe(videoRef.value);
  }

  // 清理
  onBeforeUnmount(() => {
    if (videoRef.value) {
      observer.unobserve(videoRef.value);
    }
  });
});
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

video {
  width: 100%;
  display: block;
  background-color: #000;
}
</style>
