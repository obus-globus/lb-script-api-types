import type { ChatToggleValue } from '../../../../../com/mojang/authlib/yggdrasil/ChatToggleValue.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UserAttributesResponse$ChatPreferences extends Record {
    constructor(textCommunication: ChatToggleValue)
    // private textCommunication: ChatToggleValue;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    textCommunication(): ChatToggleValue;
    toString(): string;
}