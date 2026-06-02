import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { StringSegment } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StringSegment.d.ts'
import type { ParsedNumber } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
export interface NumberParseMatcher extends Object{
    match(segment: StringSegment, result: ParsedNumber): boolean;
    postProcess(result: ParsedNumber): void;
    smokeTest(segment: StringSegment): boolean;
}