import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Interceptor } from '../../../../../okhttp3/Interceptor.d.ts'
import type { Interceptor$Chain } from '../../../../../okhttp3/Interceptor$Chain.d.ts'
import type { Interceptor$Companion } from '../../../../../okhttp3/Interceptor$Companion.d.ts'
import type { Response } from '../../../../../okhttp3/Response.d.ts'
/**
 * Injects `Authorization: Bearer <token>`. The provider is evaluated per request, so the token can change
 * without recreating the client.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/api/interceptors/TokenInterceptor.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/api/interceptors/TokenInterceptor.kt:29}
 */
export class TokenInterceptor extends Object implements Interceptor {
    static Companion: Interceptor$Companion;
    constructor(tokenProvider: () => string | null)
    // private tokenProvider: () => string | null;
    intercept(chain: Interceptor$Chain): Response;
}