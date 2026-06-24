import type { ToggleValue } from '../../../../../com/mojang/authlib/yggdrasil/ToggleValue.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UserAttributesResponse$FriendsPreferences extends Record {
    constructor(friends: ToggleValue, acceptInvites: ToggleValue)
    // private acceptInvites: ToggleValue;
    // private friends: ToggleValue;
    acceptInvites(): ToggleValue;
    equals(arg0: Object | null): boolean;
    friends(): ToggleValue;
    hashCode(): number;
    toString(): string;
}