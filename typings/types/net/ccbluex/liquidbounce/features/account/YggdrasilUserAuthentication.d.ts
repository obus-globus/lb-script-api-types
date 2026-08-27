import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { YggdrasilSession } from '../../../../../net/ccbluex/liquidbounce/features/account/YggdrasilSession.d.ts'
import type { YggdrasilUserAuthentication$Companion } from '../../../../../net/ccbluex/liquidbounce/features/account/YggdrasilUserAuthentication$Companion.d.ts'
/**
 * A Yggdrasil `/authenticate` client, used for alt services such as TheAltening. Mojang itself is not
 * authenticated against through here - MinecraftAuth does that.
 *
 * Documentation: https://wiki.vg/Authentication
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/account/YggdrasilUserAuthentication.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/YggdrasilUserAuthentication.kt:39}
 */
export class YggdrasilUserAuthentication extends Object {
    static Companion: YggdrasilUserAuthentication$Companion;
    constructor(baseUrl: string)
    readonly baseUrl: string;
    authenticate(username: string, password: string): YggdrasilSession;
}