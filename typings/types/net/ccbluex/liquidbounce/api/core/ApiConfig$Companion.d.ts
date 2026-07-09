import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ApiConfig } from '../../../../../net/ccbluex/liquidbounce/api/core/ApiConfig.d.ts'
export class ApiConfig$Companion extends Object {
    API_BRANCH: string;
    // private API_URLS: string[];
    AUTH_AUTHORIZE_URL: string;
    AUTH_BASE_URL: string;
    AUTH_CLIENT_ID: string;
    // private AVATAR_BASE_URL: string;
    AVATAR_USERNAME_URL: string;
    AVATAR_UUID_URL: string;
    CLIENT_CDN: string;
    /**
     * Defines the API environment for LiquidBounce.
     * This should be initialized before the API is used through {@link net.ccbluex.liquidbounce.LiquidBounce}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/api/core/ApiConfig.kt#L72 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/ApiConfig.kt:72}
     */
    readonly config: ApiConfig;
    lookup(): ApiConfig;
}