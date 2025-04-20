import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getFeedPosts = async (type, page) => {
  try {
    const response = await api.get(`/api/feed?type=${type}&page=${page}`)
    return response
  } catch (error) {
    console.error('获取feed数据失败:', error)
    throw error
  }
}
