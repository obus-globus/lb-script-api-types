import type { Matcher } from '../../../../../org/apache/tika/sax/xpath/Matcher.d.ts'
export class NodeMatcher extends Matcher {
    static FAIL: Matcher;
    static INSTANCE: Matcher;
    constructor()
    matchesAttribute(arg0: string, arg1: string): boolean;
    matchesElement(): boolean;
    matchesText(): boolean;
}