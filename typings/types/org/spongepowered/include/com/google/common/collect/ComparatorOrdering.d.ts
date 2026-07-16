import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Ordering } from '../../../../../../../org/spongepowered/include/com/google/common/collect/Ordering.d.ts'
export class ComparatorOrdering<T extends unknown> extends Ordering<T> implements Serializable {
    static from<T extends unknown>(paramarg0: (param0: T, param1: T) => number): Ordering<T>;
    constructor(arg0: (param0: T, param1: T) => number)
    // private comparator: (param0: T, param1: T) => number;
    compare(arg0: T, arg1: T): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}