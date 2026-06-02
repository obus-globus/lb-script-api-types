import type { GameProfile } from '../../../../../com/viaversion/viaversion/api/minecraft/GameProfile.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ResolvableProfile extends Record {
    constructor(arg0: GameProfile)
    constructor(profile: GameProfile, bodyTexture: string, capeTexture: string, elytraTexture: string, modelType: number)
    // private bodyTexture: string;
    // private capeTexture: string;
    // private elytraTexture: string;
    // private modelType: number;
    // private profile: GameProfile;
    bodyTexture(): string;
    capeTexture(): string;
    elytraTexture(): string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    modelType(): number;
    profile(): GameProfile;
    toString(): string;
}