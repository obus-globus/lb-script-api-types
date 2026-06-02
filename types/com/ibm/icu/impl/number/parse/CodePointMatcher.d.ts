import type { StringSegment } from '../../../../../../com/ibm/icu/impl/StringSegment.d.ts'
import type { NumberParseMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/NumberParseMatcher.d.ts'
import type { ParsedNumber } from '../../../../../../com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CodePointMatcher extends Object implements NumberParseMatcher {
    static getInstance(paramarg0: number): CodePointMatcher;
    private constructor(arg0: number)
    // private cp: number;
    match(arg0: StringSegment, arg1: ParsedNumber): boolean;
    postProcess(arg0: ParsedNumber): void;
    smokeTest(arg0: StringSegment): boolean;
    toString(): string;
}