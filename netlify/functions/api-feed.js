import { generateFeedData } from '../../server/data/mockData.js'

export async function handler(event) {
  // 启用 CORS
  const headers = {
    'Access-Control-Allow-Origin': 'https://durui.site',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  }

  // 处理 OPTIONS 预检请求
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: '',
    }
  }

  // 处理实际的 GET 请求
  if (event.httpMethod === 'GET') {
    const params = event.queryStringParameters
    const type = params.type || 'general'
    const page = parseInt(params.page || 1)
    const limit = parseInt(params.limit || 10)

    const data = generateFeedData(type, page, limit)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data),
    }
  }

  // 其他请求方法不支持
  return {
    statusCode: 405,
    headers,
    body: JSON.stringify({ error: '方法不允许' }),
  }
}
