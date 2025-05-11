// 用户数据
const users = [
  {
    id: 1,
    name: '信先生',
    avatar: 'https://user.233leyuan.com/portrait/12580607dd994968b896b0b6224bc67c_501879984.jpeg',
  },
  {
    id: 2,
    name: '排排飞',
    avatar: 'https://cdn.233xyx.com/upload/image/5QKD0Bvo6M1740559717682.jpg',
  },
  {
    id: 3,
    name: '恬恬Xʸ✞',
    avatar: 'https://user.233leyuan.com/portrait/59857760b0aa4851bb97aad3e8159bef_501433207.jpeg',
  },
  {
    id: 4,
    name: '昭昭',
    avatar: 'https://cdn.233xyx.com/upload/image/wenli.wu/1718075273483.jpg',
  },
  {
    id: 5,
    name: '月雨',
    avatar: 'https://user.233leyuan.com/portrait/5677a19a6577414bae5c2fc52d387b50_500080812.jpeg',
  },
  {
    id: 6,
    name: '吟枣黎',
    avatar: 'https://user.233leyuan.com/portrait/2a5ffef3050945928c4095262b01ff31_502435243.jpeg',
  },
  {
    id: 7,
    name: '崆洞',
    avatar: 'https://user.233leyuan.com/portrait/94b0b6fdd5804069a9c0412cf00c8460_401055343.jpeg',
  },
  {
    id: 8,
    name: '团团',
    avatar: 'https://user.233leyuan.com/portrait/489df35b755a4beeabaa3257eb009091_130827029.jpeg',
  },
]

// 生成随机数
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// 生成随机标题
const generateTitle = (type) => {
  const generalTitles = [
    '【优选召唤·焰毒】｜全英雄可召唤，焰毒概率提升',
    '【樱校美图】“五月悄然而至, 带着初夏的微风, 日子也变得温柔起来🌸”#申请精华',
    ' 忘本我可以接受，但你不能忘了我',
    '【剧情解读】两情若是长久时...',
    ' 篮球爱好者福音，NBA正版授权手游-美职篮全明星，等你来体验！',
    ' 好消息！有大棒肉！坏消息：是甜口的！——给路飞船长的生日大餐',
    '【地铁跑酷】-跑酷组-  “爱自有天意。”#申请精华@小林铛',
    ' 隐藏关攻略（制作长生不老药）',
    '《冰汽时代：最后的家园》首次实机演示视频曝光！',
    ' 氛围感的神在哪里呀？',
  ]

  const travelTitles = [
    '《欧洲卡车模拟3》新手入门&车辆测评攻略合集',
    '【掘地求财】云游小贴士',
    '『再临』知道欧拉公式的威力吗小子#申请精华',
    '【Gorgeously】你我之间 露水情缘',
    '【内含本周礼包码】来一份祖传冷知识~',
    '【托卡美图】“你的破碎 我用真诚来缝补˘ᗜ˘”#信先生',
    ' 登录领皮肤倒计时 | 新增超值好物页签，神秘宝库明日开启！天棱震雷 亚托克斯登场~',
    ' 预约《代号奇旅》抽PS5、Switch等丰富好礼！',
    ' 宁芙奖请投我们园丁TvT',
    ' 如何一口气获得七位特殊僵尸？',
  ]

  const foodTitles = [
    "【托卡美图】“你有点傻傻的但我乐意和你玩'·.:”#信先生",
    '《我的朋友佩德罗》1~36关无伤通关全流程',
    '【环樱】“有趣的灵魂终将会相遇”',
    ' 元梦之星x蜜桃猫丨黄帽雨衣甜度满分，毛茸茸两小只来袭！',
    '【合拍】—哦~是么？',
    '【莫斯科的空姐请听讲】敲黑板',
    '『盛夏』光遇 25年 海洋节活动简介',
    ' 魔灵幻想(0.1折)累充好礼等你来拿！',
    '【萌新宝典】社死模拟器教堂通关教程',
    ' 笙歌不见古人散，十里长欢难再寻',
  ]

  const titles = {
    general: generalTitles,
    travel: travelTitles,
    food: foodTitles,
  }

  const titleList = titles[type] || generalTitles
  return titleList[getRandomInt(0, titleList.length - 1)]
}

