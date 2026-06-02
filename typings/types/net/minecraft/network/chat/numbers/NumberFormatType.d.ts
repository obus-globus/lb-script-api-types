import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { NumberFormat } from '../../../../../net/minecraft/network/chat/numbers/NumberFormat.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export interface NumberFormatType<T extends NumberFormat> extends Object{
    mapCodec(): MapCodec<T>;
    streamCodec(): StreamCodec<RegistryFriendlyByteBuf, T>;
}