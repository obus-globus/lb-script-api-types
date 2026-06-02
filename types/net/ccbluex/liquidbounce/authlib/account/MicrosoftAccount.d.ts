import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { YggdrasilAuthenticationService } from '../../../../../com/mojang/authlib/yggdrasil/YggdrasilAuthenticationService.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
import type { MicrosoftAccount$AuthMethod } from '../../../../../net/ccbluex/liquidbounce/authlib/account/MicrosoftAccount$AuthMethod.d.ts'
import type { MicrosoftAccount$Companion } from '../../../../../net/ccbluex/liquidbounce/authlib/account/MicrosoftAccount$Companion.d.ts'
import type { MinecraftAccount } from '../../../../../net/ccbluex/liquidbounce/authlib/account/MinecraftAccount.d.ts'
import type { MinecraftAccount$Companion } from '../../../../../net/ccbluex/liquidbounce/authlib/account/MinecraftAccount$Companion.d.ts'
import type { Session } from '../../../../../net/ccbluex/liquidbounce/authlib/compat/Session.d.ts'
export class MicrosoftAccount extends MinecraftAccount {
    static Companion: MicrosoftAccount$Companion;
    static Companion: MinecraftAccount$Companion;
    static MC_AUTH_DATA: string;
    static MC_AUTH_URL: string;
    static MC_PROFILE_URL: string;
    static XBOX_AUTH_DATA: string;
    static XBOX_AUTH_URL: string;
    static XBOX_PRE_AUTH_URL: string;
    static XBOX_REFRESH_DATA: string;
    static XBOX_XBL_DATA: string;
    static XBOX_XBL_URL: string;
    static XBOX_XSTS_DATA: string;
    static XBOX_XSTS_URL: string;
    static fromJson(paramarg0: JsonObject): MinecraftAccount;
    static fromName(paramarg0: string): MinecraftAccount;
    constructor()
    // private accessToken: string;
    // private authMethod: MicrosoftAccount$AuthMethod;
    // private refreshToken: string;
    protected fromRawJson(json: JsonObject): void;
    login(): Pair<Session, YggdrasilAuthenticationService>;
    refresh(): void;
    protected toRawJson(json: JsonObject): void;
}