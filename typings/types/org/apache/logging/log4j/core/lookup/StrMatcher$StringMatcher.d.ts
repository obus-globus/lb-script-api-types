import type { StrMatcher } from '../../../../../../org/apache/logging/log4j/core/lookup/StrMatcher.d.ts'
export class StrMatcher$StringMatcher extends StrMatcher {
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
    constructor(str: string)
    // private chars: string[];
    isMatch(buffer: string[], pos: number, bufferStart: number, bufferEnd: number): number;
    toString(): string;
}