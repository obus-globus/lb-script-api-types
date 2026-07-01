import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Predicate } from '../../../../../../../org/spongepowered/include/com/google/common/base/Predicate.d.ts'
export class Predicates$InPredicate<T extends unknown> extends Object implements Serializable, Predicate<T> {
    constructor(arg0: (Object | null)[], arg1: any)
    // private target: (Object | null)[];
    apply(arg0: T): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    test(arg0: T): boolean;
    toString(): string;
}