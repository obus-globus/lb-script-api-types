import type { Continuation } from '../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { BaseApi } from '../../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
import type { TokenResponse } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/TokenResponse.d.ts'
/**
 * API for OAuth authentication
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/AuthenticationApi.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/AuthenticationApi.kt:29}
 */
export class AuthenticationApi extends BaseApi {
    static INSTANCE: AuthenticationApi;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    exchangeToken(clientId: string, code: string, codeVerifier: string, redirectUri: string, $completion: Continuation<TokenResponse>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    refreshToken(clientId: string, refreshToken: string, $completion: Continuation<TokenResponse>): any;
}