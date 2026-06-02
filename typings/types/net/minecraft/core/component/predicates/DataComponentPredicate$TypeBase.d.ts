import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataComponentPredicate } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate.d.ts'
import type { DataComponentPredicate$Single } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Single.d.ts'
import type { DataComponentPredicate$Type } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export abstract class DataComponentPredicate$TypeBase<T extends DataComponentPredicate> extends Object implements DataComponentPredicate$Type<T> {
    static CODEC: Codec<Object>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    constructor(codec: Codec<T>)
    // private codec: Codec<T>;
    // private singleStreamCodec: StreamCodec<RegistryFriendlyByteBuf, DataComponentPredicate$Single<T>>;
    // private wrappedCodec: MapCodec<DataComponentPredicate$Single<T>>;
    codec(): Codec<T>;
    singleStreamCodec(): StreamCodec<RegistryFriendlyByteBuf, DataComponentPredicate$Single<T>>;
    wrappedCodec(): MapCodec<DataComponentPredicate$Single<T>>;
}