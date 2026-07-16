import type { Float2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleFunction.d.ts'
import type { Float2IntFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntFunction.d.ts'
import type { Float2LongFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongFunction.d.ts'
import type { Float2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectFunction.d.ts'
import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatComparators$OppositeComparator extends Object implements FloatComparator, Serializable {
    static comparing(paramarg0: (param0: number) => Object | null): (param0: number, param1: number) => number;
    static comparing(paramarg0: (param0: number) => Object | null, paramarg1: (param0: Object, param1: Object) => number): (param0: number, param1: number) => number;
    static comparingDouble(paramarg0: (param0: number) => number): (param0: number, param1: number) => number;
    static comparingInt(paramarg0: (param0: number) => number): (param0: number, param1: number) => number;
    static comparingLong(paramarg0: (param0: number) => number): (param0: number, param1: number) => number;
    constructor(arg0: (param0: number, param1: number) => number)
    // private comparator: (param0: number, param1: number) => number;
    compare(arg0: number, arg1: number): number;
    reversed(): (param0: number, param1: number) => number;
    thenComparing(arg0: (param0: number, param1: number) => number): (param0: number, param1: number) => number;
}