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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/account/AlteningAccount.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/AlteningAccount.kt:47}
 */
export class AlteningAccount extends MinecraftAccount {
    static Companion: AlteningAccount$Companion;
    static fromJson(json: JsonObject): MinecraftAccount;
    /**
     * Used for JSON deserialize.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/account/AlteningAccount.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/AlteningAccount.kt:52}
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