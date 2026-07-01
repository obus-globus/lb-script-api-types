import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Functions$PredicateFunction<T extends unknown> extends Object implements Function<T, boolean>, Serializable {
    constructor(arg0: (param0: Object) => boolean, arg1: any)
    // private predicate: (param0: Object) => boolean;
    apply(t: T): boolean;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}