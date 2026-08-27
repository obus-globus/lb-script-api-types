import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { MinecraftAccount } from '../../../../../net/ccbluex/liquidbounce/features/account/MinecraftAccount.d.ts'
import type { MinecraftAccount$Companion } from '../../../../../net/ccbluex/liquidbounce/features/account/MinecraftAccount$Companion.d.ts'
/**
 * A cracked account - has no credentials and cannot join premium servers.
 *
 * With {@link online} set, the real UUID of the name is looked up so that skins resolve; otherwise the
 * offline UUID Minecraft derives from the name is used.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/account/CrackedAccount.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/CrackedAccount.kt:35}
 */
export class CrackedAccount extends MinecraftAccount {
    static Companion: MinecraftAccount$Companion;
    static fromJson(json: JsonObject): MinecraftAccount;
    /**
     * Used for JSON deserialize.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/account/CrackedAccount.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/CrackedAccount.kt:45}
     */
    constructor()
    constructor(username: string, online: boolean)
    // private online: boolean;
    protected acquireAccessToken(): string;
    protected fromRawJson(json: JsonObject): void;
    refresh(): void;
    protected toRawJson(json: JsonObject): void;
}