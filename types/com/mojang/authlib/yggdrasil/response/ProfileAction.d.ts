import type { ProfileActionType } from '../../../../../com/mojang/authlib/yggdrasil/ProfileActionType.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ProfileAction extends Record {
    constructor(type: ProfileActionType)
    // private type: ProfileActionType;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): ProfileActionType;
}