export default {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: 375, // 设计稿的视口宽度
      viewportHeight: 667, // 设计稿的视口高度
      unitPrecision: 5, // 单位转换后保留的精度
      propList: ['*'], // 能转化为vw的属性列表
      viewportUnit: 'vw', // 希望使用的视口单位
      fontViewportUnit: 'vw', // 字体使用的视口单位
      selectorBlackList: [], // 需要忽略的CSS选择器
      minPixelValue: 1, // 设置最小的转换数值，小于或等于`1px`不转换
      mediaQuery: true, // 媒体查询里的单位是否需要转换
      replace: true, // 是否直接更换属性值
      exclude: [/node_modules/], // 忽略某些文件夹下的文件
      landscape: false, // 是否处理横屏情况
      landscapeUnit: 'vw', // 横屏时使用的单位
      landscapeWidth: 667, // 横屏时使用的视口宽度
    },
  },
}
