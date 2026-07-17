import type { ConversionRates } from '../../../../../com/ibm/icu/impl/units/ConversionRates.d.ts'
import type { MeasureUnitImpl } from '../../../../../com/ibm/icu/impl/units/MeasureUnitImpl.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class MeasureUnitImpl$MeasureUnitImplComparator extends Object implements Comparator<MeasureUnitImpl> {
    constructor(arg0: ConversionRates)
    // private conversionRates: ConversionRates;
    compare(arg0: MeasureUnitImpl, arg1: MeasureUnitImpl): number;
    reversed(): (param0: MeasureUnitImpl, param1: MeasureUnitImpl) => number;
    thenComparing(arg0: (param0: MeasureUnitImpl, param1: MeasureUnitImpl) => number): (param0: MeasureUnitImpl, param1: MeasureUnitImpl) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: MeasureUnitImpl) => U): (param0: MeasureUnitImpl, param1: MeasureUnitImpl) => number;
    thenComparing<U extends unknown>(arg0: (param0: MeasureUnitImpl) => U, arg1: (param0: U, param1: U) => number): (param0: MeasureUnitImpl, param1: MeasureUnitImpl) => number;
    thenComparingDouble(arg0: (param0: MeasureUnitImpl) => number): (param0: MeasureUnitImpl, param1: MeasureUnitImpl) => number;
    thenComparingInt(arg0: (param0: MeasureUnitImpl) => number): (param0: MeasureUnitImpl, param1: MeasureUnitImpl) => number;
    thenComparingLong(arg0: (param0: MeasureUnitImpl) => number): (param0: MeasureUnitImpl, param1: MeasureUnitImpl) => number;
}