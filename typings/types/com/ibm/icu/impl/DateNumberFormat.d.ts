import type { BigDecimal } from '../../../../com/ibm/icu/math/BigDecimal.d.ts'
import type { NumberFormat } from '../../../../com/ibm/icu/text/NumberFormat.d.ts'
import type { NumberFormat$NumberFormatFactory } from '../../../../com/ibm/icu/text/NumberFormat$NumberFormatFactory.d.ts'
import type { CurrencyAmount } from '../../../../com/ibm/icu/util/CurrencyAmount.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { BigDecimal as BigDecimal_2 } from '../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { FieldPosition } from '../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class DateNumberFormat extends NumberFormat {
    static ACCOUNTINGCURRENCYSTYLE: number;
    static CASHCURRENCYSTYLE: number;
    static CURRENCYSTYLE: number;
    static FRACTION_FIELD: number;
    static INTEGERSTYLE: number;
    static INTEGER_FIELD: number;
    static ISOCURRENCYSTYLE: number;
    static NUMBERSTYLE: number;
    static PERCENTSTYLE: number;
    static PLURALCURRENCYSTYLE: number;
    static SCIENTIFICSTYLE: number;
    static STANDARDCURRENCYSTYLE: number;
    static getAvailableLocales(): (Object | null)[];
    static getAvailableULocales(): (Object | null)[];
    static getCurrencyInstance(paramarg0: ULocale): NumberFormat;
    static getCurrencyInstance(paramarg0: Locale): NumberFormat;
    static getCurrencyInstance(): NumberFormat;
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
    constructor(arg0: ULocale, arg1: string, arg2: string)
    constructor(arg0: ULocale, arg1: string, arg2: string)
    // private decimalBuf: string[];
    readonly digits: string[];
    // private maxIntDigits: number;
    // private minIntDigits: number;
    // private minusSign: string;
    // private positiveOnly: boolean;
    readonly zeroDigit: string;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    format(arg0: BigDecimal): string;
    format(arg0: BigDecimal, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: CurrencyAmount): string;
    format(arg0: CurrencyAmount, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: BigDecimal_2): string;
    format(arg0: BigDecimal_2, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: BigInteger): string;
    format(arg0: BigInteger, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: Object): string;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: number): string;
    format(arg0: number, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    getDigits(): string[];
    getMaximumIntegerDigits(): number;
    getMinimumIntegerDigits(): number;
    getZeroDigit(): string;
    hashCode(): number;
    // private initialize(arg0: ULocale, arg1: string, arg2: string): void;
    parse(arg0: string): Number;
    parse(arg0: string, arg1: ParsePosition): Number;
    // private readObject(arg0: ObjectInputStream): void;
    setMaximumIntegerDigits(arg0: number): void;
    setMinimumIntegerDigits(arg0: number): void;
    setParsePositiveOnly(arg0: boolean): void;
    setZeroDigit(arg0: string): void;
}