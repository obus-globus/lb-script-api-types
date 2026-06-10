import type { Comparator } from '../../../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { StringSegment } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StringSegment.d.ts'
import type { AffixPatternProvider } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/AffixPatternProvider.d.ts'
import type { AffixPatternMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/AffixPatternMatcher.d.ts'
import type { AffixTokenMatcherFactory } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/AffixTokenMatcherFactory.d.ts'
import type { IgnorablesMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/IgnorablesMatcher.d.ts'
import type { NumberParseMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/NumberParseMatcher.d.ts'
import type { NumberParserImpl } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/NumberParserImpl.d.ts'
import type { ParsedNumber } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
export class AffixMatcher extends Object implements NumberParseMatcher {
    static COMPARATOR: (param0: Object) => boolean;
    static createMatchers(parampatternInfo: AffixPatternProvider, paramoutput: NumberParserImpl, paramfactory: AffixTokenMatcherFactory, paramignorables: IgnorablesMatcher, paramparseFlags: number): void;
    private constructor(prefix: AffixPatternMatcher, suffix: AffixPatternMatcher, flags: number)
    // private flags: number;
    // private prefix: AffixPatternMatcher;
    // private suffix: AffixPatternMatcher;
    equals(_other: Object | null): boolean;
    hashCode(): number;
    match(segment: StringSegment, result: ParsedNumber): boolean;
    postProcess(result: ParsedNumber): void;
    smokeTest(segment: StringSegment): boolean;
    toString(): string;
}