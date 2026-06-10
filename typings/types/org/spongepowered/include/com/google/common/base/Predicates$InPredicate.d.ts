import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Predicate } from '../../../../../../../org/spongepowered/include/com/google/common/base/Predicate.d.ts'
export class Predicates$InPredicate<T extends Object | number | string | boolean> extends Object implements Serializable, Predicate<T> {
    private constructor(arg0: (Object | null)[])
    // private target: (Object | null)[];
    apply(arg0: T): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    test(arg0: T): boolean;
    toString(): string;
}