import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { AnyValue } from '../../../../../net/minecraft/core/component/predicates/AnyValue.d.ts'
import type { DataComponentPredicate$TypeBase } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$TypeBase.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class DataComponentPredicate$AnyValueType extends DataComponentPredicate$TypeBase<AnyValue> {
    static CODEC: Codec<Object>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static create(paramcomponentType: DataComponentType<Object>): DataComponentPredicate$AnyValueType;
    constructor(predicate: AnyValue)
    // private predicate: AnyValue;
    componentType(): DataComponentType<Object>;
    predicate(): AnyValue;
}