const isBrowser = typeof window !== "undefined";

const logger = {
  error: (message) => {
    if (isBrowser) {
      console.error(message);

      // Отправляем ошибку на сервер
      fetch("/api/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ level: "error", message }),
      }).catch(() => {
        // Можно обработать ошибку отправки
      });
    } else {
      console.error(message);
    }
  },
  info: (message) => {
    if (isBrowser) {
      console.info(message);
    } else {
      console.log(message);
    }
  },
  // Можно добавить другие уровни
};

export default logger;
