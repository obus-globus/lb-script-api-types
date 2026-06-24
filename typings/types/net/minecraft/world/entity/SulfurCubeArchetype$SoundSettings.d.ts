import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class SulfurCubeArchetype$SoundSettings extends Record {
    static CODEC: Codec<SulfurCubeArchetype$SoundSettings>;
    constructor(hitSound: Holder<SoundEvent>, pushSound: Holder<SoundEvent>, pushSoundImpulseThreshold: number, pushSoundCooldown: number)
    // private hitSound: Holder<SoundEvent>;
    // private pushSound: Holder<SoundEvent>;
    // private pushSoundCooldown: number;
    // private pushSoundImpulseThreshold: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    hitSound(): Holder<SoundEvent>;
    pushSound(): Holder<SoundEvent>;
    pushSoundCooldown(): number;
    pushSoundImpulseThreshold(): number;
    toString(): string;
}