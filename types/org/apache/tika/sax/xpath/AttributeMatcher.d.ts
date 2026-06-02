import type { Matcher } from '../../../../../org/apache/tika/sax/xpath/Matcher.d.ts'
export class AttributeMatcher extends Matcher {
    static FAIL: Matcher;
    static INSTANCE: Matcher;
    constructor()
    matchesAttribute(arg0: string, arg1: string): boolean;
}