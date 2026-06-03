import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MeasureFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MeasureFormat.d.ts'
import type { MeasureFormat$FormatWidth } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MeasureFormat$FormatWidth.d.ts'
import type { NumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat.d.ts'
import type { CurrencyAmount } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CurrencyAmount.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class CurrencyFormat extends MeasureFormat {
    static getCurrencyFormat(): MeasureFormat;
    static getCurrencyFormat(paramlocale: Locale): MeasureFormat;
    static getCurrencyFormat(paramlocale: ULocale): MeasureFormat;
    static getInstance(paramlocale: Locale, paramformatWidth: MeasureFormat$FormatWidth): MeasureFormat;
    static getInstance(paramlocale: Locale, paramformatWidth: MeasureFormat$FormatWidth, paramformat: NumberFormat): MeasureFormat;
    static getInstance(paramlocale: ULocale, paramformatWidth: MeasureFormat$FormatWidth): MeasureFormat;
    static getInstance(paramlocale: ULocale, paramformatWidth: MeasureFormat$FormatWidth, paramformat: NumberFormat): MeasureFormat;
    static getRangeFormat(paramforLocale: ULocale, paramwidth: MeasureFormat$FormatWidth): string;
    constructor(locale: ULocale)
    format(arg0: Object): string;
    format(obj: Object, toAppendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    parseObject(arg0: string): Object;
    parseObject(source: string, pos: ParsePosition): CurrencyAmount;
    // private readResolve(): Object;
    // private writeReplace(): Object;
}