// src/api/index.js
import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL || ''

const api = axios.create({
  baseURL,
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
    console.error('获取 feed 内容失败:', error)
    throw error
  }
}
