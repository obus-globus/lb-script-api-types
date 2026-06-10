import type { Equivalence } from '../../../../com/google/common/base/Equivalence.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FunctionalEquivalence<F extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Equivalence<F> implements Serializable {
    static equals(): Equivalence<Object>;
    static identity(): Equivalence<Object>;
    constructor(function_: (param0: Object) => boolean, resultEquivalence: Equivalence<T>)
    // private function: (param0: Object) => boolean;
    // private resultEquivalence: Equivalence<T>;
    doEquivalent(a: F, b: F): boolean;
    doHash(a: F): number;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}