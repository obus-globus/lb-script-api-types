import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CollectionContentsPredicate } from '../../../../net/minecraft/advancements/predicates/CollectionContentsPredicate.d.ts'
import type { CollectionCountsPredicate } from '../../../../net/minecraft/advancements/predicates/CollectionCountsPredicate.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds$Ints.d.ts'
export class CollectionPredicate<T extends unknown, P extends Predicate<T>> extends Record implements Predicate<T[]> {
    static codec<T extends unknown, P extends Predicate<T>>(paramelementCodec: Codec<P>): Codec<CollectionPredicate<T, P>>;
    static isEqual<T extends unknown>(paramarg0: Object): (param0: T) => boolean;
    static not<T extends unknown>(paramarg0: (param0: Object) => boolean): (param0: T) => boolean;
    constructor(contains: Optional<CollectionContentsPredicate<T, P>>, counts: Optional<CollectionCountsPredicate<T, P>>, size: Optional<MinMaxBounds$Ints>)
    // private contains: Optional<CollectionContentsPredicate<T, P>>;
    // private counts: Optional<CollectionCountsPredicate<T, P>>;
    // private size: Optional<MinMaxBounds$Ints>;
    and(arg0: (param0: T[]) => boolean): (param0: T[]) => boolean;
    contains(): Optional<CollectionContentsPredicate<T, P>>;
    counts(): Optional<CollectionCountsPredicate<T, P>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    negate(): (param0: T[]) => boolean;
    or(arg0: (param0: T[]) => boolean): (param0: T[]) => boolean;
    size(): Optional<MinMaxBounds$Ints>;
    test(value: T[]): boolean;
    toString(): string;
}