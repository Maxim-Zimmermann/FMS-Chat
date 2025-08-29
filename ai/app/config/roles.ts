import { logger } from "@/logger/logger";
import UserRoles from "supertokens-node/recipe/userroles";

export function createRole(params: { name: string }) {
    try {
        UserRoles.createNewRoleOrAddPermissions(params.name, []);
    } catch (error) {
        logger.error({ component: "SuperTokens", message: `Error creating role ${params.name}`, error: error }, "SuperTokens.init.roles.createRole.error");
    } finally {
        logger.info({ component: "SuperTokens", message: `Created role ${params.name}` }, "SuperTokens.init.roles.createRole.success");
    }
}

export function init() {
    createRole({ name: "admin" });
    createRole({ name: "clerk" });
    createRole({ name: "user" });
    logger.info({ component: "SuperTokens" }, "SuperTokens.init.roles.success");
}
