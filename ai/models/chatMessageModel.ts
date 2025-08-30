/**
 * message_uuid
 * chat_uuid
 * type: ENUM ("user", "assistant", "system_success")
 * content
 */

import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "./db-config";

interface ChatMessageAttributes {
    message_uuid: string;
    type: "user" | "assistant" | "system_success";
    content: string;
}

interface ChatMessageCreationAttributes extends Optional<ChatMessageAttributes, "message_uuid"> {}

class ChatMessage extends Model<ChatMessageAttributes, ChatMessageCreationAttributes> implements ChatMessageAttributes {
    public message_uuid!: string;
    public type!: "user" | "assistant" | "system_success";
    public content!: string;
}

ChatMessage.init({
    message_uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    type: {
        type: DataTypes.ENUM("user", "assistant", "system_success"),
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "ChatMessage"
});

export default ChatMessage;