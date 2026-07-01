import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../../java/lang/Cloneable.d.ts'
import type { DecimalQuantity } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { Grouper } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Grouper.d.ts'
import type { MicroPropsGenerator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { Modifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier.d.ts'
import type { Padder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Padder.d.ts'
import type { IntegerWidth } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/IntegerWidth.d.ts'
import type { NumberFormatter$DecimalSeparatorDisplay } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatter$DecimalSeparatorDisplay.d.ts'
import type { NumberFormatter$SignDisplay } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatter$SignDisplay.d.ts'
import type { Precision } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/Precision.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { Measure } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Measure.d.ts'
import type { MeasureUnit } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit.d.ts'
export class MicroProps extends Object implements Cloneable, MicroPropsGenerator {
    constructor(immutable: boolean)
    currencyAsDecimal: string;
    decimal: NumberFormatter$DecimalSeparatorDisplay;
    // private exhausted: boolean;
    gender: string;
    grouping: Grouper;
    // private immutable: boolean;
    indexOfQuantity: number;
    integerWidth: IntegerWidth;
    mixedMeasures: Measure[];
    modInner: Modifier;
    modMiddle: Modifier;
    modOuter: Modifier;
    nsName: string;
    outputUnit: MeasureUnit;
    padding: Padder;
    rounder: Precision;
    sign: NumberFormatter$SignDisplay;
    symbols: DecimalFormatSymbols;
    useCurrency: boolean;
    clone(): Object;
    processQuantity(quantity: DecimalQuantity): MicroProps;
}