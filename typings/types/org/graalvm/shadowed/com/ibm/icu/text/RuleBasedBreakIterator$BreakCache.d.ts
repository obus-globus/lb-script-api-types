import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DictionaryBreakEngine$DequeI } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/DictionaryBreakEngine$DequeI.d.ts'
import type { RuleBasedBreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedBreakIterator.d.ts'
export class RuleBasedBreakIterator$BreakCache extends Object {
    constructor(null_: RuleBasedBreakIterator)
    constructor(null_: RuleBasedBreakIterator, src: RuleBasedBreakIterator$BreakCache)
    // private fBoundaries: number[];
    // private fBufIdx: number;
    // private fEndBufIdx: number;
    // private fSideBuffer: DictionaryBreakEngine$DequeI;
    // private fStartBufIdx: number;
    // private fStatuses: number[];
    // private fTextIdx: number;
    addFollowing(position: number, ruleStatusIdx: number, update: boolean): void;
    addPreceding(position: number, ruleStatusIdx: number, update: boolean): boolean;
    current(): number;
    dumpCache(): void;
    following(startPos: number): void;
    // private modChunkSize(index: number): number;
    next(): void;
    populateFollowing(): boolean;
    populateNear(position: number): boolean;
    populatePreceding(): boolean;
    preceding(startPos: number): void;
    previous(): void;
    reset(): void;
    reset(pos: number, ruleStatus: number): void;
    seek(pos: number): boolean;
}