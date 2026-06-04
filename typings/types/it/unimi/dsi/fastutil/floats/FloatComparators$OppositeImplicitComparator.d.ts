import type { Float2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleFunction.d.ts'
import type { Float2IntFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntFunction.d.ts'
import type { Float2LongFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongFunction.d.ts'
import type { Float2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectFunction.d.ts'
import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatComparators$OppositeImplicitComparator extends Object implements FloatComparator, Serializable {
    static comparing(paramarg0: (param0: Object | null) => unknown): (param0: number, param1: number) => kotlin.Int;
    static comparing(paramarg0: (param0: Object | null) => unknown, paramarg1: (param0: Object | null) => kotlin.Boolean): (param0: number, param1: number) => kotlin.Int;
    static comparingDouble(paramarg0: (param0: number) => kotlin.Double): (param0: number, param1: number) => kotlin.Int;
    static comparingInt(paramarg0: (param0: number) => kotlin.Int): (param0: number, param1: number) => kotlin.Int;
    static comparingLong(paramarg0: (param0: number) => kotlin.Long): (param0: number, param1: number) => kotlin.Int;
    constructor()
    compare(arg0: number, arg1: number): number;
    // private readResolve(): Object;
    reversed(): (param0: number, param1: number) => kotlin.Int;
    thenComparing(arg0: (param0: number, param1: number) => kotlin.Int): (param0: number, param1: number) => kotlin.Int;
    thenComparing(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Boolean;
}