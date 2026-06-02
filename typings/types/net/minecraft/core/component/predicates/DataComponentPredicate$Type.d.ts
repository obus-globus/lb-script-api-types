import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataComponentPredicate } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate.d.ts'
import type { DataComponentPredicate$Single } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Single.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export interface DataComponentPredicate$Type<T extends DataComponentPredicate> extends Object{
    codec(): Codec<T>;
    singleStreamCodec(): StreamCodec<RegistryFriendlyByteBuf, DataComponentPredicate$Single<T>>;
    wrappedCodec(): MapCodec<DataComponentPredicate$Single<T>>;
}