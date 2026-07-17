import type { JavaMap } from '../../../../JavaMap.d.ts'
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
    constructor(exact: DataComponentExactPredicate, partial: JavaMap<DataComponentPredicate$Type<any>, DataComponentPredicate>)
    // private exact: DataComponentExactPredicate;
    // private partial: JavaMap<DataComponentPredicate$Type<any>, DataComponentPredicate>;
    and(arg0: (param0: DataComponentGetter) => boolean): (param0: DataComponentGetter) => boolean;
    equals(o: Object | null): boolean;
    exact(): DataComponentExactPredicate;
    hashCode(): number;
    isEmpty(): boolean;
    negate(): (param0: DataComponentGetter) => boolean;
    or(arg0: (param0: DataComponentGetter) => boolean): (param0: DataComponentGetter) => boolean;
    partial(): JavaMap<DataComponentPredicate$Type<any>, DataComponentPredicate>;
    test(values: DataComponentGetter): boolean;
    toString(): string;
}