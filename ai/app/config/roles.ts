import { logger } from "@/logger/logger";
import UserRoles from "supertokens-node/recipe/userroles";

export async function createRole(params: { name: string }) {
    try {
        await UserRoles.createNewRoleOrAddPermissions(params.name, []);
    } catch (error) {
        logger.error(error, "SuperTokens.init.roles.createRole.error");
    } finally {
        logger.info({ component: "SuperTokens", roleName: `${params.name}` }, "SuperTokens.init.roles.createRole.success");
    }
}

export function init() {
    createRole({ name: "admin" });
    createRole({ name: "clerk" });
    createRole({ name: "user" });
    logger.info({ component: "SuperTokens" }, "SuperTokens.init.roles.success");
}
