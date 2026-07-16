import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { YggdrasilAuthenticationService } from '../../../../../com/mojang/authlib/yggdrasil/YggdrasilAuthenticationService.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
import type { AlteningAccount$Companion } from '../../../../../net/ccbluex/liquidbounce/authlib/account/AlteningAccount$Companion.d.ts'
import type { MinecraftAccount } from '../../../../../net/ccbluex/liquidbounce/authlib/account/MinecraftAccount.d.ts'
import type { Session } from '../../../../../net/ccbluex/liquidbounce/authlib/compat/Session.d.ts'
import type { YggdrasilUserAuthentication } from '../../../../../net/ccbluex/liquidbounce/authlib/yggdrasil/YggdrasilUserAuthentication.d.ts'
export class AlteningAccount extends MinecraftAccount {
    static Companion: AlteningAccount$Companion;
    static fromJson(json: JsonObject): MinecraftAccount;
    static fromName(name: string): MinecraftAccount;
    constructor()
    constructor(accountToken: string)
    readonly accessToken: string;
    accountToken: string;
    readonly hypixelLevel: number;
    readonly hypixelRank: string;
    // private sessionService: YggdrasilAuthenticationService;
    // private userAuthentication: YggdrasilUserAuthentication;
    protected fromRawJson(json: JsonObject): void;
    login(): Pair<Session, YggdrasilAuthenticationService>;
    refresh(): void;
    protected toRawJson(json: JsonObject): void;
}