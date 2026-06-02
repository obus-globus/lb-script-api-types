import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { PositionSource } from '../../../../../net/minecraft/world/level/gameevent/PositionSource.d.ts'
export interface PositionSourceType<T extends PositionSource> extends Object{
    codec(): MapCodec<T>;
    streamCodec(): StreamCodec<RegistryFriendlyByteBuf, T>;
}