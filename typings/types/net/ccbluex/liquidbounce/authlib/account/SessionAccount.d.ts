import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { YggdrasilAuthenticationService } from '../../../../../com/mojang/authlib/yggdrasil/YggdrasilAuthenticationService.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
import type { MinecraftAccount } from '../../../../../net/ccbluex/liquidbounce/authlib/account/MinecraftAccount.d.ts'
import type { SessionAccount$Companion } from '../../../../../net/ccbluex/liquidbounce/authlib/account/SessionAccount$Companion.d.ts'
import type { Session } from '../../../../../net/ccbluex/liquidbounce/authlib/compat/Session.d.ts'
export class SessionAccount extends MinecraftAccount {
    static Companion: SessionAccount$Companion;
    static fromJson(json: JsonObject): MinecraftAccount;
    static fromName(name: string): MinecraftAccount;
    constructor()
    constructor(session: string)
    // private session: string;
    protected fromRawJson(json: JsonObject): void;
    login(): Pair<Session, YggdrasilAuthenticationService>;
    refresh(): void;
    protected toRawJson(json: JsonObject): void;
}