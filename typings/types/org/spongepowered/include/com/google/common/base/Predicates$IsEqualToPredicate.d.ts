import type { Predicates$1 } from '../../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Predicate } from '../../../../../../../org/spongepowered/include/com/google/common/base/Predicate.d.ts'
export class Predicates$IsEqualToPredicate<T extends unknown> extends Object implements Serializable, Predicate<T> {
    private constructor(arg0: T)
    constructor(arg0: Object, arg1: Predicates$1)
    // private target: T;
    apply(arg0: T): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    test(arg0: T): boolean;
    toString(): string;
}