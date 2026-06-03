import type { MatchResult } from '../../java/util/regex/MatchResult.d.ts'
import type { Matcher } from '../../java/util/regex/Matcher.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { MatchResult as MatchResult_2 } from '../../kotlin/text/MatchResult.d.ts'
export class MatcherMatchResult extends Object implements MatchResult_2 {
    constructor(matcher: Matcher, input: CharSequence)
    readonly groupValues: string[];
    // private groupValues_: string[] | null;
    readonly groups: (Object | null)[];
    // private input: CharSequence;
    // private /*not mapped: */ getMatchResult(): MatchResult;
    // private matcher: Matcher;
    readonly range: { start: number; endInclusive: number; step: number };
    readonly value: string;
    next(): MatchResult_2 | null;
}