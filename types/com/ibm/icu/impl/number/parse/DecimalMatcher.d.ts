import type { StringSegment } from '../../../../../../com/ibm/icu/impl/StringSegment.d.ts'
import type { Grouper } from '../../../../../../com/ibm/icu/impl/number/Grouper.d.ts'
import type { NumberParseMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/NumberParseMatcher.d.ts'
import type { ParsedNumber } from '../../../../../../com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DecimalMatcher extends Object implements NumberParseMatcher {
    static getInstance(paramarg0: DecimalFormatSymbols, paramarg1: Grouper, paramarg2: number): DecimalMatcher;
    private constructor(arg0: DecimalFormatSymbols, arg1: Grouper, arg2: number)
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
    match(arg0: StringSegment, arg1: ParsedNumber): boolean;
    match(arg0: StringSegment, arg1: ParsedNumber, arg2: number): boolean;
    postProcess(arg0: ParsedNumber): void;
    smokeTest(arg0: StringSegment): boolean;
    toString(): string;
    // private validateGroup(arg0: number, arg1: number, arg2: boolean): boolean;
}