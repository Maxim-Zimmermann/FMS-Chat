import { RecipeListFunction, TypeInput } from "supertokens-node/types";
import SuperTokens from "supertokens-node";
import { SuperTokensConfig as STConfig } from "./backend";
import * as Roles from "./roles"
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
            logger.info({ component: "SuperTokens"}, "SuperTokens.init.success");
        } catch (err: any) {
            logger.error(err, "SuperTokens.init.error");
        }
    }
}
