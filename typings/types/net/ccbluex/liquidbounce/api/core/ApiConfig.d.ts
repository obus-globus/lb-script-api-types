import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ApiConfig$Companion } from '../../../../../net/ccbluex/liquidbounce/api/core/ApiConfig$Companion.d.ts'
export class ApiConfig extends Object {
    /**
     * This makes sense because we want forks to be able to use this API and not only the official client.
     * It also allows us to use API endpoints for legacy on other branches.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/api/core/ApiConfig.kt#L62 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/ApiConfig.kt:62}
     */
    static API_BRANCH: string;
    static AUTH_AUTHORIZE_URL: string;
    static AUTH_BASE_URL: string;
    static AUTH_CLIENT_ID: string;
    static AVATAR_USERNAME_URL: string;
    static AVATAR_UUID_URL: string;
    static CLIENT_CDN: string;
    static Companion: ApiConfig$Companion;
    constructor(url: string, secure: boolean, sessionToken: string)
    readonly apiEndpointV1: string;
    readonly apiEndpointV3: string;
    readonly secure: boolean;
    readonly sessionToken: string;
    readonly url: string;
}