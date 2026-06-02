import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class StrMatcher extends Object {
    static charMatcher(paramarg0: string): StrMatcher;
    static charSetMatcher(paramarg0: string[]): StrMatcher;
    static charSetMatcher(paramarg0: string): StrMatcher;
    static commaMatcher(): StrMatcher;
    static doubleQuoteMatcher(): StrMatcher;
    static noneMatcher(): StrMatcher;
    static quoteMatcher(): StrMatcher;
    static singleQuoteMatcher(): StrMatcher;
    static spaceMatcher(): StrMatcher;
    static splitMatcher(): StrMatcher;
    static stringMatcher(paramarg0: string): StrMatcher;
    static tabMatcher(): StrMatcher;
    static trimMatcher(): StrMatcher;
    constructor()
    isMatch(arg0: string[], arg1: number): number;
    isMatch(arg0: string[], arg1: number, arg2: number, arg3: number): number;
}