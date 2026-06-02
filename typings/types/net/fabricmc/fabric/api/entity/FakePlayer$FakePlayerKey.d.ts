import type { GameProfile } from '../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
export class FakePlayer$FakePlayerKey extends Record {
    private constructor(level: ServerLevel, profile: GameProfile)
    // private level: ServerLevel;
    // private profile: GameProfile;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    level(): ServerLevel;
    profile(): GameProfile;
    toString(): string;
}