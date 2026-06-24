import type { UserAttributesRequest$FriendsPreferences } from '../../../../../com/mojang/authlib/yggdrasil/request/UserAttributesRequest$FriendsPreferences.d.ts'
import type { UserAttributesRequest$ProfanityFilterPreferences } from '../../../../../com/mojang/authlib/yggdrasil/request/UserAttributesRequest$ProfanityFilterPreferences.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UserAttributesRequest extends Record {
    constructor(profanityFilterPreferences: UserAttributesRequest$ProfanityFilterPreferences, friendsPreferences: UserAttributesRequest$FriendsPreferences)
    // private friendsPreferences: UserAttributesRequest$FriendsPreferences;
    // private profanityFilterPreferences: UserAttributesRequest$ProfanityFilterPreferences;
    equals(arg0: Object | null): boolean;
    friendsPreferences(): UserAttributesRequest$FriendsPreferences;
    hashCode(): number;
    profanityFilterPreferences(): UserAttributesRequest$ProfanityFilterPreferences;
    toString(): string;
}