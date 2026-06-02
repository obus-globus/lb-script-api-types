import type { MacroProps } from '../../../../com/ibm/icu/impl/number/MacroProps.d.ts'
import type { Padder } from '../../../../com/ibm/icu/impl/number/Padder.d.ts'
import type { IntegerWidth } from '../../../../com/ibm/icu/number/IntegerWidth.d.ts'
import type { Notation } from '../../../../com/ibm/icu/number/Notation.d.ts'
import type { NumberFormatter$DecimalSeparatorDisplay } from '../../../../com/ibm/icu/number/NumberFormatter$DecimalSeparatorDisplay.d.ts'
import type { NumberFormatter$GroupingStrategy } from '../../../../com/ibm/icu/number/NumberFormatter$GroupingStrategy.d.ts'
import type { NumberFormatter$SignDisplay } from '../../../../com/ibm/icu/number/NumberFormatter$SignDisplay.d.ts'
import type { NumberFormatter$UnitWidth } from '../../../../com/ibm/icu/number/NumberFormatter$UnitWidth.d.ts'
import type { Precision } from '../../../../com/ibm/icu/number/Precision.d.ts'
import type { Scale } from '../../../../com/ibm/icu/number/Scale.d.ts'
import type { DecimalFormatSymbols } from '../../../../com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { DisplayOptions } from '../../../../com/ibm/icu/text/DisplayOptions.d.ts'
import type { NumberingSystem } from '../../../../com/ibm/icu/text/NumberingSystem.d.ts'
import type { MeasureUnit } from '../../../../com/ibm/icu/util/MeasureUnit.d.ts'
import type { RoundingMode } from '../../../../java/math/RoundingMode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class NumberFormatterSettings<T extends NumberFormatterSettings<Object>> extends Object {
    constructor(arg0: NumberFormatterSettings<Object>, arg1: number, arg2: Object)
    // private key: number;
    // private parent: NumberFormatterSettings<Object>;
    // private resolvedMacros: MacroProps;
    // private value: Object;
    create(arg0: number, arg1: Object): T;
    decimal(arg0: NumberFormatter$DecimalSeparatorDisplay): T;
    displayOptions(arg0: DisplayOptions): T;
    equals(arg0: Object | null): boolean;
    grouping(arg0: NumberFormatter$GroupingStrategy): T;
    hashCode(): number;
    integerWidth(arg0: IntegerWidth): T;
    macros(arg0: MacroProps): T;
    notation(arg0: Notation): T;
    padding(arg0: Padder): T;
    perUnit(arg0: MeasureUnit): T;
    precision(arg0: Precision): T;
    resolve(): MacroProps;
    roundingMode(arg0: RoundingMode): T;
    scale(arg0: Scale): T;
    sign(arg0: NumberFormatter$SignDisplay): T;
    symbols(arg0: DecimalFormatSymbols): T;
    symbols(arg0: NumberingSystem): T;
    threshold(arg0: number): T;
    toSkeleton(): string;
    unit(arg0: MeasureUnit): T;
    unitDisplayCase(arg0: string): T;
    unitWidth(arg0: NumberFormatter$UnitWidth): T;
    usage(arg0: string): T;
}