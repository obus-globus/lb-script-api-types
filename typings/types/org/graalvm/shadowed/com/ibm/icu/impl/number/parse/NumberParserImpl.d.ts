import type { ParsePosition } from '../../../../../../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../../../java/lang/Number.d.ts'
import type { StringSegment } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StringSegment.d.ts'
import type { DecimalFormatProperties } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { NumberParseMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/NumberParseMatcher.d.ts'
import type { ParsedNumber } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { CurrencyAmount } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CurrencyAmount.d.ts'
import type { ULocale } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class NumberParserImpl extends Object {
    static createDefaultParserForLocale(paramloc: ULocale): NumberParserImpl;
    static createParserFromProperties(paramproperties: DecimalFormatProperties, paramsymbols: DecimalFormatSymbols, paramparseCurrency: boolean): NumberParserImpl;
    static createSimpleParser(paramlocale: ULocale, parampattern: string, paramparseFlags: number): NumberParserImpl;
    static parseStatic(paraminput: string, paramppos: ParsePosition, paramproperties: DecimalFormatProperties, paramsymbols: DecimalFormatSymbols): Number;
    static parseStaticCurrency(paraminput: string, paramppos: ParsePosition, paramproperties: DecimalFormatProperties, paramsymbols: DecimalFormatSymbols): CurrencyAmount;
    constructor(parseFlags: number)
    // private frozen: boolean;
    // private matchers: NumberParseMatcher[];
    readonly parseFlags: number;
    addMatcher(matcher: NumberParseMatcher): void;
    addMatchers(matchers: NumberParseMatcher[]): void;
    freeze(): void;
    getParseFlags(): number;
    parse(input: string, greedy: boolean, result: ParsedNumber): void;
    parse(input: string, start: number, greedy: boolean, result: ParsedNumber): void;
    // private parseGreedy(segment: StringSegment, result: ParsedNumber): void;
    // private parseLongestRecursive(segment: StringSegment, result: ParsedNumber, recursionLevels: number): void;
    toString(): string;
}