import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { YggdrasilAuthenticationService } from '../../../../../com/mojang/authlib/yggdrasil/YggdrasilAuthenticationService.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
import type { AccountType } from '../../../../../net/ccbluex/liquidbounce/authlib/account/AccountType.d.ts'
import type { MinecraftAccount$Companion } from '../../../../../net/ccbluex/liquidbounce/authlib/account/MinecraftAccount$Companion.d.ts'
import type { Ban } from '../../../../../net/ccbluex/liquidbounce/authlib/bantracker/Ban.d.ts'
import type { GameProfile } from '../../../../../net/ccbluex/liquidbounce/authlib/compat/GameProfile.d.ts'
import type { Session } from '../../../../../net/ccbluex/liquidbounce/authlib/compat/Session.d.ts'
export class MinecraftAccount extends Object {
    static Companion: MinecraftAccount$Companion;
    static fromJson(paramarg0: JsonObject): MinecraftAccount;
    static fromName(paramarg0: string): MinecraftAccount;
    protected constructor(type: AccountType)
    bans: { [key: string]: Ban };
    readonly favorite: boolean;
    profile: GameProfile | null;
    readonly type: AccountType;
    favorite(): MinecraftAccount;
    protected fromRawJson(json: JsonObject): void;
    isBanned(serverName: string): boolean;
    listActiveBans(): Ban[];
    login(): Pair<Session, YggdrasilAuthenticationService>;
    refresh(): void;
    toJson(): JsonObject;
    protected toRawJson(json: JsonObject): void;
    trackBan(ban: Ban): void;
    unfavorite(): MinecraftAccount;
    untrackBan(serverName: string): void;
}