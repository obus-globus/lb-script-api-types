import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { UserAttributesResponse$BanStatus$BannedScope } from '../../../../../com/mojang/authlib/yggdrasil/response/UserAttributesResponse$BanStatus$BannedScope.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UserAttributesResponse$BanStatus extends Record {
    constructor(bannedScopes: JavaMap<string, UserAttributesResponse$BanStatus$BannedScope>)
    // private bannedScopes: JavaMap<string, UserAttributesResponse$BanStatus$BannedScope>;
    bannedScopes(): JavaMap<string, UserAttributesResponse$BanStatus$BannedScope>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}