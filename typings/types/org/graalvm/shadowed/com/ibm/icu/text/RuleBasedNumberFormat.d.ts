import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../../../java/io/ObjectOutputStream.d.ts'
import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { BigDecimal } from '../../../../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../../../../java/math/BigInteger.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { BigDecimal as BigDecimal_2 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/math/BigDecimal.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
import type { DecimalFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormat.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { DisplayContext } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayContext.d.ts'
import type { NFRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NFRule.d.ts'
import type { NFRuleSet } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NFRuleSet.d.ts'
import type { NumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat.d.ts'
import type { NumberFormat$NumberFormatFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat$NumberFormatFactory.d.ts'
import type { PluralFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralFormat.d.ts'
import type { PluralRules$PluralType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$PluralType.d.ts'
import type { RBNFPostProcessor } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBNFPostProcessor.d.ts'
import type { RbnfLenientScanner } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RbnfLenientScanner.d.ts'
import type { RbnfLenientScannerProvider } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RbnfLenientScannerProvider.d.ts'
import type { CurrencyAmount } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CurrencyAmount.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
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
    constructor(locale: Locale, format: number)
    constructor(format: number)
    constructor(description: string)
    constructor(description: string, locale: Locale)
    constructor(description: string, localizations: string[][])
    constructor(description: string, localizations: string[][], locale: ULocale)
    constructor(description: string, locale: ULocale)
    constructor(locale: ULocale, format: number)
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
    // private adjustForContext(result: string): string;
    clone(): Object;
    createPluralFormat(pluralType: PluralRules$PluralType, pattern: string): PluralFormat;
    equals(that: Object | null): boolean;
    // private extractSpecial(description: StringBuilder, specialName: string): string;
    findRuleSet(name: string): NFRuleSet;
    format(number: BigDecimal): string;
    format(number: BigDecimal, toAppendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    format(number: BigInteger): string;
    format(number: BigInteger, toAppendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    format(arg0: Object): string;
    format(number: Object, toAppendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    format(number: number): string;
    format(number: number, toAppendTo: StringBuffer, ignore: FieldPosition): StringBuffer;
    format(number: number, ruleSet: string): string;
    // private format(number: number, ruleSet: NFRuleSet): string;
    format(number: BigDecimal_2): string;
    format(number: BigDecimal_2, toAppendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    format(currAmt: CurrencyAmount): string;
    format(currAmt: CurrencyAmount, toAppendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    getDecimalFormat(): DecimalFormat;
    getDecimalFormatSymbols(): DecimalFormatSymbols;
    getDefaultInfinityRule(): NFRule;
    getDefaultNaNRule(): NFRule;
    getDefaultRuleSet(): NFRuleSet;
    getDefaultRuleSetName(): string;
    getLenientScanner(): RbnfLenientScanner;
    getLenientScannerProvider(): RbnfLenientScannerProvider;
    // private getNameListForLocale(loc: ULocale): string[];
    getRoundingMode(): number;
    getRuleSetDisplayName(ruleSetName: string): string;
    getRuleSetDisplayName(ruleSetName: string, loc: ULocale): string;
    getRuleSetDisplayNameLocales(): ULocale[];
    getRuleSetDisplayNames(): string[];
    getRuleSetDisplayNames(loc: ULocale): string[];
    getRuleSetNames(): string[];
    hashCode(): number;
    // private init(description: string, localizations: string[][]): void;
    // private initCapitalizationContextInfo(theLocale: ULocale): void;
    // private initLocalizations(localizations: string[][]): void;
    lenientParseEnabled(): boolean;
    parse(text: string): Number;
    parse(text: string, parsePosition: ParsePosition): Number;
    // private postProcess(result: StringBuilder, ruleSet: NFRuleSet): void;
    // private readObject(in_: ObjectInputStream): void;
    setContext(context: DisplayContext): void;
    setDecimalFormatSymbols(newSymbols: DecimalFormatSymbols): void;
    setDefaultRuleSet(ruleSetName: string): void;
    setLenientParseMode(enabled: boolean): void;
    setLenientScannerProvider(scannerProvider: RbnfLenientScannerProvider): void;
    setRoundingMode(roundingMode: number): void;
    // private stripWhitespace(description: string): StringBuilder;
    toString(): string;
    // private writeObject(out: ObjectOutputStream): void;
}