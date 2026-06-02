import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export interface DataComponentType<T extends Object | number | string | boolean> extends Object{
    codec(): Codec<T>;
    codecOrThrow(): Codec<T>;
    ignoreSwapAnimation(): boolean;
    isTransient(): boolean;
    streamCodec(): StreamCodec<RegistryFriendlyByteBuf, T>;
}