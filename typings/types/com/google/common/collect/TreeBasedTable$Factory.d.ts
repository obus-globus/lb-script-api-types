import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TreeBasedTable$Factory<C extends unknown, V extends unknown> extends Object implements Supplier<JavaMap<C, V>>, Serializable {
    constructor(comparator: (param0: C, param1: C) => number)
    // private comparator: (param0: C, param1: C) => number;
    get(): JavaMap<C, V>;
}