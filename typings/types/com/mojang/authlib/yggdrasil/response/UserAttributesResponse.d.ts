import type { UserAttributesResponse$BanStatus } from '../../../../../com/mojang/authlib/yggdrasil/response/UserAttributesResponse$BanStatus.d.ts'
import type { UserAttributesResponse$ChatPreferences } from '../../../../../com/mojang/authlib/yggdrasil/response/UserAttributesResponse$ChatPreferences.d.ts'
import type { UserAttributesResponse$FriendsPreferences } from '../../../../../com/mojang/authlib/yggdrasil/response/UserAttributesResponse$FriendsPreferences.d.ts'
import type { UserAttributesResponse$Privileges } from '../../../../../com/mojang/authlib/yggdrasil/response/UserAttributesResponse$Privileges.d.ts'
import type { UserAttributesResponse$ProfanityFilterPreferences } from '../../../../../com/mojang/authlib/yggdrasil/response/UserAttributesResponse$ProfanityFilterPreferences.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UserAttributesResponse extends Record {
    constructor(privileges: UserAttributesResponse$Privileges, profanityFilterPreferences: UserAttributesResponse$ProfanityFilterPreferences, friendsPreferences: UserAttributesResponse$FriendsPreferences, chatPreferences: UserAttributesResponse$ChatPreferences, banStatus: UserAttributesResponse$BanStatus)
    // private banStatus: UserAttributesResponse$BanStatus;
    // private chatPreferences: UserAttributesResponse$ChatPreferences;
    // private friendsPreferences: UserAttributesResponse$FriendsPreferences;
    // private privileges: UserAttributesResponse$Privileges;
    // private profanityFilterPreferences: UserAttributesResponse$ProfanityFilterPreferences;
    banStatus(): UserAttributesResponse$BanStatus;
    chatPreferences(): UserAttributesResponse$ChatPreferences;
    equals(arg0: Object | null): boolean;
    friendsPreferences(): UserAttributesResponse$FriendsPreferences;
    hashCode(): number;
    privileges(): UserAttributesResponse$Privileges;
    profanityFilterPreferences(): UserAttributesResponse$ProfanityFilterPreferences;
    toString(): string;
}