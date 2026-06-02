import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { StringSegment } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StringSegment.d.ts'
import type { NumberParseMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/NumberParseMatcher.d.ts'
import type { ParsedNumber } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
export class SeriesMatcher extends Object implements NumberParseMatcher {
    constructor()
    // private frozen: boolean;
    // private matchers: NumberParseMatcher[];
    addMatcher(matcher: NumberParseMatcher): void;
    freeze(): void;
    length(): number;
    match(segment: StringSegment, result: ParsedNumber): boolean;
    postProcess(result: ParsedNumber): void;
    smokeTest(segment: StringSegment): boolean;
    toString(): string;
}