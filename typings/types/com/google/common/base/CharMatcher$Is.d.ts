import type { CharMatcher } from '../../../../com/google/common/base/CharMatcher.d.ts'
import type { CharMatcher$FastMatcher } from '../../../../com/google/common/base/CharMatcher$FastMatcher.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { BitSet } from '../../../../java/util/BitSet.d.ts'
import type { Predicate as Predicate_2 } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class CharMatcher$Is extends CharMatcher$FastMatcher {
    static any(): CharMatcher;
    static anyOf(paramsequence: CharSequence): CharMatcher;
    static ascii(): CharMatcher;
    static breakingWhitespace(): CharMatcher;
    static digit(): CharMatcher;
    static forPredicate(parampredicate: (param0: Object) => boolean): CharMatcher;
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
    constructor(match: string)
    // private match: string;
    and(other: CharMatcher): CharMatcher;
    and(arg0: (param0: string) => boolean): (param0: string) => boolean;
    matches(c: string): boolean;
    negate(): CharMatcher;
    or(other: CharMatcher): CharMatcher;
    or(arg0: (param0: string) => boolean): (param0: string) => boolean;
    replaceFrom(sequence: CharSequence, replacement: string): string;
    replaceFrom(sequence: CharSequence, replacement: CharSequence): string;
    setBits(table: BitSet): void;
    toString(): string;
}