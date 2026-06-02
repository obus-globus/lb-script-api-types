import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { BitSet } from '../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export abstract class CharMatcher extends Object implements Predicate<string> {
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
    constructor()
    and(other: CharMatcher): CharMatcher;
    apply(character: string): boolean;
    collapseFrom(sequence: CharSequence, replacement: string): string;
    countIn(sequence: CharSequence): number;
    // private finishCollapseFrom(sequence: CharSequence, start: number, end: number, replacement: string, builder: StringBuilder, inMatchingGroup: boolean): string;
    indexIn(sequence: CharSequence): number;
    indexIn(sequence: CharSequence, start: number): number;
    lastIndexIn(sequence: CharSequence): number;
    matches(c: string): boolean;
    matchesAllOf(sequence: CharSequence): boolean;
    matchesAnyOf(sequence: CharSequence): boolean;
    matchesNoneOf(sequence: CharSequence): boolean;
    negate(): CharMatcher;
    or(other: CharMatcher): CharMatcher;
    precomputed(): CharMatcher;
    precomputedInternal(): CharMatcher;
    removeFrom(sequence: CharSequence): string;
    replaceFrom(sequence: CharSequence, replacement: string): string;
    replaceFrom(sequence: CharSequence, replacement: CharSequence): string;
    retainFrom(sequence: CharSequence): string;
    setBits(table: BitSet): void;
    test(character: string): boolean;
    test<T extends Object | number | string | boolean>(input: T): boolean;
    toString(): string;
    trimAndCollapseFrom(sequence: CharSequence, replacement: string): string;
    trimFrom(sequence: CharSequence): string;
    trimLeadingFrom(sequence: CharSequence): string;
    trimTrailingFrom(sequence: CharSequence): string;
}