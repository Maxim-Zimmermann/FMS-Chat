"use server"

import { logger } from "./logger/logger";
import { init } from "./models/init-db";

export async function register() {
    logger.info({ component: "Logger", message: "Logger.init.success" });
    try {
        await init();
    } catch (err) {
        logger.error(err, "Inst.db.init.error");
    } finally {
        logger.info({ component: "Db", message: "Inst.db.init.success" });
    }
}