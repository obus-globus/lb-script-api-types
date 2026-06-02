import type { MicroPropsGenerator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { CompactNotation } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/CompactNotation.d.ts'
import type { Notation } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/Notation.d.ts'
import type { NumberFormatter$SignDisplay } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatter$SignDisplay.d.ts'
import type { SimpleNotation } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/SimpleNotation.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
export class ScientificNotation extends Notation {
    static compactLong(): CompactNotation;
    static compactShort(): CompactNotation;
    static engineering(): ScientificNotation;
    static scientific(): ScientificNotation;
    static simple(): SimpleNotation;
    constructor(engineeringInterval: number, requireMinInt: boolean, minExponentDigits: number, exponentSignDisplay: NumberFormatter$SignDisplay)
    // private engineeringInterval: number;
    // private exponentSignDisplay: NumberFormatter$SignDisplay;
    // private minExponentDigits: number;
    // private requireMinInt: boolean;
    createCopy(): ScientificNotation;
    withExponentSignDisplay(exponentSignDisplay: NumberFormatter$SignDisplay): ScientificNotation;
    withLocaleData(symbols: DecimalFormatSymbols, build: boolean, parent: MicroPropsGenerator): MicroPropsGenerator;
    withMinExponentDigits(minExponentDigits: number): ScientificNotation;
}