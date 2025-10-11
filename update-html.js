import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const manifestPath = path.resolve(__dirname, "dist/manifest.json");
const htmlPath = path.resolve(__dirname, "dist/index.html");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
let htmlContent = fs.readFileSync(htmlPath, "utf-8");
// Ищем CSS файл по имени, например, "style.css"
const cssEntryName = Object.keys(manifest).find((key) =>
  key.toLowerCase().includes("style.css")
);
if (cssEntryName && manifest[cssEntryName]) {
  const cssFilePath = manifest[cssEntryName].file; // путь к файлу с хешем
  // Удаляем существующую строку с rel="stylesheet" и crossorigin
  const regex = /<link\s+rel=["']stylesheet["']\s+crossorigin[^>]*\/?>/i;
  htmlContent = htmlContent.replace(regex, "");
  // Формируем блок preload
  const preloadBlock = `
    <link rel="preload" href="/${cssFilePath}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="/${cssFilePath}"></noscript>
    `;
  // Вставляем перед </head>
  if (htmlContent.includes("</head>")) {
    htmlContent = htmlContent.replace("</head>", `${preloadBlock}\n  </head>`);
    fs.writeFileSync(htmlPath, htmlContent, "utf-8");
    console.log("index.html успешно обновлен");
  } else {
    console.error("Тег </head> не найден в HTML-файле");
  }
} else {
  console.error("CSS файл не найден в manifest.json");
}
