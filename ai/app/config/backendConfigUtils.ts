"use server"

import { RecipeListFunction, TypeInput } from "supertokens-node/types";
import SuperTokens from "supertokens-node";
import { SuperTokensConfig as STConfig } from "./backend";
import * as Roles from "./roles"
import * as Db from "@/models/init-db";
import { logger } from "../../logger/logger";

export let backendConfig = (): TypeInput => {
    return {
        supertokens: {
            // this is the location of the SuperTokens core.
            connectionURI: STConfig.supertokens.connectionURI,
        },
        appInfo: STConfig.appInfo,
        // recipeList contains all the modules that you want to
        // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
        recipeList: STConfig.recipeList as unknown as RecipeListFunction[],
        isInServerlessEnv: true,
        framework: "custom",
    };
};

let initialized = false;
export function ensureSuperTokensInit() {
    if (!initialized) {
        try {
            SuperTokens.init(backendConfig());
            initialized = true;
            Roles.init();
        } catch (err: any) {
            logger.error(err, "SuperTokens.init.error");
        } finally {
            logger.info({ component: "SuperTokens" }, "SuperTokens.init.success");
            initApp();
        }
    }
}

function initApp() {
    try {
        initDb();
        initCerbos();
    } catch (err) {
        logger.error(err, "App.init.error");
    } finally {
        logger.info({ component: "App" }, "App.init.success");
    }
}

function initDb(): void {
    try {
        Db.init();
    } catch (err) {
        logger.error(err, "Db.init.error");
    } finally {
        logger.info({ component: "Db" }, "Db.init.success");
    }
}

function initCerbos() {
    try {
        // Initialize Cerbos
    } catch (err) {
        logger.error(err, "Cerbos.init.error");
    } finally {
        logger.info({ component: "Cerbos" }, "Cerbos.init.success");
    }
}