import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Ordering } from '../../../../../../../org/spongepowered/include/com/google/common/collect/Ordering.d.ts'
export class ComparatorOrdering<T extends Object | number | string | boolean> extends Ordering<T> implements Serializable {
    static from(paramarg0: (param0: Object | null) => kotlin.Boolean): Ordering<Object>;
    constructor(arg0: (param0: T) => kotlin.Boolean)
    // private comparator: (param0: T) => kotlin.Boolean;
    compare(arg0: T, arg1: T): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}