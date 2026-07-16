import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Predicates$CompositionPredicate<A extends unknown, B extends unknown> extends Object implements Predicate<A>, Serializable {
    constructor(arg0: (param0: Object) => boolean, arg1: (param0: Object) => Object, arg2: any)
    // private f: (param0: A) => B;
    // private p: (param0: B) => boolean;
    apply(a: A): boolean;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    test(input: A): boolean;
    toString(): string;
}