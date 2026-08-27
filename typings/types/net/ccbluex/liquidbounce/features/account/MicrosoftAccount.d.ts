import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { MicrosoftAccount$Companion } from '../../../../../net/ccbluex/liquidbounce/features/account/MicrosoftAccount$Companion.d.ts'
import type { MinecraftAccount } from '../../../../../net/ccbluex/liquidbounce/features/account/MinecraftAccount.d.ts'
import type { JavaAuthManager } from '../../../../../net/raphimc/minecraftauth/java/JavaAuthManager.d.ts'
/**
 * A premium account authenticated through a Microsoft account.
 *
 * Authentication is delegated to {@link MinecraftAuth}(https://github.com/CCBlueX/minecraft-auth-java),
 * which implements the full Microsoft -> Xbox Live -> XSTS -> Minecraft token exchange. Every
 * `buildFrom*` blocks the calling thread until the sign-in completes, so none of them may be called
 * on the render thread.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/account/MicrosoftAccount.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/MicrosoftAccount.kt:43}
 */
export class MicrosoftAccount extends MinecraftAccount {
    static Companion: MicrosoftAccount$Companion;
    static fromJson(json: JsonObject): MinecraftAccount;
    /**
     * Used for JSON deserialize.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/account/MicrosoftAccount.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/MicrosoftAccount.kt:50}
     */
    constructor()
    constructor(authManager: JavaAuthManager | null)
    // private authManager: JavaAuthManager | null;
    protected acquireAccessToken(): string;
    protected fromRawJson(json: JsonObject): void;
    refresh(): void;
    // private requireAuthManager(): JavaAuthManager;
    /**
     * The full {@link JavaAuthManager} state (MSA refresh token and all cached Xbox/Minecraft tokens) is
     * embedded so that the session can be restored without signing in again.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/account/MicrosoftAccount.kt#L72 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/MicrosoftAccount.kt:72}
     */
    protected toRawJson(json: JsonObject): void;
}