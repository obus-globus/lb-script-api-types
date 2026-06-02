import type { AffixUtils$TokenConsumer } from '../../../../../../com/ibm/icu/impl/number/AffixUtils$TokenConsumer.d.ts'
import type { AffixTokenMatcherFactory } from '../../../../../../com/ibm/icu/impl/number/parse/AffixTokenMatcherFactory.d.ts'
import type { IgnorablesMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/IgnorablesMatcher.d.ts'
import type { SeriesMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/SeriesMatcher.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AffixPatternMatcher extends SeriesMatcher implements AffixUtils$TokenConsumer {
    static fromAffixPattern(paramarg0: string, paramarg1: AffixTokenMatcherFactory, paramarg2: number): AffixPatternMatcher;
    private constructor(arg0: string)
    // private affixPattern: string;
    // private factory: AffixTokenMatcherFactory;
    // private ignorables: IgnorablesMatcher;
    // private lastTypeOrCp: number;
    consumeToken(arg0: number): void;
    equals(arg0: Object | null): boolean;
    getPattern(): string;
    hashCode(): number;
    toString(): string;
}