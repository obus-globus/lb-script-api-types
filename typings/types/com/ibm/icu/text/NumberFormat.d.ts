import type { BigDecimal } from '../../../../com/ibm/icu/math/BigDecimal.d.ts'
import type { DisplayContext } from '../../../../com/ibm/icu/text/DisplayContext.d.ts'
import type { DisplayContext$Type } from '../../../../com/ibm/icu/text/DisplayContext$Type.d.ts'
import type { NumberFormat$NumberFormatFactory } from '../../../../com/ibm/icu/text/NumberFormat$NumberFormatFactory.d.ts'
import type { UFormat } from '../../../../com/ibm/icu/text/UFormat.d.ts'
import type { Currency } from '../../../../com/ibm/icu/util/Currency.d.ts'
import type { CurrencyAmount } from '../../../../com/ibm/icu/util/CurrencyAmount.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { BigDecimal as BigDecimal_2 } from '../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { FieldPosition } from '../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export abstract class NumberFormat extends UFormat implements Cloneable {
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
    static getAvailableLocales(): Locale[];
    static getAvailableULocales(): ULocale[];
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
    clone(): NumberFormat;
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
    getContext(arg0: DisplayContext$Type): DisplayContext;
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
    parse(arg0: string): Number;
    parse(arg0: string, arg1: ParsePosition): Number;
    parseCurrency(arg0: CharSequence, arg1: ParsePosition): CurrencyAmount;
    parseObject(arg0: string): Object;
    parseObject(arg0: string, arg1: ParsePosition): Object;
    // private readObject(arg0: ObjectInputStream): void;
    setContext(arg0: DisplayContext): void;
    setCurrency(arg0: Currency): void;
    setGroupingUsed(arg0: boolean): void;
    setMaximumFractionDigits(arg0: number): void;
    setMaximumIntegerDigits(arg0: number): void;
    setMinimumFractionDigits(arg0: number): void;
    setMinimumIntegerDigits(arg0: number): void;
    setParseIntegerOnly(arg0: boolean): void;
    setParseStrict(arg0: boolean): void;
    setRoundingMode(arg0: number): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}