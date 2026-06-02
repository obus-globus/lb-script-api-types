import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DictionaryBreakEngine$DequeI } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/DictionaryBreakEngine$DequeI.d.ts'
export class RuleBasedBreakIterator$DictionaryCache extends Object {
    constructor(null_: RuleBasedBreakIterator$DictionaryCache)
    constructor(null_: RuleBasedBreakIterator$DictionaryCache, src: RuleBasedBreakIterator$DictionaryCache)
    // private fBoundary: number;
    // private fBreaks: DictionaryBreakEngine$DequeI;
    // private fFirstRuleStatusIndex: number;
    // private fLimit: number;
    // private fOtherRuleStatusIndex: number;
    // private fPositionInCache: number;
    // private fStart: number;
    // private fStatusIndex: number;
    following(fromPos: number): boolean;
    populateDictionary(startPos: number, endPos: number, firstRuleStatus: number, otherRuleStatus: number): void;
    preceding(fromPos: number): boolean;
    reset(): void;
}