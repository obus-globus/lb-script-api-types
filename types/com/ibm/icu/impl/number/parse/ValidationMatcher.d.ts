import type { StringSegment } from '../../../../../../com/ibm/icu/impl/StringSegment.d.ts'
import type { NumberParseMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/NumberParseMatcher.d.ts'
import type { ParsedNumber } from '../../../../../../com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ValidationMatcher extends Object implements NumberParseMatcher {
    constructor()
    match(arg0: StringSegment, arg1: ParsedNumber): boolean;
    smokeTest(arg0: StringSegment): boolean;
}