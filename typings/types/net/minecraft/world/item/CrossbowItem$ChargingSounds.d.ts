import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class CrossbowItem$ChargingSounds extends Record {
    static CODEC: Codec<CrossbowItem$ChargingSounds>;
    constructor(start: Optional<Holder<SoundEvent>>, mid: Optional<Holder<SoundEvent>>, end: Optional<Holder<SoundEvent>>)
    // private end: Optional<Holder<SoundEvent>>;
    // private mid: Optional<Holder<SoundEvent>>;
    // private start: Optional<Holder<SoundEvent>>;
    end(): Optional<Holder<SoundEvent>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    mid(): Optional<Holder<SoundEvent>>;
    start(): Optional<Holder<SoundEvent>>;
    toString(): string;
}