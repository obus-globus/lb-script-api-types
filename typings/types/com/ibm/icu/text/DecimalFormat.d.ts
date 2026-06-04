import type { DecimalFormatProperties } from '../../../../com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { DecimalFormatProperties$ParseMode } from '../../../../com/ibm/icu/impl/number/DecimalFormatProperties$ParseMode.d.ts'
import type { NumberParserImpl } from '../../../../com/ibm/icu/impl/number/parse/NumberParserImpl.d.ts'
import type { BigDecimal } from '../../../../com/ibm/icu/math/BigDecimal.d.ts'
import type { MathContext } from '../../../../com/ibm/icu/math/MathContext.d.ts'
import type { LocalizedNumberFormatter } from '../../../../com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { CurrencyPluralInfo } from '../../../../com/ibm/icu/text/CurrencyPluralInfo.d.ts'
import type { DecimalFormat$PropertySetter } from '../../../../com/ibm/icu/text/DecimalFormat$PropertySetter.d.ts'
import type { DecimalFormatSymbols } from '../../../../com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { NumberFormat } from '../../../../com/ibm/icu/text/NumberFormat.d.ts'
import type { NumberFormat$NumberFormatFactory } from '../../../../com/ibm/icu/text/NumberFormat$NumberFormatFactory.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { Currency } from '../../../../com/ibm/icu/util/Currency.d.ts'
import type { Currency$CurrencyUsage } from '../../../../com/ibm/icu/util/Currency$CurrencyUsage.d.ts'
import type { CurrencyAmount } from '../../../../com/ibm/icu/util/CurrencyAmount.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { BigDecimal as BigDecimal_2 } from '../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { MathContext as MathContext_2 } from '../../../../java/math/MathContext.d.ts'
import type { AttributedCharacterIterator } from '../../../../java/text/AttributedCharacterIterator.d.ts'
import type { FieldPosition } from '../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
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
    constructor(arg0: string)
    constructor(arg0: string, arg1: DecimalFormatSymbols)
    constructor(arg0: string, arg1: DecimalFormatSymbols, arg2: CurrencyPluralInfo, arg3: number)
    constructor(arg0: string, arg1: DecimalFormatSymbols, arg2: number)
    // private currencyParser: NumberParserImpl;
    // private exportedProperties: DecimalFormatProperties;
    // private formatter: LocalizedNumberFormatter;
    // private icuMathContextForm: number;
    // private parser: NumberParserImpl;
    properties: DecimalFormatProperties;
    // private serialVersionOnStream: number;
    // private symbols: DecimalFormatSymbols;
    applyLocalizedPattern(arg0: string): void;
    applyPattern(arg0: string): void;
    areSignificantDigitsUsed(): boolean;
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
    formatToCharacterIterator(arg0: Object): AttributedCharacterIterator;
    getCurrency(): Currency;
    getCurrencyParser(): NumberParserImpl;
    getCurrencyPluralInfo(): CurrencyPluralInfo;
    getCurrencyUsage(): Currency$CurrencyUsage;
    getDecimalFormatSymbols(): DecimalFormatSymbols;
    getFixedDecimal(arg0: number): PluralRules$IFixedDecimal;
    getFormatWidth(): number;
    getGroupingSize(): number;
    getMathContext(): MathContext_2;
    getMathContextICU(): MathContext;
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
    getRoundingIncrement(): BigDecimal_2;
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
    parse(arg0: string): Number;
    parse(arg0: string, arg1: ParsePosition): Number;
    parseCurrency(arg0: CharSequence, arg1: ParsePosition): CurrencyAmount;
    // private readObject(arg0: ObjectInputStream): void;
    refreshFormatter(): void;
    // private safeConvertBigDecimal(arg0: BigDecimal_2): Number;
    setCurrency(arg0: Currency): void;
    setCurrencyPluralInfo(arg0: CurrencyPluralInfo): void;
    setCurrencyUsage(arg0: Currency$CurrencyUsage): void;
    setDecimalFormatSymbols(arg0: DecimalFormatSymbols): void;
    setDecimalPatternMatchRequired(arg0: boolean): void;
    setDecimalSeparatorAlwaysShown(arg0: boolean): void;
    setExponentSignAlwaysShown(arg0: boolean): void;
    setFormatWidth(arg0: number): void;
    setGroupingSize(arg0: number): void;
    setGroupingUsed(arg0: boolean): void;
    setMathContext(arg0: MathContext_2): void;
    setMathContextICU(arg0: MathContext): void;
    setMaximumFractionDigits(arg0: number): void;
    setMaximumIntegerDigits(arg0: number): void;
    setMaximumSignificantDigits(arg0: number): void;
    setMinimumExponentDigits(arg0: number): void;
    setMinimumFractionDigits(arg0: number): void;
    setMinimumGroupingDigits(arg0: number): void;
    setMinimumIntegerDigits(arg0: number): void;
    setMinimumSignificantDigits(arg0: number): void;
    setMultiplier(arg0: number): void;
    setNegativePrefix(arg0: string): void;
    setNegativeSuffix(arg0: string): void;
    setPadCharacter(arg0: string): void;
    setPadPosition(arg0: number): void;
    setParseBigDecimal(arg0: boolean): void;
    setParseCaseSensitive(arg0: boolean): void;
    setParseIntegerOnly(arg0: boolean): void;
    setParseMaxDigits(arg0: number): void;
    setParseNoExponent(arg0: boolean): void;
    setParseStrict(arg0: boolean): void;
    setParseStrictMode(arg0: DecimalFormatProperties$ParseMode): void;
    setPositivePrefix(arg0: string): void;
    setPositiveSuffix(arg0: string): void;
    setProperties(arg0: DecimalFormat$PropertySetter): void;
    setPropertiesFromPattern(arg0: string, arg1: number): void;
    setRoundingIncrement(arg0: BigDecimal): void;
    setRoundingIncrement(arg0: BigDecimal_2): void;
    setRoundingIncrement(arg0: number): void;
    setRoundingMode(arg0: number): void;
    setScientificNotation(arg0: boolean): void;
    setSecondaryGroupingSize(arg0: number): void;
    setSignAlwaysShown(arg0: boolean): void;
    setSignificantDigitsUsed(arg0: boolean): void;
    toLocalizedPattern(): string;
    toNumberFormatter(): LocalizedNumberFormatter;
    toPattern(): string;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}