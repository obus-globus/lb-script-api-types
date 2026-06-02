import type { Comparator } from '../../../../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ConversionRates } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/ConversionRates.d.ts'
import type { MeasureUnitImpl$MeasureUnitImplComparator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/MeasureUnitImpl$MeasureUnitImplComparator.d.ts'
import type { MeasureUnitImpl$MeasureUnitImplWithIndex } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/MeasureUnitImpl$MeasureUnitImplWithIndex.d.ts'
export class MeasureUnitImpl$MeasureUnitImplWithIndexComparator extends Object implements Comparator<MeasureUnitImpl$MeasureUnitImplWithIndex> {
    static comparing(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => kotlin.Boolean;
    static comparing(paramarg0: (param0: Object | null) => Object | null, paramarg1: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingDouble(paramarg0: (param0: Object | null) => kotlin.Double): (param0: Object | null) => kotlin.Boolean;
    static comparingInt(paramarg0: (param0: Object | null) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static comparingLong(paramarg0: (param0: Object | null) => kotlin.Long): (param0: Object | null) => kotlin.Boolean;
    static naturalOrder(): (param0: Object | null) => kotlin.Boolean;
    static nullsFirst(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static nullsLast(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static reverseOrder(): (param0: Object | null) => kotlin.Boolean;
    constructor(conversionRates: ConversionRates)
    // private measureUnitImplComparator: MeasureUnitImpl$MeasureUnitImplComparator;
    compare(o1: MeasureUnitImpl$MeasureUnitImplWithIndex, o2: MeasureUnitImpl$MeasureUnitImplWithIndex): number;
    reversed(): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => U): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => U, arg1: (param0: U) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    thenComparingDouble(arg0: (param0: T) => kotlin.Double): (param0: T) => kotlin.Boolean;
    thenComparingInt(arg0: (param0: T) => kotlin.Int): (param0: T) => kotlin.Boolean;
    thenComparingLong(arg0: (param0: T) => kotlin.Long): (param0: T) => kotlin.Boolean;
}