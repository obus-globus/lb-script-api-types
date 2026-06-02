import type { DecimalFormat } from '../../../../com/ibm/icu/text/DecimalFormat.d.ts'
import type { ScientificNumberFormatter$Style } from '../../../../com/ibm/icu/text/ScientificNumberFormatter$Style.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ScientificNumberFormatter extends Object {
    static getMarkupInstance(paramarg0: DecimalFormat, paramarg1: string, paramarg2: string): ScientificNumberFormatter;
    static getMarkupInstance(paramarg0: ULocale, paramarg1: string, paramarg2: string): ScientificNumberFormatter;
    static getSuperscriptInstance(paramarg0: DecimalFormat): ScientificNumberFormatter;
    static getSuperscriptInstance(paramarg0: ULocale): ScientificNumberFormatter;
    private constructor(arg0: DecimalFormat, arg1: string, arg2: ScientificNumberFormatter$Style)
    // private fmt: DecimalFormat;
    // private preExponent: string;
    // private style: ScientificNumberFormatter$Style;
    format(arg0: Object): string;
}