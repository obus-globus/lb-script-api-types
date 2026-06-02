import type { UserAttributesResponse$BanStatus } from '../../../../../com/mojang/authlib/yggdrasil/response/UserAttributesResponse$BanStatus.d.ts'
import type { UserAttributesResponse$Privileges } from '../../../../../com/mojang/authlib/yggdrasil/response/UserAttributesResponse$Privileges.d.ts'
import type { UserAttributesResponse$ProfanityFilterPreferences } from '../../../../../com/mojang/authlib/yggdrasil/response/UserAttributesResponse$ProfanityFilterPreferences.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UserAttributesResponse extends Record {
    constructor(privileges: UserAttributesResponse$Privileges, profanityFilterPreferences: UserAttributesResponse$ProfanityFilterPreferences, banStatus: UserAttributesResponse$BanStatus)
    // private banStatus: UserAttributesResponse$BanStatus;
    // private privileges: UserAttributesResponse$Privileges;
    // private profanityFilterPreferences: UserAttributesResponse$ProfanityFilterPreferences;
    banStatus(): UserAttributesResponse$BanStatus;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    privileges(): UserAttributesResponse$Privileges;
    profanityFilterPreferences(): UserAttributesResponse$ProfanityFilterPreferences;
    toString(): string;
}