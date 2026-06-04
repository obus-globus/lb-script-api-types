import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../../../java/io/ObjectOutputStream.d.ts'
import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { BigDecimal } from '../../../../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../../../../java/math/BigInteger.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { BigDecimal as BigDecimal_2 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/math/BigDecimal.d.ts'
import type { DisplayContext } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayContext.d.ts'
import type { DisplayContext$Type } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayContext$Type.d.ts'
import type { NumberFormat$NumberFormatFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat$NumberFormatFactory.d.ts'
import type { UFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UFormat.d.ts'
import type { Currency } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency.d.ts'
import type { CurrencyAmount } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CurrencyAmount.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class NumberFormat extends UFormat {
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
    static getCurrencyInstance(): NumberFormat;
    static getCurrencyInstance(paraminLocale: Locale): NumberFormat;
    static getCurrencyInstance(paraminLocale: ULocale): NumberFormat;
    static getInstance(): NumberFormat;
    static getInstance(paramstyle: number): NumberFormat;
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
    constructor()
    // private capitalizationSetting: DisplayContext;
    readonly currency: Currency;
    readonly groupingUsed: boolean;
    // private maxFractionDigits: number;
    // private maxIntegerDigits: number;
    readonly maximumFractionDigits: number;
    readonly maximumIntegerDigits: number;
    // private minFractionDigits: number;
    // private minIntegerDigits: number;
    readonly minimumFractionDigits: number;
    readonly minimumIntegerDigits: number;
    readonly parseIntegerOnly: boolean;
    readonly parseStrict: boolean;
    // private serialVersionOnStream: number;
    clone(): Object;
    equals(obj: Object | null): boolean;
    format(number: BigDecimal): string;
    format(number: BigDecimal, toAppendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    format(number: BigInteger): string;
    format(number: BigInteger, toAppendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    format(arg0: Object): string;
    format(number: Object, toAppendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    format(number: number): string;
    format(number: number, toAppendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    format(number: BigDecimal_2): string;
    format(number: BigDecimal_2, toAppendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    format(currAmt: CurrencyAmount): string;
    format(currAmt: CurrencyAmount, toAppendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    getContext(type: DisplayContext$Type): DisplayContext;
    getCurrency(): Currency;
    getEffectiveCurrency(): Currency;
    getMaximumFractionDigits(): number;
    getMaximumIntegerDigits(): number;
    getMinimumFractionDigits(): number;
    getMinimumIntegerDigits(): number;
    getRoundingMode(): number;
    hashCode(): number;
    isGroupingUsed(): boolean;
    isParseIntegerOnly(): boolean;
    isParseStrict(): boolean;
    parse(text: string): Number;
    parse(text: string, parsePosition: ParsePosition): Number;
    parseCurrency(text: CharSequence, pos: ParsePosition): CurrencyAmount;
    parseObject(arg0: string): Object;
    parseObject(source: string, parsePosition: ParsePosition): Object;
    // private readObject(stream: ObjectInputStream): void;
    setContext(context: DisplayContext): void;
    setCurrency(theCurrency: Currency): void;
    setGroupingUsed(newValue: boolean): void;
    setMaximumFractionDigits(newValue: number): void;
    setMaximumIntegerDigits(newValue: number): void;
    setMinimumFractionDigits(newValue: number): void;
    setMinimumIntegerDigits(newValue: number): void;
    setParseIntegerOnly(value: boolean): void;
    setParseStrict(value: boolean): void;
    setRoundingMode(roundingMode: number): void;
    // private writeObject(stream: ObjectOutputStream): void;
}