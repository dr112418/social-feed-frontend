// 例如在src/api/index.js中
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
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
    console.error('Error fetching feed posts:', error)
    throw error
  }
}
