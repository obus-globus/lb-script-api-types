import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class DataComponentType$Builder<T extends unknown> extends Object {
    constructor()
    // private cacheEncoding: boolean;
    // private codec: Codec<T>;
    // private ignoreSwapAnimation: boolean;
    // private streamCodec: StreamCodec<RegistryFriendlyByteBuf, T>;
    build(): DataComponentType<T>;
    cacheEncoding(): DataComponentType$Builder<T>;
    ignoreSwapAnimation(): DataComponentType$Builder<T>;
    networkSynchronized(streamCodec: StreamCodec<RegistryFriendlyByteBuf, T>): DataComponentType$Builder<T>;
    persistent(codec: Codec<T>): DataComponentType$Builder<T>;
}