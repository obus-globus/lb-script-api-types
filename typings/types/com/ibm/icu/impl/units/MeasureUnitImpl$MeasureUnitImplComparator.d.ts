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
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object) => boolean;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static naturalOrder(): (param0: Object) => boolean;
    static nullsFirst(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static nullsLast(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static reverseOrder(): (param0: Object) => boolean;
    constructor(arg0: ConversionRates)
    // private conversionRates: ConversionRates;
    compare(arg0: MeasureUnitImpl, arg1: MeasureUnitImpl): number;
    reversed(): (param0: Object) => boolean;
    thenComparing(arg0: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparing<U extends Comparable<U>>(arg0: (param0: MeasureUnitImpl) => U): (param0: Object) => boolean;
    thenComparing<U extends unknown>(arg0: (param0: MeasureUnitImpl) => U, arg1: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparingDouble(arg0: (param0: MeasureUnitImpl) => number): (param0: Object) => boolean;
    thenComparingInt(arg0: (param0: MeasureUnitImpl) => number): (param0: Object) => boolean;
    thenComparingLong(arg0: (param0: MeasureUnitImpl) => number): (param0: Object) => boolean;
}