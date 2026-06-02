import type { Int2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleFunction.d.ts'
import type { Int2IntFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntFunction.d.ts'
import type { Int2LongFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongFunction.d.ts'
import type { Int2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectFunction.d.ts'
import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntComparators$NaturalImplicitComparator extends Object implements IntComparator, Serializable {
    static comparing(paramarg0: (param0: Object | null) => unknown): (param0: number, param1: number) => kotlin.Int;
    static comparing(paramarg0: (param0: Object | null) => unknown, paramarg1: (param0: Object | null) => kotlin.Boolean): (param0: number, param1: number) => kotlin.Int;
    static comparingDouble(paramarg0: (param0: number) => kotlin.Double): (param0: number, param1: number) => kotlin.Int;
    static comparingInt(paramarg0: (param0: number) => kotlin.Int): (param0: number, param1: number) => kotlin.Int;
    static comparingLong(paramarg0: (param0: number) => kotlin.Long): (param0: number, param1: number) => kotlin.Int;
    constructor()
    compare(arg0: number, arg1: number): number;
    compare(arg0: number, arg1: number): number;
    // private readResolve(): Object;
    reversed(): (param0: number, param1: number) => kotlin.Int;
    reversed(): (param0: number, param1: number) => kotlin.Int;
    thenComparing(arg0: (param0: number, param1: number) => kotlin.Int): (param0: number, param1: number) => kotlin.Int;
    thenComparing(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Boolean;
}