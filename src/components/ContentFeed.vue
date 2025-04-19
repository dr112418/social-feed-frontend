<template>
  <div class="content-container">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" success-text="刷新成功">
      <div class="waterfall-container">
        <div class="waterfall-column" v-for="column in 2" :key="column">
          <FeedItem v-for="item in getColumnItems(column)" :key="item.id" :item="item" />
        </div>
      </div>

      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多内容了"
        @load="onLoad"
      >
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { showToast } from 'vant'
import FeedItem from './FeedItem.vue'
import { getFeedPosts } from '@/api' // 假设你有一个 API 函数来获取数据

const props = defineProps({
  feedType: {
    type: String,
    default: 'general',
  },
})

const feedItems = ref([])
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)
const page = ref(1)

// 首先定义 loadData 函数
const loadData = async () => {
  try {
    loading.value = true
    const response = await getFeedPosts(props.feedType, page.value)

    if (refreshing.value) {
      feedItems.value = response.data
      refreshing.value = false
    } else {
      feedItems.value = [...feedItems.value, ...response.data]
    }

    page.value++
    loading.value = false

    // 如果返回的数据少于预期，说明已经到底了
    if (response.data.length < 10) {
      finished.value = true
    }
  } catch (error) {
    console.error('获取数据失败:', error)
    showToast('加载失败，请重试')
    loading.value = false
  }
}

// 然后再使用 watch 监听 feedType 变化
watch(
  () => props.feedType,
  () => {
    // 重置状态
    feedItems.value = []
    finished.value = false
    page.value = 1
    // 加载新数据
    loadData()
  },
  { immediate: true },
)

// 获取对应列的项目
const getColumnItems = (column) => {
  return feedItems.value.filter((_, index) => index % 2 === column - 1)
}

// 上拉加载
const onLoad = () => {
  if (!refreshing.value) {
    loadData()
  }
}

// 下拉刷新
const onRefresh = () => {
  finished.value = false
  page.value = 1
  loadData()
}
</script>

<style scoped>
.content-container {
  padding: 8px;
  background-color: #f7f7f7;
}

.waterfall-container {
  display: flex;
  width: 100%;
}

.waterfall-column {
  flex: 1;
  padding: 0 4px;
}
</style>
