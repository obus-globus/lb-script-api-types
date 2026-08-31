import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { MinecraftAccount } from '../../../../../net/ccbluex/liquidbounce/features/account/MinecraftAccount.d.ts'
import type { SessionAccount$Companion } from '../../../../../net/ccbluex/liquidbounce/features/account/SessionAccount$Companion.d.ts'
/**
 * A premium account represented by nothing but a Minecraft access token.
 *
 * The token cannot be refreshed - it is used as-is until it expires, at which point the account has
 * to be re-added.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/account/SessionAccount.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/SessionAccount.kt:34}
 */
export class SessionAccount extends MinecraftAccount {
    static Companion: SessionAccount$Companion;
    static fromJson(json: JsonObject): MinecraftAccount;
    /**
     * Used for JSON deserialize.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/account/SessionAccount.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/SessionAccount.kt:39}
     */
    constructor()
    constructor(session: string)
    // private session: string;
    protected acquireAccessToken(): string;
    protected fromRawJson(json: JsonObject): void;
    refresh(): void;
    protected toRawJson(json: JsonObject): void;
}