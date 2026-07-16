import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Predicates$AndPredicate<T extends unknown> extends Object implements Predicate<T>, Serializable {
    constructor(arg0: (Object | null)[], arg1: any)
    // private components: (param0: T) => boolean[];
    apply(t: T): boolean;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    test(input: T): boolean;
    toString(): string;
}