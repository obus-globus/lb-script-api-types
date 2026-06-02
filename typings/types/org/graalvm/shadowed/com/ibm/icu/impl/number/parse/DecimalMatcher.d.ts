import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { StringSegment } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StringSegment.d.ts'
import type { Grouper } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Grouper.d.ts'
import type { NumberParseMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/NumberParseMatcher.d.ts'
import type { ParsedNumber } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
export class DecimalMatcher extends Object implements NumberParseMatcher {
    static getInstance(paramsymbols: DecimalFormatSymbols, paramgrouper: Grouper, paramparseFlags: number): DecimalMatcher;
    private constructor(symbols: DecimalFormatSymbols, grouper: Grouper, parseFlags: number)
    // private decimalSeparator: string;
    // private decimalUniSet: string[];
    // private digitStrings: string[];
    // private grouping1: number;
    // private grouping2: number;
    // private groupingDisabled: boolean;
    // private groupingSeparator: string;
    // private groupingUniSet: string[];
    // private integerOnly: boolean;
    // private leadSet: string[];
    // private requireGroupingMatch: boolean;
    // private separatorSet: string[];
    match(segment: StringSegment, result: ParsedNumber): boolean;
    match(segment: StringSegment, result: ParsedNumber, exponentSign: number): boolean;
    postProcess(result: ParsedNumber): void;
    smokeTest(segment: StringSegment): boolean;
    toString(): string;
    // private validateGroup(sepType: number, count: number, isPrimary: boolean): boolean;
}