"use server"

import { logger } from "@/logger/logger";
import { Sequelize } from "sequelize";
import pg from "pg";

let sequelize: Sequelize = initDbConnection();
if (!sequelize) {
    initDbConnection();
}

function initDbConnection() {
    sequelize = new Sequelize({
        dialect: "postgres",
        dialectModule: pg,

        host: process.env.DB_HOST || "localhost",
        port: Number(process.env.DB_PORT) || 5432,
        database: process.env.DB_NAME || "mydatabase",
        username: process.env.DB_USER || "myuser",
        password: process.env.DB_PASS || "mypassword",
        logging: (logMessage) => logger.debug({ dbMessage: logMessage }, 'DB.log'),
    });
    return sequelize;
}

// Test database connection
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        logger.info({ component: "Database", dbName: process.env.DB_NAME, dbPort: process.env.DB_PORT, dbUsername: process.env.DB_USER }, 'DB.connection.success');
    } catch (error) {
        logger.error(error, 'DB.connection.error');
    }
};

testConnection();

export default sequelize;