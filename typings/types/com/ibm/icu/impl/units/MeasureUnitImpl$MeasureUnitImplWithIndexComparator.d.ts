import type { ConversionRates } from '../../../../../com/ibm/icu/impl/units/ConversionRates.d.ts'
import type { MeasureUnitImpl$MeasureUnitImplComparator } from '../../../../../com/ibm/icu/impl/units/MeasureUnitImpl$MeasureUnitImplComparator.d.ts'
import type { MeasureUnitImpl$MeasureUnitImplWithIndex } from '../../../../../com/ibm/icu/impl/units/MeasureUnitImpl$MeasureUnitImplWithIndex.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class MeasureUnitImpl$MeasureUnitImplWithIndexComparator extends Object implements Comparator<MeasureUnitImpl$MeasureUnitImplWithIndex> {
    constructor(arg0: ConversionRates)
    // private measureUnitImplComparator: MeasureUnitImpl$MeasureUnitImplComparator;
    compare(arg0: MeasureUnitImpl$MeasureUnitImplWithIndex, arg1: MeasureUnitImpl$MeasureUnitImplWithIndex): number;
    reversed(): (param0: MeasureUnitImpl$MeasureUnitImplWithIndex, param1: MeasureUnitImpl$MeasureUnitImplWithIndex) => number;
    thenComparing(arg0: (param0: MeasureUnitImpl$MeasureUnitImplWithIndex, param1: MeasureUnitImpl$MeasureUnitImplWithIndex) => number): (param0: MeasureUnitImpl$MeasureUnitImplWithIndex, param1: MeasureUnitImpl$MeasureUnitImplWithIndex) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: MeasureUnitImpl$MeasureUnitImplWithIndex) => U): (param0: MeasureUnitImpl$MeasureUnitImplWithIndex, param1: MeasureUnitImpl$MeasureUnitImplWithIndex) => number;
    thenComparing<U extends unknown>(arg0: (param0: MeasureUnitImpl$MeasureUnitImplWithIndex) => U, arg1: (param0: U, param1: U) => number): (param0: MeasureUnitImpl$MeasureUnitImplWithIndex, param1: MeasureUnitImpl$MeasureUnitImplWithIndex) => number;
    thenComparingDouble(arg0: (param0: MeasureUnitImpl$MeasureUnitImplWithIndex) => number): (param0: MeasureUnitImpl$MeasureUnitImplWithIndex, param1: MeasureUnitImpl$MeasureUnitImplWithIndex) => number;
    thenComparingInt(arg0: (param0: MeasureUnitImpl$MeasureUnitImplWithIndex) => number): (param0: MeasureUnitImpl$MeasureUnitImplWithIndex, param1: MeasureUnitImpl$MeasureUnitImplWithIndex) => number;
    thenComparingLong(arg0: (param0: MeasureUnitImpl$MeasureUnitImplWithIndex) => number): (param0: MeasureUnitImpl$MeasureUnitImplWithIndex, param1: MeasureUnitImpl$MeasureUnitImplWithIndex) => number;
}