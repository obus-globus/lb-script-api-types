import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DecimalFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormat.d.ts'
import type { ScientificNumberFormatter$Style } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ScientificNumberFormatter$Style.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class ScientificNumberFormatter extends Object {
    static getMarkupInstance(paramdf: DecimalFormat, parambeginMarkup: string, paramendMarkup: string): ScientificNumberFormatter;
    static getMarkupInstance(paramlocale: ULocale, parambeginMarkup: string, paramendMarkup: string): ScientificNumberFormatter;
    static getSuperscriptInstance(paramdf: DecimalFormat): ScientificNumberFormatter;
    static getSuperscriptInstance(paramlocale: ULocale): ScientificNumberFormatter;
    private constructor(decimalFormat: DecimalFormat, preExponent: string, style: ScientificNumberFormatter$Style)
    // private fmt: DecimalFormat;
    // private preExponent: string;
    // private style: ScientificNumberFormatter$Style;
    format(number: Object): string;
}