import type { CommonMatcher } from '../../../../com/google/common/base/CommonMatcher.d.ts'
import type { Matcher } from '../../../../java/util/regex/Matcher.d.ts'
export class JdkPattern$JdkMatcher extends CommonMatcher {
    constructor(matcher: Matcher)
    // private matcher: Matcher;
    end(): number;
    find(): boolean;
    find(index: number): boolean;
    matches(): boolean;
    replaceAll(replacement: string): string;
    start(): number;
}