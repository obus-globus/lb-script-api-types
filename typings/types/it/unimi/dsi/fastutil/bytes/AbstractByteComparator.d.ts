import type { Byte2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleFunction.d.ts'
import type { Byte2IntFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntFunction.d.ts'
import type { Byte2LongFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongFunction.d.ts'
import type { Byte2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectFunction.d.ts'
import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export abstract class AbstractByteComparator extends Object implements ByteComparator, Serializable {
    static comparing<U extends Comparable<Object>>(paramarg0: (param0: number) => U): (param0: number, param1: number) => number;
    static comparing<U extends Comparable<Object>>(paramarg0: (param0: number) => U, paramarg1: (param0: Object, param1: Object) => number): (param0: number, param1: number) => number;
    static comparingDouble(paramarg0: (param0: number) => number): (param0: number, param1: number) => number;
    static comparingInt(paramarg0: (param0: number) => number): (param0: number, param1: number) => number;
    static comparingLong(paramarg0: (param0: number) => number): (param0: number, param1: number) => number;
    constructor()
    compare(arg0: number, arg1: number): number;
    reversed(): (param0: number, param1: number) => number;
    thenComparing(arg0: (param0: number, param1: number) => number): (param0: number, param1: number) => number;
}