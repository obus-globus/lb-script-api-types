import type { BigDecimal } from '../../../../../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ComplexUnitsConverter$ComplexConverterResult } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/ComplexUnitsConverter$ComplexConverterResult.d.ts'
import type { ConversionRates } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/ConversionRates.d.ts'
import type { MeasureUnitImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/MeasureUnitImpl.d.ts'
import type { MeasureUnitImpl$MeasureUnitImplWithIndex } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/MeasureUnitImpl$MeasureUnitImplWithIndex.d.ts'
import type { UnitsConverter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/UnitsConverter.d.ts'
import type { Precision } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/Precision.d.ts'
export class ComplexUnitsConverter extends Object {
    static EPSILON: BigDecimal;
    static EPSILON_MULTIPLIER: BigDecimal;
    constructor(inputUnitIdentifier: string, outputUnitsIdentifier: string)
    constructor(targetUnit: MeasureUnitImpl, conversionRates: ConversionRates)
    constructor(inputUnit: MeasureUnitImpl, outputUnits: MeasureUnitImpl, conversionRates: ConversionRates)
    // private inputUnit_: MeasureUnitImpl;
    unitsConverters_: UnitsConverter[];
    units_: MeasureUnitImpl$MeasureUnitImplWithIndex[];
    // private applyRounder(intValues: BigInteger[], quantity: BigDecimal, rounder: Precision): BigDecimal;
    convert(quantity: BigDecimal, rounder: Precision): ComplexUnitsConverter$ComplexConverterResult;
    greaterThanOrEqual(quantity: BigDecimal, limit: BigDecimal): boolean;
    // private init(conversionRates: ConversionRates): void;
    toString(): string;
}