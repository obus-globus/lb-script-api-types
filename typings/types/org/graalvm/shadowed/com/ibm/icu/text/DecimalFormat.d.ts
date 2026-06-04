import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../../../java/io/ObjectOutputStream.d.ts'
import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { BigDecimal } from '../../../../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../../../../java/math/BigInteger.d.ts'
import type { MathContext } from '../../../../../../../java/math/MathContext.d.ts'
import type { AttributedCharacterIterator } from '../../../../../../../java/text/AttributedCharacterIterator.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { DecimalFormatProperties } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { DecimalFormatProperties$ParseMode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalFormatProperties$ParseMode.d.ts'
import type { NumberParserImpl } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/NumberParserImpl.d.ts'
import type { BigDecimal as BigDecimal_2 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/math/BigDecimal.d.ts'
import type { MathContext as MathContext_2 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/math/MathContext.d.ts'
import type { LocalizedNumberFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { CurrencyPluralInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CurrencyPluralInfo.d.ts'
import type { DecimalFormat$PropertySetter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormat$PropertySetter.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { NumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat.d.ts'
import type { NumberFormat$NumberFormatFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat$NumberFormatFactory.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { Currency } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency.d.ts'
import type { Currency$CurrencyUsage } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency$CurrencyUsage.d.ts'
import type { CurrencyAmount } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CurrencyAmount.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class DecimalFormat extends NumberFormat {
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
    constructor(pattern: string)
    constructor(pattern: string, symbols: DecimalFormatSymbols)
    constructor(pattern: string, symbols: DecimalFormatSymbols, choice: number)
    constructor(pattern: string, symbols: DecimalFormatSymbols, infoInput: CurrencyPluralInfo, style: number)
    // private currencyParser: NumberParserImpl;
    // private exportedProperties: DecimalFormatProperties;
    // private formatter: LocalizedNumberFormatter;
    // private icuMathContextForm: number;
    // private parser: NumberParserImpl;
    properties: DecimalFormatProperties;
    // private serialVersionOnStream: number;
    // private symbols: DecimalFormatSymbols;
    applyLocalizedPattern(localizedPattern: string): void;
    applyPattern(pattern: string): void;
    areSignificantDigitsUsed(): boolean;
    clone(): Object;
    equals(obj: Object | null): boolean;
    format(number: BigDecimal): string;
    format(number: BigDecimal, result: StringBuffer, fieldPosition: FieldPosition): StringBuffer;
    format(number: BigInteger): string;
    format(number: BigInteger, result: StringBuffer, fieldPosition: FieldPosition): StringBuffer;
    format(arg0: Object): string;
    format(number: Object, toAppendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    format(number: number): string;
    format(number: number, result: StringBuffer, fieldPosition: FieldPosition): StringBuffer;
    format(number: BigDecimal_2): string;
    format(number: BigDecimal_2, result: StringBuffer, fieldPosition: FieldPosition): StringBuffer;
    format(currAmt: CurrencyAmount): string;
    format(currAmt: CurrencyAmount, result: StringBuffer, fieldPosition: FieldPosition): StringBuffer;
    formatToCharacterIterator(obj: Object): AttributedCharacterIterator;
    getCurrency(): Currency;
    getCurrencyParser(): NumberParserImpl;
    getCurrencyPluralInfo(): CurrencyPluralInfo;
    getCurrencyUsage(): Currency$CurrencyUsage;
    getDecimalFormatSymbols(): DecimalFormatSymbols;
    getFixedDecimal(number: number): PluralRules$IFixedDecimal;
    getFormatWidth(): number;
    getGroupingSize(): number;
    getMathContext(): MathContext;
    getMathContextICU(): MathContext_2;
    getMaximumFractionDigits(): number;
    getMaximumIntegerDigits(): number;
    getMaximumSignificantDigits(): number;
    getMinimumExponentDigits(): number;
    getMinimumFractionDigits(): number;
    getMinimumGroupingDigits(): number;
    getMinimumIntegerDigits(): number;
    getMinimumSignificantDigits(): number;
    getMultiplier(): number;
    getNegativePrefix(): string;
    getNegativeSuffix(): string;
    getPadCharacter(): string;
    getPadPosition(): number;
    getParseMaxDigits(): number;
    getParser(): NumberParserImpl;
    getPositivePrefix(): string;
    getPositiveSuffix(): string;
    getRoundingIncrement(): BigDecimal;
    getRoundingMode(): number;
    getSecondaryGroupingSize(): number;
    hashCode(): number;
    isDecimalPatternMatchRequired(): boolean;
    isDecimalSeparatorAlwaysShown(): boolean;
    isExponentSignAlwaysShown(): boolean;
    isGroupingUsed(): boolean;
    isParseBigDecimal(): boolean;
    isParseCaseSensitive(): boolean;
    isParseIntegerOnly(): boolean;
    isParseNoExponent(): boolean;
    isParseStrict(): boolean;
    isScientificNotation(): boolean;
    isSignAlwaysShown(): boolean;
    parse(text: string): Number;
    parse(text: string, parsePosition: ParsePosition): Number;
    parseCurrency(text: CharSequence, parsePosition: ParsePosition): CurrencyAmount;
    // private readObject(ois: ObjectInputStream): void;
    refreshFormatter(): void;
    // private safeConvertBigDecimal(number: BigDecimal): Number;
    setCurrency(currency: Currency): void;
    setCurrencyPluralInfo(newInfo: CurrencyPluralInfo): void;
    setCurrencyUsage(usage: Currency$CurrencyUsage): void;
    setDecimalFormatSymbols(newSymbols: DecimalFormatSymbols): void;
    setDecimalPatternMatchRequired(value: boolean): void;
    setDecimalSeparatorAlwaysShown(value: boolean): void;
    setExponentSignAlwaysShown(expSignAlways: boolean): void;
    setFormatWidth(width: number): void;
    setGroupingSize(width: number): void;
    setGroupingUsed(enabled: boolean): void;
    setMathContext(mathContext: MathContext): void;
    setMathContextICU(mathContextICU: MathContext_2): void;
    setMaximumFractionDigits(value: number): void;
    setMaximumIntegerDigits(value: number): void;
    setMaximumSignificantDigits(value: number): void;
    setMinimumExponentDigits(minExpDig: number): void;
    setMinimumFractionDigits(value: number): void;
    setMinimumGroupingDigits(number: number): void;
    setMinimumIntegerDigits(value: number): void;
    setMinimumSignificantDigits(value: number): void;
    setMultiplier(multiplier: number): void;
    setNegativePrefix(prefix: string): void;
    setNegativeSuffix(suffix: string): void;
    setPadCharacter(padChar: string): void;
    setPadPosition(padPos: number): void;
    setParseBigDecimal(value: boolean): void;
    setParseCaseSensitive(value: boolean): void;
    setParseIntegerOnly(parseIntegerOnly: boolean): void;
    setParseMaxDigits(maxDigits: number): void;
    setParseNoExponent(value: boolean): void;
    setParseStrict(parseStrict: boolean): void;
    setParseStrictMode(parseMode: DecimalFormatProperties$ParseMode): void;
    setPositivePrefix(prefix: string): void;
    setPositiveSuffix(suffix: string): void;
    setProperties(func: DecimalFormat$PropertySetter): void;
    setPropertiesFromPattern(pattern: string, ignoreRounding: number): void;
    setRoundingIncrement(increment: BigDecimal): void;
    setRoundingIncrement(increment: number): void;
    setRoundingIncrement(increment: BigDecimal_2): void;
    setRoundingMode(roundingMode: number): void;
    setScientificNotation(useScientific: boolean): void;
    setSecondaryGroupingSize(width: number): void;
    setSignAlwaysShown(value: boolean): void;
    setSignificantDigitsUsed(useSignificantDigits: boolean): void;
    toLocalizedPattern(): string;
    toNumberFormatter(): LocalizedNumberFormatter;
    toPattern(): string;
    toString(): string;
    // private writeObject(oos: ObjectOutputStream): void;
}