import type { Boolean2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2DoubleFunction.d.ts'
import type { Boolean2IntFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2IntFunction.d.ts'
import type { Boolean2LongFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2LongFunction.d.ts'
import type { Boolean2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2ObjectFunction.d.ts'
import type { BooleanComparator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanComparator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanComparators$OppositeImplicitComparator extends Object implements BooleanComparator, Serializable {
    static comparing(paramarg0: (param0: Object | null) => unknown): (param0: boolean, param1: boolean) => kotlin.Int;
    static comparing(paramarg0: (param0: Object | null) => unknown, paramarg1: (param0: Object | null) => kotlin.Boolean): (param0: boolean, param1: boolean) => kotlin.Int;
    static comparingDouble(paramarg0: (param0: boolean) => kotlin.Double): (param0: boolean, param1: boolean) => kotlin.Int;
    static comparingInt(paramarg0: (param0: boolean) => kotlin.Int): (param0: boolean, param1: boolean) => kotlin.Int;
    static comparingLong(paramarg0: (param0: boolean) => kotlin.Long): (param0: boolean, param1: boolean) => kotlin.Int;
    constructor()
    compare(arg0: boolean, arg1: boolean): number;
    compare(arg0: boolean, arg1: boolean): number;
    // private readResolve(): Object;
    reversed(): (param0: boolean, param1: boolean) => kotlin.Int;
    reversed(): (param0: boolean, param1: boolean) => kotlin.Int;
    thenComparing(arg0: (param0: boolean, param1: boolean) => kotlin.Int): (param0: boolean, param1: boolean) => kotlin.Int;
    thenComparing(arg0: (param0: boolean) => kotlin.Boolean): (param0: boolean) => kotlin.Boolean;
}