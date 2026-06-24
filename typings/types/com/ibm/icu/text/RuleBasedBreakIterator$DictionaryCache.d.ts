import type { DictionaryBreakEngine$DequeI } from '../../../../com/ibm/icu/impl/breakiter/DictionaryBreakEngine$DequeI.d.ts'
import type { RuleBasedBreakIterator } from '../../../../com/ibm/icu/text/RuleBasedBreakIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RuleBasedBreakIterator$DictionaryCache extends Object {
    constructor(null_: RuleBasedBreakIterator)
    constructor(null_: RuleBasedBreakIterator, arg1: RuleBasedBreakIterator$DictionaryCache)
    // private fBoundary: number;
    // private fBreaks: DictionaryBreakEngine$DequeI;
    // private fFirstRuleStatusIndex: number;
    // private fLimit: number;
    // private fOtherRuleStatusIndex: number;
    // private fPositionInCache: number;
    // private fStart: number;
    // private fStatusIndex: number;
    following(arg0: number): boolean;
    populateDictionary(arg0: number, arg1: number, arg2: number, arg3: number): void;
    preceding(arg0: number): boolean;
    reset(): void;
}