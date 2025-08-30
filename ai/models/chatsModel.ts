"use server"

import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "./db-config";

interface ChatAttributes {
    chat_uuid: string;
    owner_uuid: string;
    title: string;
    is_deleted: boolean;
}

interface ChatCreationAttributes extends Optional<ChatAttributes, "chat_uuid"> {}

class Chat extends Model<ChatAttributes, ChatCreationAttributes> implements ChatAttributes {
    public chat_uuid!: string;
    public owner_uuid!: string;
    public title!: string;
    public is_deleted!: boolean;
}

Chat.init({
    chat_uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    owner_uuid: {
        type: DataTypes.UUID,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: "Chat"
});

export default Chat;