import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { ProfileActionType } from '../../../../com/mojang/authlib/yggdrasil/ProfileActionType.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ProfileResult extends Record {
    constructor(arg0: GameProfile)
    constructor(profile: GameProfile, actions: ProfileActionType[])
    // private actions: ProfileActionType[];
    // private profile: GameProfile;
    actions(): ProfileActionType[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    profile(): GameProfile;
    toString(): string;
}