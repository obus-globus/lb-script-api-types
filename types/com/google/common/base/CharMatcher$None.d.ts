import type { CharMatcher } from '../../../../com/google/common/base/CharMatcher.d.ts'
import type { CharMatcher$NamedFastMatcher } from '../../../../com/google/common/base/CharMatcher$NamedFastMatcher.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class CharMatcher$None extends CharMatcher$NamedFastMatcher {
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
    private constructor()
    and(other: CharMatcher): CharMatcher;
    collapseFrom(sequence: CharSequence, replacement: string): string;
    countIn(sequence: CharSequence): number;
    indexIn(sequence: CharSequence): number;
    indexIn(sequence: CharSequence, start: number): number;
    lastIndexIn(sequence: CharSequence): number;
    matches(c: string): boolean;
    matchesAllOf(sequence: CharSequence): boolean;
    matchesNoneOf(sequence: CharSequence): boolean;
    negate(): CharMatcher;
    or(other: CharMatcher): CharMatcher;
    removeFrom(sequence: CharSequence): string;
    replaceFrom(sequence: CharSequence, replacement: string): string;
    replaceFrom(sequence: CharSequence, replacement: CharSequence): string;
    trimFrom(sequence: CharSequence): string;
    trimLeadingFrom(sequence: CharSequence): string;
    trimTrailingFrom(sequence: CharSequence): string;
}