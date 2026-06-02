import type { Matcher } from '../../../../../org/apache/tika/sax/xpath/Matcher.d.ts'
export class ChildMatcher extends Matcher {
    static FAIL: Matcher;
    constructor(arg0: Matcher)
    // private then: Matcher;
    descend(arg0: string, arg1: string): Matcher;
}