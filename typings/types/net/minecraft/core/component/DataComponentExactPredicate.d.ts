import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentExactPredicate$Builder } from '../../../../net/minecraft/core/component/DataComponentExactPredicate$Builder.d.ts'
import type { DataComponentGetter } from '../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentPatch } from '../../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { TypedDataComponent } from '../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class DataComponentExactPredicate extends Object implements Predicate<DataComponentGetter> {
    static CODEC: Codec<DataComponentExactPredicate>;
    static EMPTY: DataComponentExactPredicate;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DataComponentExactPredicate>;
    static allOf(paramcomponents: TypedDataComponent<Object>[]): DataComponentExactPredicate;
    static builder(): DataComponentExactPredicate$Builder;
    static expect<T extends unknown>(paramtype: DataComponentType<T>, paramvalue: T): DataComponentExactPredicate;
    static someOf(paramcomponents: TypedDataComponent<Object>[], ...paramtypes: DataComponentType<Object>[]): DataComponentExactPredicate;
    private constructor(expectedComponents: TypedDataComponent<Object>[])
    // private expectedComponents: TypedDataComponent<Object>[];
    alwaysMatches(): boolean;
    and(arg0: (param0: DataComponentGetter) => boolean): (param0: DataComponentGetter) => boolean;
    asPatch(): DataComponentPatch;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    isEmpty(): boolean;
    negate(): (param0: DataComponentGetter) => boolean;
    or(arg0: (param0: DataComponentGetter) => boolean): (param0: DataComponentGetter) => boolean;
    test(actualComponents: DataComponentGetter): boolean;
    toString(): string;
}