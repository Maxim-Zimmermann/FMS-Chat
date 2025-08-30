"use server"

import sequelize from "./db-config";
import Chat from "./chatsModel";
import ChatMessage from "./chatMessageModel";
import { logger } from "@/logger/logger";

Chat.hasMany(ChatMessage, {
    foreignKey: "chat_uuid",
    sourceKey: "chat_uuid"
});

ChatMessage.belongsTo(Chat, {
    foreignKey: "chat_uuid",
    targetKey: "chat_uuid"
});

export async function init() {
    try {
        await sequelize.sync({ alter: true }); // TODO: remove alter
    } catch (err) {
        logger.error(err, 'DB.init.sync.error');
    } finally {
        logger.info({ component: "Database", table: sequelize.models.Chat.tableName }, 'DB.init.sync.success');
    }
}