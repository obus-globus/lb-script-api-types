import type { Matcher } from '../../../../../org/apache/tika/sax/xpath/Matcher.d.ts'
export class CompositeMatcher extends Matcher {
    static FAIL: Matcher;
    constructor(arg0: Matcher, arg1: Matcher)
    // private a: Matcher;
    // private b: Matcher;
    descend(arg0: string, arg1: string): Matcher;
    matchesAttribute(arg0: string, arg1: string): boolean;
    matchesElement(): boolean;
    matchesText(): boolean;
}