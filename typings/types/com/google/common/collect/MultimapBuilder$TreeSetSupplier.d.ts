import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MultimapBuilder$TreeSetSupplier<V extends unknown> extends Object implements Supplier<V[]>, Serializable {
    constructor(comparator: (param0: V, param1: V) => number)
    // private comparator: (param0: V, param1: V) => number;
    get(): V[];
}