import type { StringSegment } from '../../../../../../com/ibm/icu/impl/StringSegment.d.ts'
import type { ParsedNumber } from '../../../../../../com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface NumberParseMatcher extends Object{
    match(arg0: StringSegment, arg1: ParsedNumber): boolean;
    postProcess(arg0: ParsedNumber): void;
    smokeTest(arg0: StringSegment): boolean;
}