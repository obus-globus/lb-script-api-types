import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Function } from '../../../../../../../org/spongepowered/include/com/google/common/base/Function.d.ts'
import type { Ordering } from '../../../../../../../org/spongepowered/include/com/google/common/collect/Ordering.d.ts'
export class ByFunctionOrdering<F extends unknown, T extends unknown> extends Ordering<F> implements Serializable {
    static from(paramarg0: (param0: Object) => boolean): Ordering<Object>;
    constructor(arg0: (param0: Object) => boolean, arg1: Ordering<T>)
    // private function: (param0: Object) => boolean;
    // private ordering: Ordering<T>;
    compare(arg0: F, arg1: F): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}