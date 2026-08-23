import type { GameProfile } from '../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class YggdrasilSession extends Object {
    constructor(profile: GameProfile, accessToken: string)
    readonly accessToken: string;
    readonly profile: GameProfile;
    component1(): GameProfile;
    component2(): string;
    copy(profile: GameProfile, accessToken: string): YggdrasilSession;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}