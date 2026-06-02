import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class ChickenSoundVariant$ChickenSoundSet extends Record {
    constructor(ambientSound: Holder<SoundEvent>, hurtSound: Holder<SoundEvent>, deathSound: Holder<SoundEvent>, stepSound: Holder<SoundEvent>)
    // private ambientSound: Holder<SoundEvent>;
    // private deathSound: Holder<SoundEvent>;
    // private hurtSound: Holder<SoundEvent>;
    // private stepSound: Holder<SoundEvent>;
    ambientSound(): Holder<SoundEvent>;
    deathSound(): Holder<SoundEvent>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    hurtSound(): Holder<SoundEvent>;
    stepSound(): Holder<SoundEvent>;
    toString(): string;
}