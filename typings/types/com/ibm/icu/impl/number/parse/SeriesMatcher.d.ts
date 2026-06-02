import type { StringSegment } from '../../../../../../com/ibm/icu/impl/StringSegment.d.ts'
import type { NumberParseMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/NumberParseMatcher.d.ts'
import type { ParsedNumber } from '../../../../../../com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SeriesMatcher extends Object implements NumberParseMatcher {
    constructor()
    // private frozen: boolean;
    // private matchers: NumberParseMatcher[];
    addMatcher(arg0: NumberParseMatcher): void;
    freeze(): void;
    length(): number;
    match(arg0: StringSegment, arg1: ParsedNumber): boolean;
    postProcess(arg0: ParsedNumber): void;
    smokeTest(arg0: StringSegment): boolean;
    toString(): string;
}