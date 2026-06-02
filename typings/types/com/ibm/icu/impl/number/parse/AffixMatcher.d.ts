import type { StringSegment } from '../../../../../../com/ibm/icu/impl/StringSegment.d.ts'
import type { AffixPatternProvider } from '../../../../../../com/ibm/icu/impl/number/AffixPatternProvider.d.ts'
import type { AffixPatternMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/AffixPatternMatcher.d.ts'
import type { AffixTokenMatcherFactory } from '../../../../../../com/ibm/icu/impl/number/parse/AffixTokenMatcherFactory.d.ts'
import type { IgnorablesMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/IgnorablesMatcher.d.ts'
import type { NumberParseMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/NumberParseMatcher.d.ts'
import type { NumberParserImpl } from '../../../../../../com/ibm/icu/impl/number/parse/NumberParserImpl.d.ts'
import type { ParsedNumber } from '../../../../../../com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AffixMatcher extends Object implements NumberParseMatcher {
    static COMPARATOR: (param0: AffixMatcher) => kotlin.Boolean;
    static createMatchers(paramarg0: AffixPatternProvider, paramarg1: NumberParserImpl, paramarg2: AffixTokenMatcherFactory, paramarg3: IgnorablesMatcher, paramarg4: number): void;
    private constructor(arg0: AffixPatternMatcher, arg1: AffixPatternMatcher, arg2: number)
    // private flags: number;
    // private prefix: AffixPatternMatcher;
    // private suffix: AffixPatternMatcher;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    match(arg0: StringSegment, arg1: ParsedNumber): boolean;
    postProcess(arg0: ParsedNumber): void;
    smokeTest(arg0: StringSegment): boolean;
    toString(): string;
}