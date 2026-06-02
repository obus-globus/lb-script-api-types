import type { Short2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleFunction.d.ts'
import type { Short2IntFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntFunction.d.ts'
import type { Short2LongFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongFunction.d.ts'
import type { Short2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectFunction.d.ts'
import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortComparators$OppositeComparator extends Object implements ShortComparator, Serializable {
    static comparing(paramarg0: (param0: Object | null) => unknown): (param0: number, param1: number) => kotlin.Int;
    static comparing(paramarg0: (param0: Object | null) => unknown, paramarg1: (param0: Object | null) => kotlin.Boolean): (param0: number, param1: number) => kotlin.Int;
    static comparingDouble(paramarg0: (param0: number) => kotlin.Double): (param0: number, param1: number) => kotlin.Int;
    static comparingInt(paramarg0: (param0: number) => kotlin.Int): (param0: number, param1: number) => kotlin.Int;
    static comparingLong(paramarg0: (param0: number) => kotlin.Long): (param0: number, param1: number) => kotlin.Int;
    constructor(arg0: (param0: number, param1: number) => kotlin.Int)
    // private comparator: (param0: number, param1: number) => kotlin.Int;
    compare(arg0: number, arg1: number): number;
    compare(arg0: number, arg1: number): number;
    reversed(): (param0: number, param1: number) => kotlin.Int;
    reversed(): (param0: number, param1: number) => kotlin.Int;
    thenComparing(arg0: (param0: number, param1: number) => kotlin.Int): (param0: number, param1: number) => kotlin.Int;
    thenComparing(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Boolean;
}