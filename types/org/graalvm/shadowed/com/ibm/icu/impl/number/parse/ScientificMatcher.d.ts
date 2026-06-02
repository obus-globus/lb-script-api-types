import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { StringSegment } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StringSegment.d.ts'
import type { Grouper } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Grouper.d.ts'
import type { DecimalMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/DecimalMatcher.d.ts'
import type { IgnorablesMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/IgnorablesMatcher.d.ts'
import type { NumberParseMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/NumberParseMatcher.d.ts'
import type { ParsedNumber } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
export class ScientificMatcher extends Object implements NumberParseMatcher {
    static getInstance(paramsymbols: DecimalFormatSymbols, paramgrouper: Grouper): ScientificMatcher;
    private constructor(symbols: DecimalFormatSymbols, grouper: Grouper)
    // private customMinusSign: string;
    // private customPlusSign: string;
    // private exponentMatcher: DecimalMatcher;
    // private exponentSeparatorString: string;
    // private ignorablesMatcher: IgnorablesMatcher;
    match(segment: StringSegment, result: ParsedNumber): boolean;
    postProcess(result: ParsedNumber): void;
    smokeTest(segment: StringSegment): boolean;
    toString(): string;
}