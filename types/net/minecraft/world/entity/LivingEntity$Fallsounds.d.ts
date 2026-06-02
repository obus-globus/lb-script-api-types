import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class LivingEntity$Fallsounds extends Record {
    constructor(small: SoundEvent, big: SoundEvent)
    // private big: SoundEvent;
    // private small: SoundEvent;
    big(): SoundEvent;
    equals(o: Object | null): boolean;
    hashCode(): number;
    small(): SoundEvent;
    toString(): string;
}