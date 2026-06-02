import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DateTimePatternGenerator$DateTimeMatcher } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateTimePatternGenerator$DateTimeMatcher.d.ts'
export class DateTimePatternGenerator$PatternWithMatcher extends Object {
    constructor(pat: string, matcher: DateTimePatternGenerator$DateTimeMatcher)
    matcherWithSkeleton: DateTimePatternGenerator$DateTimeMatcher;
    pattern: string;
}