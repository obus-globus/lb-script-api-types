import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class StrMatcher extends Object {
    static charMatcher(paramch: string): StrMatcher;
    static charSetMatcher(paramchars: string[]): StrMatcher;
    static charSetMatcher(paramchars: string): StrMatcher;
    static commaMatcher(): StrMatcher;
    static doubleQuoteMatcher(): StrMatcher;
    static noneMatcher(): StrMatcher;
    static quoteMatcher(): StrMatcher;
    static singleQuoteMatcher(): StrMatcher;
    static spaceMatcher(): StrMatcher;
    static splitMatcher(): StrMatcher;
    static stringMatcher(paramstr: string): StrMatcher;
    static tabMatcher(): StrMatcher;
    static trimMatcher(): StrMatcher;
    constructor()
    isMatch(buffer: string[], pos: number): number;
    isMatch(buffer: string[], pos: number, bufferStart: number, bufferEnd: number): number;
}