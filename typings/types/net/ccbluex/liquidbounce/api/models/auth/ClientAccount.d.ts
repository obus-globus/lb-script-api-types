import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientAccount$Companion } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/ClientAccount$Companion.d.ts'
import type { OAuthSession } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/OAuthSession.d.ts'
import type { Cosmetic } from '../../../../../../net/ccbluex/liquidbounce/api/models/cosmetics/Cosmetic.d.ts'
import type { UserInformation } from '../../../../../../net/ccbluex/liquidbounce/api/models/user/UserInformation.d.ts'
/**
 * Represents a client account that is used to authenticate with the LiquidBounce API.
 * It might hold additional information that can be obtained from the API.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/api/models/auth/ClientAccount.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/api/models/auth/ClientAccount.kt:36}
 */
export class ClientAccount extends Object {
    static Companion: ClientAccount$Companion;
    static EMPTY_ACCOUNT: ClientAccount;
    static ENV_ACCOUNT: ClientAccount;
    constructor(session: OAuthSession | null, userInformation: UserInformation | null, cosmetics: Cosmetic[] | null)
    cosmetics: Cosmetic[] | null;
    // private session: OAuthSession | null;
    userInformation: UserInformation | null;
    // private component1(): OAuthSession | null;
    component2(): UserInformation | null;
    component3(): Cosmetic[] | null;
    copy(session: OAuthSession | null, userInformation: UserInformation | null, cosmetics: Cosmetic[] | null): ClientAccount;
    equals(other: Object | null): boolean;
    hashCode(): number;
    renew(): void;
    takeSession(): OAuthSession;
    toString(): string;
    transferTemporaryOwnership(uuid: UUID): void;
    updateCosmetics(): void;
    updateInfo(): void;
}