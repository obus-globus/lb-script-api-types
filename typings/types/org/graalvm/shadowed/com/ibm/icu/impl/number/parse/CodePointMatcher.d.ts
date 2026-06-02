import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { StringSegment } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StringSegment.d.ts'
import type { NumberParseMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/NumberParseMatcher.d.ts'
import type { ParsedNumber } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
export class CodePointMatcher extends Object implements NumberParseMatcher {
    static getInstance(paramcp: number): CodePointMatcher;
    private constructor(cp: number)
    // private cp: number;
    match(segment: StringSegment, result: ParsedNumber): boolean;
    postProcess(result: ParsedNumber): void;
    smokeTest(segment: StringSegment): boolean;
    toString(): string;
}