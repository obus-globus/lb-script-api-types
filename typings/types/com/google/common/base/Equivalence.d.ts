import type { Equivalence$Wrapper } from '../../../../com/google/common/base/Equivalence$Wrapper.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { BiPredicate } from '../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Equivalence<T extends unknown> extends Object implements BiPredicate<T, T> {
    static equals(): Equivalence<Object>;
    static identity(): Equivalence<Object>;
    constructor()
    and(arg0: (param0: T, param1: T) => boolean): (param0: T, param1: T) => boolean;
    doEquivalent(a: T, b: T): boolean;
    doHash(t: T): number;
    equals(object: Object | null): boolean;
    equivalent(a: T, b: T): boolean;
    equivalentTo(target: T): (param0: T) => boolean;
    hash(t: T): number;
    negate(): (param0: T, param1: T) => boolean;
    onResultOf<F extends unknown>(function_: (param0: F) => T): Equivalence<F>;
    or(arg0: (param0: T, param1: T) => boolean): (param0: T, param1: T) => boolean;
    pairwise<S extends T>(): Equivalence<S[]>;
    test(t: T, u: T): boolean;
    wrap<S extends T>(reference: S): Equivalence$Wrapper<S>;
}