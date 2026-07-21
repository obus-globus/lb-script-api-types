import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { ClientAccount$Companion } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/ClientAccount$Companion.d.ts'
import type { OAuthSession } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/OAuthSession.d.ts'
import type { Cosmetic } from '../../../../../../net/ccbluex/liquidbounce/api/models/cosmetics/Cosmetic.d.ts'
import type { UserInformation } from '../../../../../../net/ccbluex/liquidbounce/api/models/user/UserInformation.d.ts'
/**
 * Represents a client account that is used to authenticate with the LiquidBounce API.
 * It might hold additional information that can be obtained from the API.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/api/models/auth/ClientAccount.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/api/models/auth/ClientAccount.kt:36}
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
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    renew($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    takeSession($completion: Continuation<OAuthSession>): any;
    toString(): string;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    transferTemporaryOwnership(uuid: UUID, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    updateCosmetics($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    updateInfo($completion: Continuation<void>): any;
}