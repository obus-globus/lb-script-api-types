import type { CompactDecimalFormat$CompactStyle } from '../../../../com/ibm/icu/text/CompactDecimalFormat$CompactStyle.d.ts'
import type { DecimalFormat } from '../../../../com/ibm/icu/text/DecimalFormat.d.ts'
import type { NumberFormat } from '../../../../com/ibm/icu/text/NumberFormat.d.ts'
import type { NumberFormat$NumberFormatFactory } from '../../../../com/ibm/icu/text/NumberFormat$NumberFormatFactory.d.ts'
import type { CurrencyAmount } from '../../../../com/ibm/icu/util/CurrencyAmount.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
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
    static getAvailableLocales(): (Object | null)[];
    static getAvailableULocales(): (Object | null)[];
    static getCurrencyInstance(paramarg0: ULocale): NumberFormat;
    static getCurrencyInstance(paramarg0: Locale): NumberFormat;
    static getCurrencyInstance(): NumberFormat;
    static getInstance(paramarg0: ULocale, paramarg1: CompactDecimalFormat$CompactStyle): CompactDecimalFormat;
    static getInstance(paramarg0: Locale, paramarg1: CompactDecimalFormat$CompactStyle): CompactDecimalFormat;
    static getInstance(paramarg0: ULocale): NumberFormat;
    static getInstance(paramarg0: ULocale, paramarg1: number): NumberFormat;
    static getInstance(paramarg0: Locale): NumberFormat;
    static getInstance(paramarg0: Locale, paramarg1: number): NumberFormat;
    static getInstance(): NumberFormat;
    static getInstance(paramarg0: number): NumberFormat;
    static getIntegerInstance(paramarg0: ULocale): NumberFormat;
    static getIntegerInstance(paramarg0: Locale): NumberFormat;
    static getIntegerInstance(): NumberFormat;
    static getNumberInstance(paramarg0: ULocale): NumberFormat;
    static getNumberInstance(paramarg0: Locale): NumberFormat;
    static getNumberInstance(): NumberFormat;
    static getPatternForStyle(paramarg0: ULocale, paramarg1: number): string;
    static getPatternForStyleAndNumberingSystem(paramarg0: ULocale, paramarg1: string, paramarg2: number): string;
    static getPercentInstance(paramarg0: ULocale): NumberFormat;
    static getPercentInstance(paramarg0: Locale): NumberFormat;
    static getPercentInstance(): NumberFormat;
    static getScientificInstance(paramarg0: ULocale): NumberFormat;
    static getScientificInstance(paramarg0: Locale): NumberFormat;
    static getScientificInstance(): NumberFormat;
    static registerFactory(paramarg0: NumberFormat$NumberFormatFactory): Object;
    static unregister(paramarg0: Object): boolean;
    constructor(arg0: ULocale, arg1: CompactDecimalFormat$CompactStyle)
    parse(arg0: string): Number;
    parse(arg0: string, arg1: ParsePosition): Number;
    parseCurrency(arg0: CharSequence, arg1: ParsePosition): CurrencyAmount;
}