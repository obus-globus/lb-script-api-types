import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/api/core/ApiConfig.kt#L72 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/ApiConfig.kt:72}
     */
    readonly config: ApiConfig;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    lookup($completion: Continuation<ApiConfig>): any;
}