import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ChickenSoundVariant$ChickenSoundSet } from '../../../../../../net/minecraft/world/entity/animal/chicken/ChickenSoundVariant$ChickenSoundSet.d.ts'
export class ChickenSoundVariant extends Record {
    static CODEC: Codec<Holder<ChickenSoundVariant>>;
    static DIRECT_CODEC: Codec<ChickenSoundVariant>;
    static NETWORK_CODEC: Codec<ChickenSoundVariant>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<ChickenSoundVariant>>;
    constructor(adultSounds: ChickenSoundVariant$ChickenSoundSet, babySounds: ChickenSoundVariant$ChickenSoundSet)
    // private adultSounds: ChickenSoundVariant$ChickenSoundSet;
    // private babySounds: ChickenSoundVariant$ChickenSoundSet;
    adultSounds(): ChickenSoundVariant$ChickenSoundSet;
    babySounds(): ChickenSoundVariant$ChickenSoundSet;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}