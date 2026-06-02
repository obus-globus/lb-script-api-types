import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class AmbientMoodSettings extends Record {
    static CODEC: Codec<AmbientMoodSettings>;
    static LEGACY_CAVE_SETTINGS: AmbientMoodSettings;
    // private blockSearchExtent: number;
    // private soundEvent: Holder<SoundEvent>;
    // private soundPositionOffset: number;
    // private tickDelay: number;
    blockSearchExtent(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    soundEvent(): Holder<SoundEvent>;
    soundPositionOffset(): number;
    tickDelay(): number;
    toString(): string;
}