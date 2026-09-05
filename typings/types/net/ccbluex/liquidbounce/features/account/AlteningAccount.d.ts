import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { YggdrasilAuthenticationService } from '../../../../../com/mojang/authlib/yggdrasil/YggdrasilAuthenticationService.d.ts'
import type { AlteningAccount$Companion } from '../../../../../net/ccbluex/liquidbounce/features/account/AlteningAccount$Companion.d.ts'
import type { MinecraftAccount } from '../../../../../net/ccbluex/liquidbounce/features/account/MinecraftAccount.d.ts'
/**
 * An account from the TheAltening account generator.
 *
 * TheAltening still speaks the legacy Yggdrasil protocol, so the {@link accountToken} is exchanged for an
 * access token through {@link YggdrasilUserAuthentication} rather than through Microsoft.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/account/AlteningAccount.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/AlteningAccount.kt:47}
 */
export class AlteningAccount extends MinecraftAccount {
    static Companion: AlteningAccount$Companion;
    static fromJson(json: JsonObject): MinecraftAccount;
    /**
     * Used for JSON deserialize.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/account/AlteningAccount.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/AlteningAccount.kt:52}
     */
    constructor()
    constructor(accountToken: string)
    readonly accessToken: string;
    accountToken: string;
    // private authenticationService: YggdrasilAuthenticationService;
    // private /*not mapped: */ getAuthenticationService(): YggdrasilAuthenticationService;
    readonly hypixelLevel: number;
    readonly hypixelRank: string;
    protected acquireAccessToken(): string;
    protected fromRawJson(json: JsonObject): void;
    refresh(): void;
    protected toRawJson(json: JsonObject): void;
}