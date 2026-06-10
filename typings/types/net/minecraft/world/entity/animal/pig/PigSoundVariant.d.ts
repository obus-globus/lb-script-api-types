import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { PigSoundVariant$PigSoundSet } from '../../../../../../net/minecraft/world/entity/animal/pig/PigSoundVariant$PigSoundSet.d.ts'
export class PigSoundVariant extends Record {
    static CODEC: Codec<Holder<PigSoundVariant>>;
    static DIRECT_CODEC: Codec<PigSoundVariant>;
    static NETWORK_CODEC: Codec<PigSoundVariant>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<PigSoundVariant>>;
    constructor(adultSounds: PigSoundVariant$PigSoundSet, babySounds: PigSoundVariant$PigSoundSet)
    // private adultSounds: PigSoundVariant$PigSoundSet;
    // private babySounds: PigSoundVariant$PigSoundSet;
    adultSounds(): PigSoundVariant$PigSoundSet;
    babySounds(): PigSoundVariant$PigSoundSet;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}