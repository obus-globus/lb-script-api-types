import type { Equivalence } from '../../../../com/google/common/base/Equivalence.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Equivalence$EquivalentToPredicate<T extends unknown> extends Object implements Predicate<T>, Serializable {
    constructor(equivalence: Equivalence<T>, target: T)
    // private equivalence: Equivalence<T>;
    // private target: T;
    apply(input: T): boolean;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    test(input: T): boolean;
    toString(): string;
}