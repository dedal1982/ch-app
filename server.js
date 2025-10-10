// server/server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import logger from "./utils/logger.js"; // импорт Winston логгера

const app = express();
const port = 3000;

// Для определения __dirname в ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json()); // для парсинга JSON тела запросов

// Логирование каждого входящего запроса
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// API для логирования ошибок с клиента
app.post("/api/log", (req, res) => {
  const { level, message } = req.body;

  if (!level || !message) {
    return res.status(400).send("Invalid log data");
  }

  if (level === "error") {
    logger.error(message);
  } else if (level === "info") {
    logger.info(message);
  } else {
    logger.log(level, message);
  }

  res.status(204).send(); // No Content
});

// Статическая раздача файлов из папки dist
app.use(express.static(path.join(__dirname, "dist")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Обработка всех маршрутов — отправляем index.html (SPA)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Дополнительные маршруты для /privacy и /terms
app.get("/privacy", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
app.get("/terms", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Запуск сервера
app.listen(port, () => {
  logger.info(`Server running at http://localhost:${port}`);
});
