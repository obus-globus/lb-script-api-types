import type { Predicates$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Predicates$OrPredicate<T extends unknown> extends Object implements Predicate<T>, Serializable {
    private constructor(components: (param0: Object) => boolean[])
    constructor(arg0: (Object | null)[], arg1: Predicates$1)
    // private components: (param0: Object) => boolean[];
    apply(t: T): boolean;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    test(input: T): boolean;
    toString(): string;
}