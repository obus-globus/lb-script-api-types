import type { DecimalQuantity } from '../../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { Grouper } from '../../../../../com/ibm/icu/impl/number/Grouper.d.ts'
import type { MicroPropsGenerator } from '../../../../../com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { Modifier } from '../../../../../com/ibm/icu/impl/number/Modifier.d.ts'
import type { Padder } from '../../../../../com/ibm/icu/impl/number/Padder.d.ts'
import type { IntegerWidth } from '../../../../../com/ibm/icu/number/IntegerWidth.d.ts'
import type { NumberFormatter$DecimalSeparatorDisplay } from '../../../../../com/ibm/icu/number/NumberFormatter$DecimalSeparatorDisplay.d.ts'
import type { NumberFormatter$SignDisplay } from '../../../../../com/ibm/icu/number/NumberFormatter$SignDisplay.d.ts'
import type { Precision } from '../../../../../com/ibm/icu/number/Precision.d.ts'
import type { DecimalFormatSymbols } from '../../../../../com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { Measure } from '../../../../../com/ibm/icu/util/Measure.d.ts'
import type { MeasureUnit } from '../../../../../com/ibm/icu/util/MeasureUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class MicroProps extends Object implements MicroPropsGenerator, Cloneable {
    constructor(arg0: boolean)
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
    clone(): MicroProps;
    processQuantity(arg0: DecimalQuantity): MicroProps;
}