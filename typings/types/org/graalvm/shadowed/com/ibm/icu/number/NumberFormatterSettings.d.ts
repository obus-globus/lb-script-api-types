import type { RoundingMode } from '../../../../../../../java/math/RoundingMode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MacroProps } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MacroProps.d.ts'
import type { Padder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Padder.d.ts'
import type { IntegerWidth } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/IntegerWidth.d.ts'
import type { Notation } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/Notation.d.ts'
import type { NumberFormatter$DecimalSeparatorDisplay } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatter$DecimalSeparatorDisplay.d.ts'
import type { NumberFormatter$GroupingStrategy } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatter$GroupingStrategy.d.ts'
import type { NumberFormatter$SignDisplay } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatter$SignDisplay.d.ts'
import type { NumberFormatter$UnitWidth } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatter$UnitWidth.d.ts'
import type { Precision } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/Precision.d.ts'
import type { Scale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/Scale.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { DisplayOptions } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayOptions.d.ts'
import type { NumberingSystem } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberingSystem.d.ts'
import type { MeasureUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit.d.ts'
export abstract class NumberFormatterSettings<T extends NumberFormatterSettings<Object>> extends Object {
    constructor(parent: NumberFormatterSettings<Object>, key: number, value: Object)
    // private key: number;
    // private parent: NumberFormatterSettings<Object>;
    // private resolvedMacros: MacroProps;
    // private value: Object;
    create(key: number, value: Object): T;
    decimal(style: NumberFormatter$DecimalSeparatorDisplay): T;
    displayOptions(displayOptions: DisplayOptions): T;
    equals(other: Object | null): boolean;
    grouping(strategy: NumberFormatter$GroupingStrategy): T;
    hashCode(): number;
    integerWidth(style: IntegerWidth): T;
    macros(macros: MacroProps): T;
    notation(notation: Notation): T;
    padding(padder: Padder): T;
    perUnit(perUnit: MeasureUnit): T;
    precision(precision: Precision): T;
    resolve(): MacroProps;
    roundingMode(roundingMode: RoundingMode): T;
    scale(scale: Scale): T;
    sign(style: NumberFormatter$SignDisplay): T;
    symbols(symbols: DecimalFormatSymbols): T;
    symbols(ns: NumberingSystem): T;
    threshold(threshold: number): T;
    toSkeleton(): string;
    unit(unit: MeasureUnit): T;
    unitDisplayCase(unitDisplayCase: string): T;
    unitWidth(style: NumberFormatter$UnitWidth): T;
    usage(usage: string): T;
}