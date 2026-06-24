import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class AmbientAdditionsSettings extends Record {
    static CODEC: Codec<AmbientAdditionsSettings>;
    constructor(soundEvent: Holder<SoundEvent>, tickChance: number)
    // private soundEvent: Holder<SoundEvent>;
    // private tickChance: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    soundEvent(): Holder<SoundEvent>;
    tickChance(): number;
    toString(): string;
}