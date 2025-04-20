// netlify/functions/feed.js
const { generateFeedData } = require('./mockData')

exports.handler = async function (event, context) {
  // 设置CORS头
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json',
  }

  // 处理OPTIONS预检请求
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: '',
    }
  }

  try {
    // 获取查询参数
    const params = event.queryStringParameters || {}
    const type = params.type || 'general'
    const page = parseInt(params.page || 1)
    const limit = parseInt(params.limit || 10)

    // 生成数据
    const data = generateFeedData(type, page, limit)

    // 返回成功响应
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data),
    }
  } catch (error) {
    console.log('错误:', error)
    // 返回错误响应
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: '内部服务器错误', message: error.message }),
    }
  }
}
