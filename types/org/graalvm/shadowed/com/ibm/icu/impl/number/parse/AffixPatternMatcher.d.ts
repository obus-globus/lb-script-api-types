import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { AffixUtils$TokenConsumer } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/AffixUtils$TokenConsumer.d.ts'
import type { AffixTokenMatcherFactory } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/AffixTokenMatcherFactory.d.ts'
import type { IgnorablesMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/IgnorablesMatcher.d.ts'
import type { SeriesMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/SeriesMatcher.d.ts'
export class AffixPatternMatcher extends SeriesMatcher implements AffixUtils$TokenConsumer {
    static fromAffixPattern(paramaffixPattern: string, paramfactory: AffixTokenMatcherFactory, paramparseFlags: number): AffixPatternMatcher;
    private constructor(affixPattern: string)
    // private affixPattern: string;
    // private factory: AffixTokenMatcherFactory;
    // private ignorables: IgnorablesMatcher;
    // private lastTypeOrCp: number;
    consumeToken(typeOrCp: number): void;
    equals(other: Object | null): boolean;
    getPattern(): string;
    hashCode(): number;
    toString(): string;
}