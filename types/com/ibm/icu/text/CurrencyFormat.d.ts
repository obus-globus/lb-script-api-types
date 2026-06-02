import type { MeasureFormat } from '../../../../com/ibm/icu/text/MeasureFormat.d.ts'
import type { MeasureFormat$FormatWidth } from '../../../../com/ibm/icu/text/MeasureFormat$FormatWidth.d.ts'
import type { NumberFormat } from '../../../../com/ibm/icu/text/NumberFormat.d.ts'
import type { CurrencyAmount } from '../../../../com/ibm/icu/util/CurrencyAmount.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { FieldPosition } from '../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CurrencyFormat extends MeasureFormat {
    static getCurrencyFormat(): MeasureFormat;
    static getCurrencyFormat(paramarg0: ULocale): MeasureFormat;
    static getCurrencyFormat(paramarg0: Locale): MeasureFormat;
    static getInstance(paramarg0: ULocale, paramarg1: MeasureFormat$FormatWidth): MeasureFormat;
    static getInstance(paramarg0: ULocale, paramarg1: MeasureFormat$FormatWidth, paramarg2: NumberFormat): MeasureFormat;
    static getInstance(paramarg0: Locale, paramarg1: MeasureFormat$FormatWidth): MeasureFormat;
    static getInstance(paramarg0: Locale, paramarg1: MeasureFormat$FormatWidth, paramarg2: NumberFormat): MeasureFormat;
    static getRangeFormat(paramarg0: ULocale, paramarg1: MeasureFormat$FormatWidth): string;
    constructor(arg0: ULocale)
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    parseObject(arg0: string, arg1: ParsePosition): CurrencyAmount;
    // private readResolve(): Object;
    // private writeReplace(): Object;
}