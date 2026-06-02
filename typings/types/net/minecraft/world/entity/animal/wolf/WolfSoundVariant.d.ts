import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { WolfSoundVariant$WolfSoundSet } from '../../../../../../net/minecraft/world/entity/animal/wolf/WolfSoundVariant$WolfSoundSet.d.ts'
export class WolfSoundVariant extends Record {
    static CODEC: Codec<Object>;
    static DIRECT_CODEC: Codec<WolfSoundVariant>;
    static NETWORK_CODEC: Codec<WolfSoundVariant>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    constructor(adultSounds: WolfSoundVariant$WolfSoundSet, babySounds: WolfSoundVariant$WolfSoundSet)
    // private adultSounds: WolfSoundVariant$WolfSoundSet;
    // private babySounds: WolfSoundVariant$WolfSoundSet;
    adultSounds(): WolfSoundVariant$WolfSoundSet;
    babySounds(): WolfSoundVariant$WolfSoundSet;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}