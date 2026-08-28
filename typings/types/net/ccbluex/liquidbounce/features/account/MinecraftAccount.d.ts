import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { GameProfile } from '../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { YggdrasilAuthenticationService } from '../../../../../com/mojang/authlib/yggdrasil/YggdrasilAuthenticationService.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
import type { AccountService } from '../../../../../net/ccbluex/liquidbounce/features/account/AccountService.d.ts'
import type { Ban } from '../../../../../net/ccbluex/liquidbounce/features/account/Ban.d.ts'
import type { MinecraftAccount$Companion } from '../../../../../net/ccbluex/liquidbounce/features/account/MinecraftAccount$Companion.d.ts'
import type { SessionWithService } from '../../../../../net/ccbluex/liquidbounce/features/account/SessionWithService.d.ts'
/**
 * An account the client can log into.
 *
 * Subclasses own their credentials and how those are refreshed. Everything shared between them - the
 * resolved profile, the favourite flag, ban tracking and JSON persistence - lives here.
 *
 * This was previously the `mc-authlib` library. The Microsoft/Xbox Live/XSTS/Minecraft token chain
 * behind {@link MicrosoftAccount} is implemented by
 * {@link MinecraftAuth}(https://github.com/CCBlueX/minecraft-auth-java).
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/account/MinecraftAccount.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/MinecraftAccount.kt:59}
 */
export class MinecraftAccount extends Object {
    static Companion: MinecraftAccount$Companion;
    /**
     * @throws IllegalArgumentException if {@link json} is not a valid account
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/account/MinecraftAccount.kt#L152 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/MinecraftAccount.kt:152}
     */
    static fromJson(json: JsonObject): MinecraftAccount;
    protected constructor(service: AccountService)
    // private /*not mapped: */ getAuthenticationService(): YggdrasilAuthenticationService;
    readonly bans: JavaMap<string, Ban>;
    favorite: boolean;
    readonly profile: GameProfile | null;
    readonly service: AccountService;
    /**
     * Known as soon as the account exists, unlike {@link profile}, which is only resolved once {@link refresh} has
     * succeeded at least once.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/account/MinecraftAccount.kt#L65 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/MinecraftAccount.kt:65}
     */
    readonly username: string;
    protected acquireAccessToken(): string;
    protected fromRawJson(json: JsonObject): void;
    isBanned(serverName: string): boolean;
    listActiveBans(): Ban[];
    /**
     * Authenticates the account and returns the session to hand to the game, along with the
     * authentication service that resolves other players' profiles while it is active.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/account/MinecraftAccount.kt#L90 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/MinecraftAccount.kt:90}
     */
    login(): Pair<SessionWithService, YggdrasilAuthenticationService>;
    refresh(): void;
    toJson(): JsonObject;
    protected toRawJson(json: JsonObject): void;
    /**
     * Tracking bans is up to the caller - this only stores and expires them.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/account/MinecraftAccount.kt#L132 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/MinecraftAccount.kt:132}
     */
    trackBan(ban: Ban): void;
    untrackBan(serverName: string): void;
}