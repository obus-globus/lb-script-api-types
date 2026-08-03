import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Continuation } from '../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { BaseApi } from '../../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
import type { OAuthSession } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/OAuthSession.d.ts'
import type { Cosmetic } from '../../../../../../net/ccbluex/liquidbounce/api/models/cosmetics/Cosmetic.d.ts'
import type { UserInformation } from '../../../../../../net/ccbluex/liquidbounce/api/models/user/UserInformation.d.ts'
/**
 * API for user-related endpoints that require authentication
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/api/services/user/UserApi.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/api/services/user/UserApi.kt:34}
 */
export class UserApi extends BaseApi {
    static INSTANCE: UserApi;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    getCosmetics(session: OAuthSession, $completion: Continuation<Cosmetic[]>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    getUserInformation(session: OAuthSession, $completion: Continuation<UserInformation>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    transferTemporaryOwnership(session: OAuthSession, uuid: UUID, $completion: Continuation<void>): any;
}