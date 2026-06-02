import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class Style$Serializer extends Object {
    static CODEC: Codec<Style>;
    static MAP_CODEC: MapCodec<Style>;
    static TRUSTED_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Style>;
    constructor()
}