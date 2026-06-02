import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { CatSoundVariant$CatSoundSet } from '../../../../../../net/minecraft/world/entity/animal/feline/CatSoundVariant$CatSoundSet.d.ts'
export class CatSoundVariant extends Record {
    static CODEC: Codec<Object>;
    static DIRECT_CODEC: Codec<CatSoundVariant>;
    static NETWORK_CODEC: Codec<CatSoundVariant>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    constructor(adultSounds: CatSoundVariant$CatSoundSet, babySounds: CatSoundVariant$CatSoundSet)
    // private adultSounds: CatSoundVariant$CatSoundSet;
    // private babySounds: CatSoundVariant$CatSoundSet;
    adultSounds(): CatSoundVariant$CatSoundSet;
    babySounds(): CatSoundVariant$CatSoundSet;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}