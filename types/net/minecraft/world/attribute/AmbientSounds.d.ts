import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { AmbientAdditionsSettings } from '../../../../net/minecraft/world/attribute/AmbientAdditionsSettings.d.ts'
import type { AmbientMoodSettings } from '../../../../net/minecraft/world/attribute/AmbientMoodSettings.d.ts'
export class AmbientSounds extends Record {
    static CODEC: Codec<AmbientSounds>;
    static EMPTY: AmbientSounds;
    static LEGACY_CAVE_SETTINGS: AmbientSounds;
    constructor(loop: Optional<Holder<SoundEvent>>, mood: Optional<AmbientMoodSettings>, additions: AmbientAdditionsSettings[])
    // private additions: AmbientAdditionsSettings[];
    // private loop: Optional<Holder<SoundEvent>>;
    // private mood: Optional<AmbientMoodSettings>;
    additions(): AmbientAdditionsSettings[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    loop(): Optional<Holder<SoundEvent>>;
    mood(): Optional<AmbientMoodSettings>;
    toString(): string;
}