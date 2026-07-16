import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { CompactDecimalFormat$CompactStyle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CompactDecimalFormat$CompactStyle.d.ts'
import type { DecimalFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormat.d.ts'
import type { NumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat.d.ts'
import type { NumberFormat$NumberFormatFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat$NumberFormatFactory.d.ts'
import type { CurrencyAmount } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CurrencyAmount.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class CompactDecimalFormat extends DecimalFormat {
    static ACCOUNTINGCURRENCYSTYLE: number;
    static CASHCURRENCYSTYLE: number;
    static CURRENCYSTYLE: number;
    static FRACTION_FIELD: number;
    static INTEGERSTYLE: number;
    static INTEGER_FIELD: number;
    static ISOCURRENCYSTYLE: number;
    static MINIMUM_GROUPING_DIGITS_AUTO: number;
    static MINIMUM_GROUPING_DIGITS_MIN2: number;
    static NUMBERSTYLE: number;
    static PAD_AFTER_PREFIX: number;
    static PAD_AFTER_SUFFIX: number;
    static PAD_BEFORE_PREFIX: number;
    static PAD_BEFORE_SUFFIX: number;
    static PERCENTSTYLE: number;
    static PLURALCURRENCYSTYLE: number;
    static SCIENTIFICSTYLE: number;
    static STANDARDCURRENCYSTYLE: number;
    static getAvailableLocales(): Locale[];
    static getAvailableULocales(): ULocale[];
    static getCurrencyInstance(): NumberFormat;
    static getCurrencyInstance(paraminLocale: Locale): NumberFormat;
    static getCurrencyInstance(paraminLocale: ULocale): NumberFormat;
    static getInstance(): NumberFormat;
    static getInstance(paramstyle: number): NumberFormat;
    static getInstance(paramlocale: Locale, paramstyle: CompactDecimalFormat$CompactStyle): CompactDecimalFormat;
    static getInstance(paramlocale: ULocale, paramstyle: CompactDecimalFormat$CompactStyle): CompactDecimalFormat;
    static getInstance(paraminLocale: Locale): NumberFormat;
    static getInstance(paraminLocale: Locale, paramstyle: number): NumberFormat;
    static getInstance(paraminLocale: ULocale): NumberFormat;
    static getInstance(paramdesiredLocale: ULocale, paramchoice: number): NumberFormat;
    static getIntegerInstance(): NumberFormat;
    static getIntegerInstance(paraminLocale: Locale): NumberFormat;
    static getIntegerInstance(paraminLocale: ULocale): NumberFormat;
    static getNumberInstance(): NumberFormat;
    static getNumberInstance(paraminLocale: Locale): NumberFormat;
    static getNumberInstance(paraminLocale: ULocale): NumberFormat;
    static getPatternForStyle(paramforLocale: ULocale, paramchoice: number): string;
    static getPatternForStyleAndNumberingSystem(paramforLocale: ULocale, paramnsName: string, paramchoice: number): string;
    static getPercentInstance(): NumberFormat;
    static getPercentInstance(paraminLocale: Locale): NumberFormat;
    static getPercentInstance(paraminLocale: ULocale): NumberFormat;
    static getScientificInstance(): NumberFormat;
    static getScientificInstance(paraminLocale: Locale): NumberFormat;
    static getScientificInstance(paraminLocale: ULocale): NumberFormat;
    static registerFactory(paramfactory: NumberFormat$NumberFormatFactory): Object;
    static unregister(paramregistryKey: Object): boolean;
    constructor(locale: ULocale, style: CompactDecimalFormat$CompactStyle)
    parse(text: string): Number;
    parse(text: string, parsePosition: ParsePosition): Number;
    parseCurrency(text: CharSequence, parsePosition: ParsePosition): CurrencyAmount;
}