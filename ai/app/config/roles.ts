import { logger } from "@/logger/logger";
import UserRoles from "supertokens-node/recipe/userroles";

export function createRole(params: { name: string }) {
    UserRoles.createNewRoleOrAddPermissions(params.name, []);
}

export function init() {
    createRole({ name: "admin" });
    createRole({ name: "clerk" });
    createRole({ name: "user" });
    logger.info({ origin: "SuperTokens", type: "SuperTokens:Roles:Init", message: "Initialized roles" });
}
