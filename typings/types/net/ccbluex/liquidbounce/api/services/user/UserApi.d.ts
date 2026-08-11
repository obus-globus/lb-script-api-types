import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Continuation } from '../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { BaseApi } from '../../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
import type { OAuthSession } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/OAuthSession.d.ts'
import type { Cosmetic } from '../../../../../../net/ccbluex/liquidbounce/api/models/cosmetics/Cosmetic.d.ts'
import type { UserInformation } from '../../../../../../net/ccbluex/liquidbounce/api/models/user/UserInformation.d.ts'
/**
 * API for user-related endpoints that require authentication
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b7cc679e71b1bc95d19a1e1535f79a1c2164149e/src/main/kotlin/net/ccbluex/liquidbounce/api/services/user/UserApi.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/api/services/user/UserApi.kt:34}
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