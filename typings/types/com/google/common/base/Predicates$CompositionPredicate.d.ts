import type { Predicates$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Predicates$CompositionPredicate<A extends unknown, B extends unknown> extends Object implements Predicate<A>, Serializable {
    constructor(arg0: (param0: Object) => boolean, arg1: (param0: Object) => boolean, arg2: Predicates$1)
    private constructor(p: (param0: Object) => boolean, f: (param0: Object) => boolean)
    // private f: (param0: Object) => boolean;
    // private p: (param0: Object) => boolean;
    apply(a: A): boolean;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    test(input: A): boolean;
    toString(): string;
}