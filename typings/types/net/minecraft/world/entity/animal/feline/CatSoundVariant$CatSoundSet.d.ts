import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class CatSoundVariant$CatSoundSet extends Record {
    constructor(ambientSound: Holder<SoundEvent>, strayAmbientSound: Holder<SoundEvent>, hissSound: Holder<SoundEvent>, hurtSound: Holder<SoundEvent>, deathSound: Holder<SoundEvent>, eatSound: Holder<SoundEvent>, begForFoodSound: Holder<SoundEvent>, purrSound: Holder<SoundEvent>, purreowSound: Holder<SoundEvent>)
    // private ambientSound: Holder<SoundEvent>;
    // private begForFoodSound: Holder<SoundEvent>;
    // private deathSound: Holder<SoundEvent>;
    // private eatSound: Holder<SoundEvent>;
    // private hissSound: Holder<SoundEvent>;
    // private hurtSound: Holder<SoundEvent>;
    // private purrSound: Holder<SoundEvent>;
    // private purreowSound: Holder<SoundEvent>;
    // private strayAmbientSound: Holder<SoundEvent>;
    ambientSound(): Holder<SoundEvent>;
    begForFoodSound(): Holder<SoundEvent>;
    deathSound(): Holder<SoundEvent>;
    eatSound(): Holder<SoundEvent>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    hissSound(): Holder<SoundEvent>;
    hurtSound(): Holder<SoundEvent>;
    purrSound(): Holder<SoundEvent>;
    purreowSound(): Holder<SoundEvent>;
    strayAmbientSound(): Holder<SoundEvent>;
    toString(): string;
}