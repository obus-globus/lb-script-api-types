import type { Boolean2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2DoubleFunction.d.ts'
import type { Boolean2IntFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2IntFunction.d.ts'
import type { Boolean2LongFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2LongFunction.d.ts'
import type { Boolean2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2ObjectFunction.d.ts'
import type { BooleanComparator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanComparator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanComparators$OppositeComparator extends Object implements BooleanComparator, Serializable {
    static comparing(paramarg0: (param0: boolean) => Object | null): (param0: boolean, param1: boolean) => number;
    static comparing(paramarg0: (param0: boolean) => Object | null, paramarg1: (param0: Object) => boolean): (param0: boolean, param1: boolean) => number;
    static comparingDouble(paramarg0: (param0: boolean) => number): (param0: boolean, param1: boolean) => number;
    static comparingInt(paramarg0: (param0: boolean) => number): (param0: boolean, param1: boolean) => number;
    static comparingLong(paramarg0: (param0: boolean) => number): (param0: boolean, param1: boolean) => number;
    constructor(arg0: (param0: boolean, param1: boolean) => number)
    // private comparator: (param0: boolean, param1: boolean) => number;
    compare(arg0: boolean, arg1: boolean): number;
    reversed(): (param0: boolean, param1: boolean) => number;
    thenComparing(arg0: (param0: boolean, param1: boolean) => number): (param0: boolean, param1: boolean) => number;
    thenComparing(arg0: (param0: Object) => boolean): (param0: Object) => boolean;
}