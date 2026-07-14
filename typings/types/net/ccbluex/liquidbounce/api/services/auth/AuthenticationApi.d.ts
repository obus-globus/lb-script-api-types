import type { BaseApi } from '../../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
import type { TokenResponse } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/TokenResponse.d.ts'
/**
 * API for OAuth authentication
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/AuthenticationApi.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/AuthenticationApi.kt:29}
 */
export class AuthenticationApi extends BaseApi {
    static INSTANCE: AuthenticationApi;
    exchangeToken(clientId: string, code: string, codeVerifier: string, redirectUri: string): TokenResponse;
    refreshToken(clientId: string, refreshToken: string): TokenResponse;
}