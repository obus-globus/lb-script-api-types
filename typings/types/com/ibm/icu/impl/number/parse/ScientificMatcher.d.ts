import type { StringSegment } from '../../../../../../com/ibm/icu/impl/StringSegment.d.ts'
import type { Grouper } from '../../../../../../com/ibm/icu/impl/number/Grouper.d.ts'
import type { DecimalMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/DecimalMatcher.d.ts'
import type { IgnorablesMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/IgnorablesMatcher.d.ts'
import type { NumberParseMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/NumberParseMatcher.d.ts'
import type { ParsedNumber } from '../../../../../../com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ScientificMatcher extends Object implements NumberParseMatcher {
    static getInstance(paramarg0: DecimalFormatSymbols, paramarg1: Grouper): ScientificMatcher;
    private constructor(arg0: DecimalFormatSymbols, arg1: Grouper)
    // private customMinusSign: string;
    // private customPlusSign: string;
    // private exponentMatcher: DecimalMatcher;
    // private exponentSeparatorString: string;
    // private ignorablesMatcher: IgnorablesMatcher;
    match(arg0: StringSegment, arg1: ParsedNumber): boolean;
    postProcess(arg0: ParsedNumber): void;
    smokeTest(arg0: StringSegment): boolean;
    toString(): string;
}