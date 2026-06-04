import type { BigDecimal } from '../../../../com/ibm/icu/math/BigDecimal.d.ts'
import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { DecimalFormat } from '../../../../com/ibm/icu/text/DecimalFormat.d.ts'
import type { DecimalFormatSymbols } from '../../../../com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { DisplayContext } from '../../../../com/ibm/icu/text/DisplayContext.d.ts'
import type { NFRule } from '../../../../com/ibm/icu/text/NFRule.d.ts'
import type { NFRuleSet } from '../../../../com/ibm/icu/text/NFRuleSet.d.ts'
import type { NumberFormat } from '../../../../com/ibm/icu/text/NumberFormat.d.ts'
import type { NumberFormat$NumberFormatFactory } from '../../../../com/ibm/icu/text/NumberFormat$NumberFormatFactory.d.ts'
import type { PluralFormat } from '../../../../com/ibm/icu/text/PluralFormat.d.ts'
import type { PluralRules$PluralType } from '../../../../com/ibm/icu/text/PluralRules$PluralType.d.ts'
import type { RBNFPostProcessor } from '../../../../com/ibm/icu/text/RBNFPostProcessor.d.ts'
import type { RbnfLenientScanner } from '../../../../com/ibm/icu/text/RbnfLenientScanner.d.ts'
import type { RbnfLenientScannerProvider } from '../../../../com/ibm/icu/text/RbnfLenientScannerProvider.d.ts'
import type { CurrencyAmount } from '../../../../com/ibm/icu/util/CurrencyAmount.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { BigDecimal as BigDecimal_2 } from '../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { FieldPosition } from '../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class RuleBasedNumberFormat extends NumberFormat {
    static ACCOUNTINGCURRENCYSTYLE: number;
    static CASHCURRENCYSTYLE: number;
    static CURRENCYSTYLE: number;
    static DURATION: number;
    static FRACTION_FIELD: number;
    static INTEGERSTYLE: number;
    static INTEGER_FIELD: number;
    static ISOCURRENCYSTYLE: number;
    static NUMBERING_SYSTEM: number;
    static NUMBERSTYLE: number;
    static ORDINAL: number;
    static PERCENTSTYLE: number;
    static PLURALCURRENCYSTYLE: number;
    static SCIENTIFICSTYLE: number;
    static SPELLOUT: number;
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
    constructor(arg0: ULocale, arg1: number)
    constructor(arg0: Locale, arg1: number)
    constructor(arg0: number)
    constructor(arg0: string)
    constructor(arg0: string, arg1: ULocale)
    constructor(arg0: string, arg1: Locale)
    constructor(arg0: string, arg1: string[][])
    constructor(arg0: string, arg1: string[][], arg2: ULocale)
    // private capitalizationBrkIter: BreakIterator;
    // private capitalizationForListOrMenu: boolean;
    // private capitalizationForStandAlone: boolean;
    // private capitalizationInfoIsSet: boolean;
    // private decimalFormat: DecimalFormat;
    readonly decimalFormatSymbols: DecimalFormatSymbols;
    // private defaultInfinityRule: NFRule;
    // private defaultNaNRule: NFRule;
    readonly defaultRuleSet: NFRuleSet;
    // private lenientParse: boolean;
    // private lenientParseRules: string;
    // private locale: ULocale;
    // private lookedForScanner: boolean;
    // private postProcessRules: string;
    // private postProcessor: RBNFPostProcessor;
    // private publicRuleSetNames: string[];
    readonly roundingMode: number;
    readonly ruleSetDisplayNames: { [key: string]: string[] };
    // private ruleSets: NFRuleSet[];
    // private ruleSetsMap: { [key: string]: NFRuleSet };
    // private scannerProvider: RbnfLenientScannerProvider;
    // private adjustForContext(arg0: string): string;
    clone(): Object;
    createPluralFormat(arg0: PluralRules$PluralType, arg1: string): PluralFormat;
    equals(arg0: Object | null): boolean;
    findRuleSet(arg0: string): NFRuleSet;
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
    // private format(arg0: number, arg1: NFRuleSet): string;
    format(arg0: number, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: number, arg1: string): string;
    getDecimalFormat(): DecimalFormat;
    getDecimalFormatSymbols(): DecimalFormatSymbols;
    getDefaultInfinityRule(): NFRule;
    getDefaultNaNRule(): NFRule;
    getDefaultRuleSet(): NFRuleSet;
    getDefaultRuleSetName(): string;
    getLenientScanner(): RbnfLenientScanner;
    getLenientScannerProvider(): RbnfLenientScannerProvider;
    // private getNameListForLocale(arg0: ULocale): string[];
    getRoundingMode(): number;
    getRuleSetDisplayName(arg0: string): string;
    getRuleSetDisplayName(arg0: string, arg1: ULocale): string;
    getRuleSetDisplayNameLocales(): ULocale[];
    getRuleSetDisplayNames(): string[];
    getRuleSetDisplayNames(arg0: ULocale): string[];
    getRuleSetNames(): string[];
    hashCode(): number;
    // private init(arg0: string, arg1: string[][]): void;
    // private initCapitalizationContextInfo(arg0: ULocale): void;
    // private initLocalizations(arg0: string[][]): void;
    lenientParseEnabled(): boolean;
    parse(arg0: string): Number;
    parse(arg0: string, arg1: ParsePosition): Number;
    // private postProcess(arg0: StringBuilder, arg1: NFRuleSet): void;
    // private readObject(arg0: ObjectInputStream): void;
    setContext(arg0: DisplayContext): void;
    setDecimalFormatSymbols(arg0: DecimalFormatSymbols): void;
    setDefaultRuleSet(arg0: string): void;
    setLenientParseMode(arg0: boolean): void;
    setLenientScannerProvider(arg0: RbnfLenientScannerProvider): void;
    setRoundingMode(arg0: number): void;
    // private stripWhitespace(arg0: string): StringBuilder;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}