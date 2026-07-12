import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { BaseApi } from '../../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
import type { OAuthSession } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/OAuthSession.d.ts'
import type { Cosmetic } from '../../../../../../net/ccbluex/liquidbounce/api/models/cosmetics/Cosmetic.d.ts'
import type { UserInformation } from '../../../../../../net/ccbluex/liquidbounce/api/models/user/UserInformation.d.ts'
/**
 * API for user-related endpoints that require authentication
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/api/services/user/UserApi.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/api/services/user/UserApi.kt:34}
 */
export class UserApi extends BaseApi {
    static INSTANCE: UserApi;
    getCosmetics(session: OAuthSession): Cosmetic[];
    getUserInformation(session: OAuthSession): UserInformation;
    transferTemporaryOwnership(session: OAuthSession, uuid: UUID): void;
}