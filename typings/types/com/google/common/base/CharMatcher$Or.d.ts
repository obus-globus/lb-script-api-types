import type { CharMatcher } from '../../../../com/google/common/base/CharMatcher.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { BitSet } from '../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class CharMatcher$Or extends CharMatcher {
    static any(): CharMatcher;
    static anyOf(paramsequence: CharSequence): CharMatcher;
    static ascii(): CharMatcher;
    static breakingWhitespace(): CharMatcher;
    static digit(): CharMatcher;
    static forPredicate(parampredicate: (param0: Object | null) => kotlin.Boolean): CharMatcher;
    static inRange(paramstartInclusive: string, paramendInclusive: string): CharMatcher;
    static invisible(): CharMatcher;
    static is(parammatch: string): CharMatcher;
    static isNot(parammatch: string): CharMatcher;
    static javaDigit(): CharMatcher;
    static javaIsoControl(): CharMatcher;
    static javaLetter(): CharMatcher;
    static javaLetterOrDigit(): CharMatcher;
    static javaLowerCase(): CharMatcher;
    static javaUpperCase(): CharMatcher;
    static none(): CharMatcher;
    static noneOf(paramsequence: CharSequence): CharMatcher;
    static singleWidth(): CharMatcher;
    static whitespace(): CharMatcher;
    constructor(a: CharMatcher, b: CharMatcher)
    // private first: CharMatcher;
    // private second: CharMatcher;
    matches(c: string): boolean;
    setBits(table: BitSet): void;
    toString(): string;
}