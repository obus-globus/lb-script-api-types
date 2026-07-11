import type { Ordering } from '../../../../com/google/common/collect/Ordering.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class NaturalOrdering extends Ordering<Comparable<Object>> implements Serializable {
    static allEqual(): Ordering<Object>;
    static arbitrary(): Ordering<Object>;
    static compound(paramcomparators: (param0: Object) => boolean[]): Ordering<Object>;
    static explicit(paramleastValue: Object | null, ...paramremainingValuesInOrder: Object | null): Ordering<Object>;
    static explicit(paramvaluesInOrder: (Object | null)[]): Ordering<Object>;
    static from(paramordering: Ordering<Object>): Ordering<Object>;
    static from(paramcomparator: (param0: Object) => boolean): Ordering<Object>;
    static natural(): Ordering<Object>;
    static usingToString(): Ordering<Object>;
    private constructor()
    // private nullsFirst: Ordering<Comparable<Object>>;
    // private nullsLast: Ordering<Comparable<Object>>;
    compare(left: Comparable<Object>, right: Comparable<Object>): number;
    nullsFirst<S extends Comparable<Object>>(): Ordering<S>;
    nullsLast<S extends Comparable<Object>>(): Ordering<S>;
    // private readResolve(): Object;
    reverse<S extends Comparable<Object>>(): Ordering<S>;
    toString(): string;
}