import { logger } from "./logger/logger";

export function register() {
    logger.info({ origin: "Instrumentation", type: "App:Init", message: "App initialized" });
}