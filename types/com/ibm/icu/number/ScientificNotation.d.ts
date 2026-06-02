import type { MicroPropsGenerator } from '../../../../com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { CompactNotation } from '../../../../com/ibm/icu/number/CompactNotation.d.ts'
import type { Notation } from '../../../../com/ibm/icu/number/Notation.d.ts'
import type { NumberFormatter$SignDisplay } from '../../../../com/ibm/icu/number/NumberFormatter$SignDisplay.d.ts'
import type { SimpleNotation } from '../../../../com/ibm/icu/number/SimpleNotation.d.ts'
import type { DecimalFormatSymbols } from '../../../../com/ibm/icu/text/DecimalFormatSymbols.d.ts'
export class ScientificNotation extends Notation {
    static compactLong(): CompactNotation;
    static compactShort(): CompactNotation;
    static engineering(): ScientificNotation;
    static scientific(): ScientificNotation;
    static simple(): SimpleNotation;
    constructor(arg0: number, arg1: boolean, arg2: number, arg3: NumberFormatter$SignDisplay)
    // private engineeringInterval: number;
    // private exponentSignDisplay: NumberFormatter$SignDisplay;
    // private minExponentDigits: number;
    // private requireMinInt: boolean;
    createCopy(): ScientificNotation;
    withExponentSignDisplay(arg0: NumberFormatter$SignDisplay): ScientificNotation;
    withLocaleData(arg0: DecimalFormatSymbols, arg1: boolean, arg2: MicroPropsGenerator): MicroPropsGenerator;
    withMinExponentDigits(arg0: number): ScientificNotation;
}