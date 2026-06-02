import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { NumberFormat } from '../../../../../net/minecraft/network/chat/numbers/NumberFormat.d.ts'
import type { NumberFormatType } from '../../../../../net/minecraft/network/chat/numbers/NumberFormatType.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class NumberFormatTypes extends Object {
    static CODEC: Codec<NumberFormat>;
    static MAP_CODEC: MapCodec<NumberFormat>;
    static OPTIONAL_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, NumberFormat>;
    static bootstrap(paramregistry: (Object | null)[]): NumberFormatType<Object>;
    constructor()
}