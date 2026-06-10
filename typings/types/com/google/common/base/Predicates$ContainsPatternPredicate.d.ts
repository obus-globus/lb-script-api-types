import type { CommonPattern } from '../../../../com/google/common/base/CommonPattern.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Predicates$ContainsPatternPredicate extends Object implements Predicate<CharSequence>, Serializable {
    constructor(pattern: CommonPattern)
    // private pattern: CommonPattern;
    apply(t: CharSequence): boolean;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    test(input: CharSequence): boolean;
    toString(): string;
}