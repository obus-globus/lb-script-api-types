import type { Matcher } from '../../../../../org/apache/tika/sax/xpath/Matcher.d.ts'
export class NamedAttributeMatcher extends Matcher {
    static FAIL: Matcher;
    constructor(arg0: string, arg1: string)
    // private name: string;
    // private namespace: string;
    matchesAttribute(arg0: string, arg1: string): boolean;
}