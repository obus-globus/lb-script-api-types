import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export interface DataComponentPatch$CodecGetter extends Object{
    apply(type: DataComponentType<T>): StreamCodec<RegistryFriendlyByteBuf, T>;
}