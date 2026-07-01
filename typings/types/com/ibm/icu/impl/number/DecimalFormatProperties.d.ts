import type { DecimalFormatProperties$ParseMode } from '../../../../../com/ibm/icu/impl/number/DecimalFormatProperties$ParseMode.d.ts'
import type { Padder$PadPosition } from '../../../../../com/ibm/icu/impl/number/Padder$PadPosition.d.ts'
import type { CompactDecimalFormat$CompactStyle } from '../../../../../com/ibm/icu/text/CompactDecimalFormat$CompactStyle.d.ts'
import type { CurrencyPluralInfo } from '../../../../../com/ibm/icu/text/CurrencyPluralInfo.d.ts'
import type { PluralRules } from '../../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { Currency } from '../../../../../com/ibm/icu/util/Currency.d.ts'
import type { Currency$CurrencyUsage } from '../../../../../com/ibm/icu/util/Currency$CurrencyUsage.d.ts'
import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { BigDecimal } from '../../../../../java/math/BigDecimal.d.ts'
import type { MathContext } from '../../../../../java/math/MathContext.d.ts'
import type { RoundingMode } from '../../../../../java/math/RoundingMode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class DecimalFormatProperties extends Object implements Serializable, Cloneable {
    constructor()
    readonly compactCustomData: { [key: string]: { [key: string]: string } };
    readonly compactStyle: CompactDecimalFormat$CompactStyle;
    readonly currency: Currency;
    readonly currencyAsDecimal: boolean;
    readonly currencyPluralInfo: CurrencyPluralInfo;
    readonly currencyUsage: Currency$CurrencyUsage;
    readonly decimalPatternMatchRequired: boolean;
    readonly decimalSeparatorAlwaysShown: boolean;
    readonly exponentSignAlwaysShown: boolean;
    readonly formatWidth: number;
    readonly groupingSize: number;
    readonly groupingUsed: boolean;
    readonly magnitudeMultiplier: number;
    readonly mathContext: MathContext;
    readonly maximumFractionDigits: number;
    readonly maximumIntegerDigits: number;
    readonly maximumSignificantDigits: number;
    readonly minimumExponentDigits: number;
    readonly minimumFractionDigits: number;
    readonly minimumGroupingDigits: number;
    readonly minimumIntegerDigits: number;
    readonly minimumSignificantDigits: number;
    readonly multiplier: BigDecimal;
    readonly negativePrefix: string;
    readonly negativePrefixPattern: string;
    readonly negativeSuffix: string;
    readonly negativeSuffixPattern: string;
    readonly padPosition: Padder$PadPosition;
    readonly padString: string;
    readonly parseCaseSensitive: boolean;
    readonly parseIntegerOnly: boolean;
    readonly parseMode: DecimalFormatProperties$ParseMode;
    readonly parseNoExponent: boolean;
    readonly parseToBigDecimal: boolean;
    readonly pluralRules: PluralRules;
    readonly positivePrefix: string;
    readonly positivePrefixPattern: string;
    readonly positiveSuffix: string;
    readonly positiveSuffixPattern: string;
    readonly roundingIncrement: BigDecimal;
    readonly roundingMode: RoundingMode;
    readonly secondaryGroupingSize: number;
    readonly signAlwaysShown: boolean;
    // private _clear(): DecimalFormatProperties;
    // private _copyFrom(arg0: DecimalFormatProperties): DecimalFormatProperties;
    // private _equals(arg0: DecimalFormatProperties): boolean;
    // private _equalsHelper(arg0: Object, arg1: Object): boolean;
    // private _equalsHelper(arg0: boolean, arg1: boolean): boolean;
    // private _equalsHelper(arg0: number, arg1: number): boolean;
    // private _hashCode(): number;
    // private _hashCodeHelper(arg0: Object): number;
    // private _hashCodeHelper(arg0: boolean): number;
    // private _hashCodeHelper(arg0: number): number;
    clear(): DecimalFormatProperties;
    clone(): DecimalFormatProperties;
    copyFrom(arg0: DecimalFormatProperties): DecimalFormatProperties;
    equals(arg0: Object | null): boolean;
    getCompactCustomData(): { [key: string]: { [key: string]: string } };
    getCompactStyle(): CompactDecimalFormat$CompactStyle;
    getCurrency(): Currency;
    getCurrencyAsDecimal(): boolean;
    getCurrencyPluralInfo(): CurrencyPluralInfo;
    getCurrencyUsage(): Currency$CurrencyUsage;
    getDecimalPatternMatchRequired(): boolean;
    getDecimalSeparatorAlwaysShown(): boolean;
    getExponentSignAlwaysShown(): boolean;
    getFormatWidth(): number;
    getGroupingSize(): number;
    getGroupingUsed(): boolean;
    getMagnitudeMultiplier(): number;
    getMathContext(): MathContext;
    getMaximumFractionDigits(): number;
    getMaximumIntegerDigits(): number;
    getMaximumSignificantDigits(): number;
    getMinimumExponentDigits(): number;
    getMinimumFractionDigits(): number;
    getMinimumGroupingDigits(): number;
    getMinimumIntegerDigits(): number;
    getMinimumSignificantDigits(): number;
    getMultiplier(): BigDecimal;
    getNegativePrefix(): string;
    getNegativePrefixPattern(): string;
    getNegativeSuffix(): string;
    getNegativeSuffixPattern(): string;
    getPadPosition(): Padder$PadPosition;
    getPadString(): string;
    getParseCaseSensitive(): boolean;
    getParseIntegerOnly(): boolean;
    getParseMode(): DecimalFormatProperties$ParseMode;
    getParseNoExponent(): boolean;
    getParseToBigDecimal(): boolean;
    getPluralRules(): PluralRules;
    getPositivePrefix(): string;
    getPositivePrefixPattern(): string;
    getPositiveSuffix(): string;
    getPositiveSuffixPattern(): string;
    getRoundingIncrement(): BigDecimal;
    getRoundingMode(): RoundingMode;
    getSecondaryGroupingSize(): number;
    getSignAlwaysShown(): boolean;
    hashCode(): number;
    // private readObject(arg0: ObjectInputStream): void;
    readObjectImpl(arg0: ObjectInputStream): void;
    setCompactCustomData(arg0: { [key: string]: { [key: string]: string } }): DecimalFormatProperties;
    setCompactStyle(arg0: CompactDecimalFormat$CompactStyle): DecimalFormatProperties;
    setCurrency(arg0: Currency): DecimalFormatProperties;
    setCurrencyAsDecimal(arg0: boolean): DecimalFormatProperties;
    setCurrencyPluralInfo(arg0: CurrencyPluralInfo): DecimalFormatProperties;
    setCurrencyUsage(arg0: Currency$CurrencyUsage): DecimalFormatProperties;
    setDecimalPatternMatchRequired(arg0: boolean): DecimalFormatProperties;
    setDecimalSeparatorAlwaysShown(arg0: boolean): DecimalFormatProperties;
    setExponentSignAlwaysShown(arg0: boolean): DecimalFormatProperties;
    setFormatWidth(arg0: number): DecimalFormatProperties;
    setGroupingSize(arg0: number): DecimalFormatProperties;
    setGroupingUsed(arg0: boolean): DecimalFormatProperties;
    setMagnitudeMultiplier(arg0: number): DecimalFormatProperties;
    setMathContext(arg0: MathContext): DecimalFormatProperties;
    setMaximumFractionDigits(arg0: number): DecimalFormatProperties;
    setMaximumIntegerDigits(arg0: number): DecimalFormatProperties;
    setMaximumSignificantDigits(arg0: number): DecimalFormatProperties;
    setMinimumExponentDigits(arg0: number): DecimalFormatProperties;
    setMinimumFractionDigits(arg0: number): DecimalFormatProperties;
    setMinimumGroupingDigits(arg0: number): DecimalFormatProperties;
    setMinimumIntegerDigits(arg0: number): DecimalFormatProperties;
    setMinimumSignificantDigits(arg0: number): DecimalFormatProperties;
    setMultiplier(arg0: BigDecimal): DecimalFormatProperties;
    setNegativePrefix(arg0: string): DecimalFormatProperties;
    setNegativePrefixPattern(arg0: string): DecimalFormatProperties;
    setNegativeSuffix(arg0: string): DecimalFormatProperties;
    setNegativeSuffixPattern(arg0: string): DecimalFormatProperties;
    setPadPosition(arg0: Padder$PadPosition): DecimalFormatProperties;
    setPadString(arg0: string): DecimalFormatProperties;
    setParseCaseSensitive(arg0: boolean): DecimalFormatProperties;
    setParseIntegerOnly(arg0: boolean): DecimalFormatProperties;
    setParseMode(arg0: DecimalFormatProperties$ParseMode): DecimalFormatProperties;
    setParseNoExponent(arg0: boolean): DecimalFormatProperties;
    setParseToBigDecimal(arg0: boolean): DecimalFormatProperties;
    setPluralRules(arg0: PluralRules): DecimalFormatProperties;
    setPositivePrefix(arg0: string): DecimalFormatProperties;
    setPositivePrefixPattern(arg0: string): DecimalFormatProperties;
    setPositiveSuffix(arg0: string): DecimalFormatProperties;
    setPositiveSuffixPattern(arg0: string): DecimalFormatProperties;
    setRoundingIncrement(arg0: BigDecimal): DecimalFormatProperties;
    setRoundingMode(arg0: RoundingMode): DecimalFormatProperties;
    setSecondaryGroupingSize(arg0: number): DecimalFormatProperties;
    setSignAlwaysShown(arg0: boolean): DecimalFormatProperties;
    toString(): string;
    toStringBare(arg0: StringBuilder): void;
    // private writeObject(arg0: ObjectOutputStream): void;
    writeObjectImpl(arg0: ObjectOutputStream): void;
}