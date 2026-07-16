import type { Double2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleFunction.d.ts'
import type { Double2IntFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntFunction.d.ts'
import type { Double2LongFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongFunction.d.ts'
import type { Double2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectFunction.d.ts'
import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractDoubleComparator extends Object implements DoubleComparator, Serializable {
    static comparing(paramarg0: (param0: number) => Object | null): (param0: number, param1: number) => number;
    static comparing(paramarg0: (param0: number) => Object | null, paramarg1: (param0: Object, param1: Object) => number): (param0: number, param1: number) => number;
    static comparingDouble(paramarg0: (param0: number) => number): (param0: number, param1: number) => number;
    static comparingInt(paramarg0: (param0: number) => number): (param0: number, param1: number) => number;
    static comparingLong(paramarg0: (param0: number) => number): (param0: number, param1: number) => number;
    constructor()
    compare(arg0: number, arg1: number): number;
    reversed(): (param0: number, param1: number) => number;
    thenComparing(arg0: (param0: number, param1: number) => number): (param0: number, param1: number) => number;
}