import ThirdParty from "supertokens-node/recipe/thirdparty";
import type { ProviderInput } from "supertokens-node/recipe/thirdparty/types";
import Session from "supertokens-node/recipe/session";
import Dashboard from "supertokens-node/recipe/dashboard";
import UserRoles from "supertokens-node/recipe/userroles";
import type { TypeInput } from "supertokens-node/types";

export function getApiDomain() {
    const apiPort = 3000;
    const apiUrl = `http://localhost:${apiPort}`;
    return apiUrl;
}

export function getWebsiteDomain() {
    const websitePort = 3000;
    const websiteUrl = `http://localhost:${websitePort}`;
    return websiteUrl;
}

export const SuperTokensConfig: TypeInput = {
    supertokens: {
        connectionURI: "http://localhost:3567",
    },
    appInfo: {
        appName: "SuperTokens Demo App",
        apiDomain: getApiDomain(),
        websiteDomain: getWebsiteDomain(),
        apiBasePath: "/api/auth/",
        websiteBasePath: "/auth",
    },
    recipeList: [
        ThirdParty.init({
            signInAndUpFeature: {
                providers: [
                    {
                        config: {
                            thirdPartyId: "google",
                            clients: [
                                {
                                    clientId: "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
                                    clientSecret: "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",
                                    
                                },
                            ],
                        },
                    },
                    {
                        config: {
                            thirdPartyId: "github",
                            clients: [
                                {
                                    clientId: "467101b197249757c71f",
                                    clientSecret: "e97051221f4b6426e8fe8d51486396703012f5bd",
                                    
                                },
                            ],
                        },
                    }
                ],
            },
        }),
        Dashboard.init(),
        UserRoles.init(),
        Session.init()
    ],
};