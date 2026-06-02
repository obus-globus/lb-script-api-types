import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { StringBuffer } from '../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { BigDecimal } from '../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../java/math/BigInteger.d.ts'
import type { RoundingMode } from '../../java/math/RoundingMode.d.ts'
import type { AttributedCharacterIterator } from '../../java/text/AttributedCharacterIterator.d.ts'
import type { DecimalFormat$FastPathData } from '../../java/text/DecimalFormat$FastPathData.d.ts'
import type { DecimalFormat$NumericPosition } from '../../java/text/DecimalFormat$NumericPosition.d.ts'
import type { DecimalFormatSymbols } from '../../java/text/DecimalFormatSymbols.d.ts'
import type { DigitList } from '../../java/text/DigitList.d.ts'
import type { FieldPosition } from '../../java/text/FieldPosition.d.ts'
import type { Format$Field } from '../../java/text/Format$Field.d.ts'
import type { Format$FieldDelegate } from '../../java/text/Format$FieldDelegate.d.ts'
import type { Format$StringBuf } from '../../java/text/Format$StringBuf.d.ts'
import type { NumberFormat } from '../../java/text/NumberFormat.d.ts'
import type { NumberFormat$Style } from '../../java/text/NumberFormat$Style.d.ts'
import type { ParsePosition } from '../../java/text/ParsePosition.d.ts'
import type { Currency } from '../../java/util/Currency.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Number } from '../../java/lang/Number.d.ts'
export class DecimalFormat extends NumberFormat {
    static FRACTION_FIELD: number;
    static INTEGER_FIELD: number;
    static getAvailableLocales(): (Object | null)[];
    static getCompactNumberInstance(): NumberFormat;
    static getCompactNumberInstance(paramarg0: Locale, paramarg1: NumberFormat$Style): NumberFormat;
    static getCurrencyInstance(): NumberFormat;
    static getCurrencyInstance(paramarg0: Locale): NumberFormat;
    static getInstance(): NumberFormat;
    static getInstance(paramarg0: Locale): NumberFormat;
    static getIntegerInstance(): NumberFormat;
    static getIntegerInstance(paramarg0: Locale): NumberFormat;
    static getNumberInstance(): NumberFormat;
    static getNumberInstance(paramarg0: Locale): NumberFormat;
    static getPercentInstance(): NumberFormat;
    static getPercentInstance(paramarg0: Locale): NumberFormat;
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: DecimalFormatSymbols)
    // private bigDecimalMultiplier: BigDecimal;
    // private bigIntegerMultiplier: BigInteger;
    readonly decimalSeparatorAlwaysShown: boolean;
    // private digitList: DigitList;
    // private fastPathCheckNeeded: boolean;
    // private fastPathData: DecimalFormat$FastPathData;
    readonly groupingSize: number;
    // private isCurrencyFormat: boolean;
    // private isFastPath: boolean;
    readonly maximumFractionDigits: number;
    readonly maximumIntegerDigits: number;
    // private minExponentDigits: number;
    readonly minimumFractionDigits: number;
    readonly minimumIntegerDigits: number;
    readonly multiplier: number;
    // private negPrefixPattern: string;
    // private negSuffixPattern: string;
    readonly negativePrefix: string;
    // private negativePrefixFieldPositions: FieldPosition[];
    readonly negativeSuffix: string;
    // private negativeSuffixFieldPositions: FieldPosition[];
    readonly parseBigDecimal: boolean;
    // private parseStrict: boolean;
    // private posPrefixPattern: string;
    // private posSuffixPattern: string;
    readonly positivePrefix: string;
    // private positivePrefixFieldPositions: FieldPosition[];
    readonly positiveSuffix: string;
    // private positiveSuffixFieldPositions: FieldPosition[];
    readonly roundingMode: RoundingMode;
    // private serialVersionOnStream: number;
    // private symbols: DecimalFormatSymbols;
    // private useExponentialNotation: boolean;
    // private addAffixes(arg0: string[], arg1: string[], arg2: string[]): void;
    // private append(arg0: Format$StringBuf, arg1: string, arg2: Format$FieldDelegate, arg3: FieldPosition[], arg4: Format$Field): void;
    // private appendAffix(arg0: StringBuilder, arg1: string, arg2: boolean): void;
    // private appendAffix(arg0: StringBuilder, arg1: string, arg2: string, arg3: boolean): void;
    // private appendSuffix(arg0: string[], arg1: number, arg2: string[]): void;
    applyLocalizedPattern(arg0: string): void;
    applyPattern(arg0: string): void;
    // private applyPattern(arg0: string, arg1: boolean): void;
    // private checkAndSetFastPathStatus(): boolean;
    clone(): Object;
    // private collectFractionalDigits(arg0: number, arg1: string[], arg2: number): void;
    // private collectIntegralDigits(arg0: number, arg1: string[], arg2: number): void;
    doubleSubformat(arg0: number, arg1: Format$StringBuf, arg2: Format$FieldDelegate, arg3: boolean): Format$StringBuf;
    equals(arg0: Object | null): boolean;
    // private exactRoundUp(arg0: number, arg1: number): boolean;
    // private expandAffix(arg0: string): FieldPosition[];
    // private expandAffix(arg0: string, arg1: StringBuilder): string;
    // private expandAffixes(): void;
    // private fastDoubleFormat(arg0: number, arg1: boolean): void;
    fastFormat(arg0: number): string;
    // private format(arg0: BigDecimal, arg1: Format$StringBuf, arg2: FieldPosition): Format$StringBuf;
    format(arg0: BigDecimal, arg1: Format$StringBuf, arg2: Format$FieldDelegate): Format$StringBuf;
    // private format(arg0: BigInteger, arg1: Format$StringBuf, arg2: FieldPosition): Format$StringBuf;
    format(arg0: BigInteger, arg1: Format$StringBuf, arg2: Format$FieldDelegate, arg3: boolean): Format$StringBuf;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: Object, arg1: Format$StringBuf, arg2: FieldPosition): Format$StringBuf;
    format(arg0: number, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: number, arg1: Format$StringBuf, arg2: FieldPosition): Format$StringBuf;
    format(arg0: number, arg1: Format$StringBuf, arg2: Format$FieldDelegate): Format$StringBuf;
    format(arg0: number, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: number, arg1: Format$StringBuf, arg2: FieldPosition): Format$StringBuf;
    format(arg0: number, arg1: Format$StringBuf, arg2: Format$FieldDelegate): Format$StringBuf;
    formatToCharacterIterator(arg0: Object): AttributedCharacterIterator;
    // private getBigDecimalMultiplier(): BigDecimal;
    // private getBigIntegerMultiplier(): BigInteger;
    getCurrency(): Currency;
    getDecimalFormatSymbols(): DecimalFormatSymbols;
    getDigitList(): DigitList;
    getGroupingSize(): number;
    getMaximumFractionDigits(): number;
    getMaximumIntegerDigits(): number;
    getMinimumFractionDigits(): number;
    getMinimumIntegerDigits(): number;
    getMultiplier(): number;
    getNegativePrefix(): string;
    // private getNegativePrefixFieldPositions(): FieldPosition[];
    getNegativeSuffix(): string;
    // private getNegativeSuffixFieldPositions(): FieldPosition[];
    getPositivePrefix(): string;
    // private getPositivePrefixFieldPositions(): FieldPosition[];
    getPositiveSuffix(): string;
    // private getPositiveSuffixFieldPositions(): FieldPosition[];
    getRoundingMode(): RoundingMode;
    // private groupingViolationIndex(arg0: number, arg1: number): number;
    handleInfinity(arg0: number, arg1: Format$StringBuf, arg2: Format$FieldDelegate, arg3: boolean): boolean;
    handleNaN(arg0: number, arg1: Format$StringBuf, arg2: Format$FieldDelegate): boolean;
    hashCode(): number;
    isDecimalSeparatorAlwaysShown(): boolean;
    // private isGroupingViolation(arg0: number, arg1: number): boolean;
    isParseBigDecimal(): boolean;
    isStrict(): boolean;
    // private localizeDigits(arg0: string[]): void;
    parse(arg0: string, arg1: ParsePosition): Number;
    // private posEqualsNegPattern(): boolean;
    // private prependPrefix(arg0: string[], arg1: number, arg2: string[]): void;
    // private readObject(arg0: ObjectInputStream): void;
    // private resetFastPathData(arg0: boolean): void;
    setCurrency(arg0: Currency): void;
    setDecimalFormatSymbols(arg0: DecimalFormatSymbols): void;
    setDecimalSeparatorAlwaysShown(arg0: boolean): void;
    setDigitList(arg0: Number, arg1: boolean, arg2: number): void;
    setGroupingSize(arg0: number): void;
    setGroupingUsed(arg0: boolean): void;
    setMaximumFractionDigits(arg0: number): void;
    setMaximumIntegerDigits(arg0: number): void;
    setMinimumFractionDigits(arg0: number): void;
    setMinimumIntegerDigits(arg0: number): void;
    setMultiplier(arg0: number): void;
    setNegativePrefix(arg0: string): void;
    setNegativeSuffix(arg0: string): void;
    setParseBigDecimal(arg0: boolean): void;
    setPositivePrefix(arg0: string): void;
    setPositiveSuffix(arg0: string): void;
    setRoundingMode(arg0: RoundingMode): void;
    setStrict(arg0: boolean): void;
    // private shiftDecimalAt(arg0: number, arg1: number): number;
    // private subformat(arg0: Format$StringBuf, arg1: Format$FieldDelegate, arg2: boolean, arg3: boolean, arg4: number, arg5: number, arg6: number, arg7: number): Format$StringBuf;
    subformatNumber(arg0: Format$StringBuf, arg1: Format$FieldDelegate, arg2: boolean, arg3: boolean, arg4: number, arg5: number, arg6: number, arg7: number): void;
    // private subparse(arg0: string, arg1: ParsePosition, arg2: string, arg3: string, arg4: DigitList, arg5: boolean, arg6: (Object | null)[]): boolean;
    subparseNumber(arg0: string, arg1: number, arg2: DigitList, arg3: boolean, arg4: boolean, arg5: (Object | null)[]): DecimalFormat$NumericPosition;
    toLocalizedPattern(): string;
    toPattern(): string;
    // private toPattern(arg0: boolean): string;
    toString(): string;
}