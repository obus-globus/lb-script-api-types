import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Predicates$InPredicate<T extends unknown> extends Object implements Predicate<T>, Serializable {
    constructor(arg0: (Object | null)[], arg1: any)
    // private target: (Object | null)[];
    apply(t: T): boolean;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    test(input: T): boolean;
    toString(): string;
}