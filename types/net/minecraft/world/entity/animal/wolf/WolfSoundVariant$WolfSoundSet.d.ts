import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class WolfSoundVariant$WolfSoundSet extends Record {
    static CODEC: Codec<WolfSoundVariant$WolfSoundSet>;
    constructor(ambientSound: Holder<SoundEvent>, deathSound: Holder<SoundEvent>, growlSound: Holder<SoundEvent>, hurtSound: Holder<SoundEvent>, pantSound: Holder<SoundEvent>, whineSound: Holder<SoundEvent>, stepSound: Holder<SoundEvent>)
    // private ambientSound: Holder<SoundEvent>;
    // private deathSound: Holder<SoundEvent>;
    // private growlSound: Holder<SoundEvent>;
    // private hurtSound: Holder<SoundEvent>;
    // private pantSound: Holder<SoundEvent>;
    // private stepSound: Holder<SoundEvent>;
    // private whineSound: Holder<SoundEvent>;
    ambientSound(): Holder<SoundEvent>;
    deathSound(): Holder<SoundEvent>;
    equals(o: Object | null): boolean;
    growlSound(): Holder<SoundEvent>;
    hashCode(): number;
    hurtSound(): Holder<SoundEvent>;
    pantSound(): Holder<SoundEvent>;
    stepSound(): Holder<SoundEvent>;
    toString(): string;
    whineSound(): Holder<SoundEvent>;
}