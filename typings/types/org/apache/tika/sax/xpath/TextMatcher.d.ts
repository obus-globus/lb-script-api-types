import type { Matcher } from '../../../../../org/apache/tika/sax/xpath/Matcher.d.ts'
export class TextMatcher extends Matcher {
    static FAIL: Matcher;
    static INSTANCE: Matcher;
    constructor()
    matchesText(): boolean;
}