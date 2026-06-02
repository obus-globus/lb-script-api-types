import type { ComplexUnitsConverter$ComplexConverterResult } from '../../../../../com/ibm/icu/impl/units/ComplexUnitsConverter$ComplexConverterResult.d.ts'
import type { ConversionRates } from '../../../../../com/ibm/icu/impl/units/ConversionRates.d.ts'
import type { MeasureUnitImpl } from '../../../../../com/ibm/icu/impl/units/MeasureUnitImpl.d.ts'
import type { MeasureUnitImpl$MeasureUnitImplWithIndex } from '../../../../../com/ibm/icu/impl/units/MeasureUnitImpl$MeasureUnitImplWithIndex.d.ts'
import type { UnitsConverter } from '../../../../../com/ibm/icu/impl/units/UnitsConverter.d.ts'
import type { Precision } from '../../../../../com/ibm/icu/number/Precision.d.ts'
import type { BigDecimal } from '../../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ComplexUnitsConverter extends Object {
    static EPSILON: BigDecimal;
    static EPSILON_MULTIPLIER: BigDecimal;
    constructor(arg0: MeasureUnitImpl, arg1: ConversionRates)
    constructor(arg0: MeasureUnitImpl, arg1: MeasureUnitImpl, arg2: ConversionRates)
    constructor(arg0: string, arg1: string)
    // private inputUnit_: MeasureUnitImpl;
    unitsConverters_: UnitsConverter[];
    units_: MeasureUnitImpl$MeasureUnitImplWithIndex[];
    // private applyRounder(arg0: BigInteger[], arg1: BigDecimal, arg2: Precision): BigDecimal;
    convert(arg0: BigDecimal, arg1: Precision): ComplexUnitsConverter$ComplexConverterResult;
    greaterThanOrEqual(arg0: BigDecimal, arg1: BigDecimal): boolean;
    // private init(arg0: ConversionRates): void;
    toString(): string;
}