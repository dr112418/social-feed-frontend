import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 模拟数据
import { generateFeedData } from "./data/mockData.js";

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// API 路由
app.get("/api/feed", (req, res) => {
  const { type = "general", page = 1, limit = 10 } = req.query;

  // 根据不同类型返回不同内容
  const data = generateFeedData(type, parseInt(page), parseInt(limit));

  // 模拟网络延迟
  setTimeout(() => {
    res.json(data);
  }, 300);
});

// 重要：前端静态文件服务
// 提供 Vite 打包后的静态文件
const frontendBuildPath = path.join(__dirname, "..", "dist");
app.use(express.static(frontendBuildPath));

// 所有未匹配的路由返回 index.html（支持前端路由）
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendBuildPath, "index.html"));
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});
