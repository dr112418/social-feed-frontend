import { createApp } from 'vue'
import { Lazyload, List, PullRefresh, Toast } from 'vant'
import 'vant/lib/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 使用Vant组件
app.use(Lazyload, {
  lazyComponent: true,
})
app.use(List)
app.use(PullRefresh)
app.use(Toast)

app.use(router)
app.mount('#app')
