import { pino, type LoggerOptions } from "pino";

function createLogger() {
  const isDevelopment = process.env.NODE_ENV === "development";

  const config: LoggerOptions = {
    level: process.env.LOG_LEVEL || (isDevelopment ? "debug" : "info"),
    base: {
      pid: process.pid,
    },
    timestamp: () => `,"time":"${new Date().toISOString()}"`,
    formatters: {
      level(label) {
        return { level: label }; // include name instead of number
      },
    },
  };

  return pino(config);
}

export const logger = createLogger();
