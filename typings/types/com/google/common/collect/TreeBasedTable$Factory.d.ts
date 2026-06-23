import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TreeBasedTable$Factory<C extends unknown, V extends unknown> extends Object implements Supplier<Map<C, V>>, Serializable {
    constructor(comparator: (param0: Object) => boolean)
    // private comparator: (param0: Object) => boolean;
    get(): Map<C, V>;
}