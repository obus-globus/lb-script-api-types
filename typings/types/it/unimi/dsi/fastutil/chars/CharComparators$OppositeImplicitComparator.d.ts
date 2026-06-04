import type { Char2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleFunction.d.ts'
import type { Char2IntFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntFunction.d.ts'
import type { Char2LongFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongFunction.d.ts'
import type { Char2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectFunction.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharComparators$OppositeImplicitComparator extends Object implements CharComparator, Serializable {
    static comparing(paramarg0: (param0: Object | null) => unknown): (param0: string, param1: string) => kotlin.Int;
    static comparing(paramarg0: (param0: Object | null) => unknown, paramarg1: (param0: Object | null) => kotlin.Boolean): (param0: string, param1: string) => kotlin.Int;
    static comparingDouble(paramarg0: (param0: string) => kotlin.Double): (param0: string, param1: string) => kotlin.Int;
    static comparingInt(paramarg0: (param0: string) => kotlin.Int): (param0: string, param1: string) => kotlin.Int;
    static comparingLong(paramarg0: (param0: string) => kotlin.Long): (param0: string, param1: string) => kotlin.Int;
    constructor()
    compare(arg0: string, arg1: string): number;
    // private readResolve(): Object;
    reversed(): (param0: string, param1: string) => kotlin.Int;
    thenComparing(arg0: (param0: string, param1: string) => kotlin.Int): (param0: string, param1: string) => kotlin.Int;
    thenComparing(arg0: (param0: string) => kotlin.Boolean): (param0: string) => kotlin.Boolean;
}