import type { ChildMatcher } from '../../../../../org/apache/tika/sax/xpath/ChildMatcher.d.ts'
import type { Matcher } from '../../../../../org/apache/tika/sax/xpath/Matcher.d.ts'
export class NamedElementMatcher extends ChildMatcher {
    static FAIL: Matcher;
    constructor(arg0: string, arg1: string, arg2: Matcher)
    // private name: string;
    // private namespace: string;
    descend(arg0: string, arg1: string): Matcher;
}