import type { ObjectInputStream } from '../../../../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { BigDecimal } from '../../../../../../../../java/math/BigDecimal.d.ts'
import type { MathContext } from '../../../../../../../../java/math/MathContext.d.ts'
import type { RoundingMode } from '../../../../../../../../java/math/RoundingMode.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../../java/lang/Cloneable.d.ts'
import type { DecimalFormatProperties$ParseMode } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalFormatProperties$ParseMode.d.ts'
import type { Padder$PadPosition } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Padder$PadPosition.d.ts'
import type { CompactDecimalFormat$CompactStyle } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CompactDecimalFormat$CompactStyle.d.ts'
import type { CurrencyPluralInfo } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CurrencyPluralInfo.d.ts'
import type { PluralRules } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
import type { Currency } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency.d.ts'
import type { Currency$CurrencyUsage } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency$CurrencyUsage.d.ts'
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
    // private _copyFrom(other: DecimalFormatProperties): DecimalFormatProperties;
    // private _equals(other: DecimalFormatProperties): boolean;
    // private _equalsHelper(mine: Object, theirs: Object): boolean;
    // private _equalsHelper(mine: boolean, theirs: boolean): boolean;
    // private _equalsHelper(mine: number, theirs: number): boolean;
    // private _hashCode(): number;
    // private _hashCodeHelper(value: Object): number;
    // private _hashCodeHelper(value: boolean): number;
    // private _hashCodeHelper(value: number): number;
    clear(): DecimalFormatProperties;
    clone(): DecimalFormatProperties;
    copyFrom(other: DecimalFormatProperties): DecimalFormatProperties;
    equals(other: Object | null): boolean;
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
    // private readObject(ois: ObjectInputStream): void;
    readObjectImpl(ois: ObjectInputStream): void;
    setCompactCustomData(compactCustomData: { [key: string]: { [key: string]: string } }): DecimalFormatProperties;
    setCompactStyle(compactStyle: CompactDecimalFormat$CompactStyle): DecimalFormatProperties;
    setCurrency(currency: Currency): DecimalFormatProperties;
    setCurrencyAsDecimal(currencyAsDecimal: boolean): DecimalFormatProperties;
    setCurrencyPluralInfo(currencyPluralInfo: CurrencyPluralInfo): DecimalFormatProperties;
    setCurrencyUsage(currencyUsage: Currency$CurrencyUsage): DecimalFormatProperties;
    setDecimalPatternMatchRequired(decimalPatternMatchRequired: boolean): DecimalFormatProperties;
    setDecimalSeparatorAlwaysShown(alwaysShowDecimal: boolean): DecimalFormatProperties;
    setExponentSignAlwaysShown(exponentSignAlwaysShown: boolean): DecimalFormatProperties;
    setFormatWidth(paddingWidth: number): DecimalFormatProperties;
    setGroupingSize(groupingSize: number): DecimalFormatProperties;
    setGroupingUsed(groupingUsed: boolean): DecimalFormatProperties;
    setMagnitudeMultiplier(magnitudeMultiplier: number): DecimalFormatProperties;
    setMathContext(mathContext: MathContext): DecimalFormatProperties;
    setMaximumFractionDigits(maximumFractionDigits: number): DecimalFormatProperties;
    setMaximumIntegerDigits(maximumIntegerDigits: number): DecimalFormatProperties;
    setMaximumSignificantDigits(maximumSignificantDigits: number): DecimalFormatProperties;
    setMinimumExponentDigits(minimumExponentDigits: number): DecimalFormatProperties;
    setMinimumFractionDigits(minimumFractionDigits: number): DecimalFormatProperties;
    setMinimumGroupingDigits(minimumGroupingDigits: number): DecimalFormatProperties;
    setMinimumIntegerDigits(minimumIntegerDigits: number): DecimalFormatProperties;
    setMinimumSignificantDigits(minimumSignificantDigits: number): DecimalFormatProperties;
    setMultiplier(multiplier: BigDecimal): DecimalFormatProperties;
    setNegativePrefix(negativePrefix: string): DecimalFormatProperties;
    setNegativePrefixPattern(negativePrefixPattern: string): DecimalFormatProperties;
    setNegativeSuffix(negativeSuffix: string): DecimalFormatProperties;
    setNegativeSuffixPattern(negativeSuffixPattern: string): DecimalFormatProperties;
    setPadPosition(paddingLocation: Padder$PadPosition): DecimalFormatProperties;
    setPadString(paddingString: string): DecimalFormatProperties;
    setParseCaseSensitive(parseCaseSensitive: boolean): DecimalFormatProperties;
    setParseIntegerOnly(parseIntegerOnly: boolean): DecimalFormatProperties;
    setParseMode(parseMode: DecimalFormatProperties$ParseMode): DecimalFormatProperties;
    setParseNoExponent(parseNoExponent: boolean): DecimalFormatProperties;
    setParseToBigDecimal(parseToBigDecimal: boolean): DecimalFormatProperties;
    setPluralRules(pluralRules: PluralRules): DecimalFormatProperties;
    setPositivePrefix(positivePrefix: string): DecimalFormatProperties;
    setPositivePrefixPattern(positivePrefixPattern: string): DecimalFormatProperties;
    setPositiveSuffix(positiveSuffix: string): DecimalFormatProperties;
    setPositiveSuffixPattern(positiveSuffixPattern: string): DecimalFormatProperties;
    setRoundingIncrement(roundingIncrement: BigDecimal): DecimalFormatProperties;
    setRoundingMode(roundingMode: RoundingMode): DecimalFormatProperties;
    setSecondaryGroupingSize(secondaryGroupingSize: number): DecimalFormatProperties;
    setSignAlwaysShown(signAlwaysShown: boolean): DecimalFormatProperties;
    toString(): string;
    toStringBare(result: StringBuilder): void;
    // private writeObject(oos: ObjectOutputStream): void;
    writeObjectImpl(oos: ObjectOutputStream): void;
}