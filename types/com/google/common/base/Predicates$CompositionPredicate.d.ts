import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Predicates$CompositionPredicate<A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends Object implements Predicate<A>, Serializable {
    private constructor(p: (param0: B) => kotlin.Boolean, f: (param0: A) => B)
    // private f: (param0: A) => B;
    // private p: (param0: B) => kotlin.Boolean;
    apply(a: A): boolean;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    test<T extends Object | number | string | boolean>(input: T): boolean;
    toString(): string;
}