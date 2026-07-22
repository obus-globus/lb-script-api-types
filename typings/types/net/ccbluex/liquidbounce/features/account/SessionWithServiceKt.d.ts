import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { User } from '../../../../../net/minecraft/client/User.d.ts'
export class SessionWithServiceKt extends Object {
    /**
     * Checks if the session is online by checking the account type and if we have a valid access token.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/features/account/SessionWithService.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/SessionWithService.kt:49}
     */
    static couldBeOnline(self: User): boolean;
}