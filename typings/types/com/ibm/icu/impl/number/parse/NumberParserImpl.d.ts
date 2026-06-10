import type { StringSegment } from '../../../../../../com/ibm/icu/impl/StringSegment.d.ts'
import type { DecimalFormatProperties } from '../../../../../../com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { NumberParseMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/NumberParseMatcher.d.ts'
import type { ParsedNumber } from '../../../../../../com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { CurrencyAmount } from '../../../../../../com/ibm/icu/util/CurrencyAmount.d.ts'
import type { ULocale } from '../../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ParsePosition } from '../../../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class NumberParserImpl extends Object {
    static createDefaultParserForLocale(paramarg0: ULocale): NumberParserImpl;
    static createParserFromProperties(paramarg0: DecimalFormatProperties, paramarg1: DecimalFormatSymbols, paramarg2: boolean): NumberParserImpl;
    static createSimpleParser(paramarg0: ULocale, paramarg1: string, paramarg2: number): NumberParserImpl;
    static parseStatic(paramarg0: string, paramarg1: ParsePosition, paramarg2: DecimalFormatProperties, paramarg3: DecimalFormatSymbols): Number;
    static parseStaticCurrency(paramarg0: string, paramarg1: ParsePosition, paramarg2: DecimalFormatProperties, paramarg3: DecimalFormatSymbols): CurrencyAmount;
    constructor(arg0: number)
    // private frozen: boolean;
    // private matchers: NumberParseMatcher[];
    readonly parseFlags: number;
    addMatcher(arg0: NumberParseMatcher): void;
    addMatchers(arg0: NumberParseMatcher[]): void;
    freeze(): void;
    getParseFlags(): number;
    parse(arg0: string, arg1: boolean, arg2: ParsedNumber): void;
    parse(arg0: string, arg1: number, arg2: boolean, arg3: ParsedNumber): void;
    // private parseGreedy(arg0: StringSegment, arg1: ParsedNumber): void;
    // private parseLongestRecursive(arg0: StringSegment, arg1: ParsedNumber, arg2: number): void;
    toString(): string;
}