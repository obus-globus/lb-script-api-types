import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { StringSegment } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StringSegment.d.ts'
import type { NumberParseMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/NumberParseMatcher.d.ts'
import type { ParsedNumber } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
export abstract class ValidationMatcher extends Object implements NumberParseMatcher {
    constructor()
    match(segment: StringSegment, result: ParsedNumber): boolean;
    smokeTest(segment: StringSegment): boolean;
}