// 生成图片 URL
const generateImageUrl = (id) => {
  const images = [
    'https://community.233leyuan.com/community/post/11e82796bddd431b934b8778592b443b_497694898.webp',
    'https://community.233leyuan.com/community/post/9e37d48ea8524779a586cabf9032fa53_497694899.webp',
    'https://community.233leyuan.com/community/post/36755846ce1e449b81813206f4c395c7_491848986.webp',
    'https://community.233leyuan.com/community/post/548d2ed69469416d991bdffb2dd6271e_491848987.webp',
    'https://community.233leyuan.com/community/post/7e215c771b9a42e7b44de7e215d65226_498776024.webp',
    'https://community.233leyuan.com/community/post/7c32c2f68ef5484c9f43e39bd9050a6b_497881197.webp',
    'https://community.233leyuan.com/community/post/24254255c75e4616bddeb09369a92ff1_497875921.webp',
    'https://community.233leyuan.com/community/post/7d73c36c568142308f7c6bdac520e9cb_419681000.jpg',
    'https://community.233leyuan.com/community/post/55eceba999cd402d9ce9f251c68c7b52_397238675.png',
    'https://community.233leyuan.com/community/post/8a781d8dbe63465c95c255aed3816a4e_501075708.webp',
    'https://community.233leyuan.com/community/post/5b7e30ef765e4ad5b2f318541fe4604a_502764740.webp',
    'https://community.233leyuan.com/community/post/9bbc9ce06fa342c691331918621d8783_502379969.webp',
    'https://community.233leyuan.com/community/post/3f2b4eaf103e4d2fbe3ef1e57810beb1_501334947.webp',
    'https://community.233leyuan.com/community/post/6c4fdd706ad346c3bcaf84147eb96dbf_501381258.webp',
    'https://community.233leyuan.com/community/post/2ee8b5b22402419fa9000820534ea81a_494174651.webp',
    'https://community.233leyuan.com/community/post/722e7dc9b56a40839c92e3cb4e470378_501306328.webp',
    'https://community.233leyuan.com/community/post/80e59bc20efc45bab41fe289461b011c_500772495.webp',
    'https://community.233leyuan.com/community/post/25d50ebd418c4be39e1c679f5d78c406_500631802.webp',
    'https://community.233leyuan.com/community/post/fbc90a4eded04c6fa261b37bc7cd8f3a_501871144.webp',
    'https://community.233leyuan.com/community/post/dc5ee298368e46c2866268e742014b35_500612129.webp',
  ]

  return images[id % images.length]
}

// 生成视频 URL (使用示例视频)
const generateVideoUrl = (id) => {
  const videos = [
    'https://qn-community.233leyuan.com/community/post/472e3a2449344283ba43a1d0624bc4a9_418744456.mp4',
    'https://community.233leyuan.com/community/post/b8a6bb8865504806ab83d9d64f59d917_496360959.mp4',
    'https://community.233leyuan.com/community/post/6e1f077ed16842cda2eef59977b1e1c4_495914668.mp4',
    'https://qn-community.233leyuan.com/community/post/8b81307a13554543b65b2da922db9831_431918069.mp4',
    'https://qn-community.233leyuan.com/community/post/1ddc645d8cb34163ad2153d8b8ea9178_425371400.mp4',
    'https://qn-community.233leyuan.com/community/post/148d513be3b742bbbe02aa704e623be8_501929887.mp4',
    'https://qn-community.233leyuan.com/community/post/a86d117c2f4244e994b761725e69da8c_415924836.mp4',
    'https://qn-community.233leyuan.com/community/post/df6d8653179a47719cc34bb2383c308e_491396485.mp4',
    'https://qn-community.233leyuan.com/community/post/cbc7e9e1bf8c441a88fd06ab6c261a20_419275907.mp4',
    'https://qn-community.233leyuan.com/community/post/3daf943d75934a5590326ae15ac26fea_498577182.mp4',
  ]

  return videos[id % videos.length]
}

// 生成论坛名字
const generateForumName = (id) => {
  const forums = [
    '恐龙岛（诅咒之岛）',
    '米加小镇日常生活',
    '迷你世界',
    '三角洲行动',
    '航天模拟器中文版',
    '暗影城5：揭露真相',
    '第五人格庄园',
    '夜色酒吧',
    '沙雕模拟器',
    '托卡生活论坛',
  ]

  return forums[id % forums.length]
}

// 生成帖子数据
const generateFeedItem = (id, type) => {
  const isVideo = getRandomInt(1, 10) <= 2 // 30%的几率生成视频
  const user = users[getRandomInt(0, users.length - 1)]

  return {
    id: id + Date.now(), // 确保ID唯一
    title: generateTitle(type),
    type: isVideo ? 'video' : 'image',
    media: isVideo ? generateVideoUrl(id) : generateImageUrl(id),
    user,
    likes: getRandomInt(1, 1000),
    whether: false,
    forum: generateForumName(id),
  }
}

// 生成内容流数据
export const generateFeedData = (type, page, limit) => {
  const startIndex = (page - 1) * limit
  const result = []

  for (let i = 0; i < limit; i++) {
    result.push(generateFeedItem(startIndex + i + 1, type))
  }

  return result
}
