import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Function } from '../../../../../../../org/spongepowered/include/com/google/common/base/Function.d.ts'
import type { Ordering } from '../../../../../../../org/spongepowered/include/com/google/common/collect/Ordering.d.ts'
export class ByFunctionOrdering<F extends unknown, T extends unknown> extends Ordering<F> implements Serializable {
    static from(paramarg0: (param0: Object | null, param1: Object | null) => number): Ordering<Object>;
    constructor(arg0: (param0: F) => T, arg1: Ordering<T>)
    // private function: (param0: F) => T;
    // private ordering: Ordering<T>;
    compare(arg0: F, arg1: F): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}