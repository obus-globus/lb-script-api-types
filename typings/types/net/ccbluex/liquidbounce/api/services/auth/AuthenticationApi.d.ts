import type { BaseApi } from '../../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
import type { TokenResponse } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/TokenResponse.d.ts'
/**
 * API for OAuth authentication
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/AuthenticationApi.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/AuthenticationApi.kt:29}
 */
export class AuthenticationApi extends BaseApi {
    static INSTANCE: AuthenticationApi;
    exchangeToken(clientId: string, code: string, codeVerifier: string, redirectUri: string): TokenResponse;
    refreshToken(clientId: string, refreshToken: string): TokenResponse;
}