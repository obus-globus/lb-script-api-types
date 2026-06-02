import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataComponentPredicate } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate.d.ts'
import type { DataComponentPredicate$TypeBase } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$TypeBase.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class DataComponentPredicate$ConcreteType<T extends DataComponentPredicate> extends DataComponentPredicate$TypeBase<T> {
    static CODEC: Codec<Object>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    constructor(codec: Codec<T>)
}