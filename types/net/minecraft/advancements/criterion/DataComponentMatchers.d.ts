import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentExactPredicate } from '../../../../net/minecraft/core/component/DataComponentExactPredicate.d.ts'
import type { DataComponentGetter } from '../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentPredicate } from '../../../../net/minecraft/core/component/predicates/DataComponentPredicate.d.ts'
import type { DataComponentPredicate$Type } from '../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class DataComponentMatchers extends Record implements Predicate<DataComponentGetter> {
    static ANY: DataComponentMatchers;
    static CODEC: MapCodec<DataComponentMatchers>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DataComponentMatchers>;
    static isEqual(paramarg0: Object): (param0: Object | null) => kotlin.Boolean;
    static not(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    constructor(exact: DataComponentExactPredicate, partial: Map<DataComponentPredicate$Type<Object>, DataComponentPredicate>)
    // private exact: DataComponentExactPredicate;
    // private partial: Map<DataComponentPredicate$Type<Object>, DataComponentPredicate>;
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    equals(o: Object | null): boolean;
    exact(): DataComponentExactPredicate;
    hashCode(): number;
    isEmpty(): boolean;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    partial(): Map<DataComponentPredicate$Type<Object>, DataComponentPredicate>;
    test(values: DataComponentGetter): boolean;
    toString(): string;
}