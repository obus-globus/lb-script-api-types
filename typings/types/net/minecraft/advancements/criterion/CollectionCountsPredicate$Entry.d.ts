import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds$Ints.d.ts'
export class CollectionCountsPredicate$Entry<T extends Object | number | string | boolean, P extends Predicate<T>> extends Record {
    static codec(paramelementCodec: Codec<Object>): Codec<CollectionCountsPredicate$Entry<Object, Object>>;
    constructor(test: P, count: MinMaxBounds$Ints)
    // private count: MinMaxBounds$Ints;
    // private test: P;
    count(): MinMaxBounds$Ints;
    equals(o: Object | null): boolean;
    hashCode(): number;
    test(): P;
    test(values: T[]): boolean;
    toString(): string;
}