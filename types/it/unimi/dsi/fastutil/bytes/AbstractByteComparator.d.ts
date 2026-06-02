import type { Byte2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleFunction.d.ts'
import type { Byte2IntFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntFunction.d.ts'
import type { Byte2LongFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongFunction.d.ts'
import type { Byte2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectFunction.d.ts'
import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractByteComparator extends Object implements ByteComparator, Serializable {
    static comparing(paramarg0: (param0: Object | null) => unknown): (param0: number, param1: number) => kotlin.Int;
    static comparing(paramarg0: (param0: Object | null) => unknown, paramarg1: (param0: Object | null) => kotlin.Boolean): (param0: number, param1: number) => kotlin.Int;
    static comparingDouble(paramarg0: (param0: number) => kotlin.Double): (param0: number, param1: number) => kotlin.Int;
    static comparingInt(paramarg0: (param0: number) => kotlin.Int): (param0: number, param1: number) => kotlin.Int;
    static comparingLong(paramarg0: (param0: number) => kotlin.Long): (param0: number, param1: number) => kotlin.Int;
    constructor()
    compare(arg0: number, arg1: number): number;
    reversed(): (param0: number, param1: number) => kotlin.Int;
    thenComparing(arg0: (param0: number, param1: number) => kotlin.Int): (param0: number, param1: number) => kotlin.Int;
    thenComparing(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Boolean;
}