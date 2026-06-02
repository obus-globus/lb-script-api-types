import type { DictionaryBreakEngine$DequeI } from '../../../../com/ibm/icu/impl/breakiter/DictionaryBreakEngine$DequeI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RuleBasedBreakIterator$BreakCache extends Object {
    constructor(null_: RuleBasedBreakIterator$BreakCache)
    constructor(null_: RuleBasedBreakIterator$BreakCache, arg1: RuleBasedBreakIterator$BreakCache)
    // private fBoundaries: number[];
    // private fBufIdx: number;
    // private fEndBufIdx: number;
    // private fSideBuffer: DictionaryBreakEngine$DequeI;
    // private fStartBufIdx: number;
    // private fStatuses: number[];
    // private fTextIdx: number;
    addFollowing(arg0: number, arg1: number, arg2: boolean): void;
    addPreceding(arg0: number, arg1: number, arg2: boolean): boolean;
    current(): number;
    dumpCache(): void;
    following(arg0: number): void;
    // private modChunkSize(arg0: number): number;
    next(): void;
    populateFollowing(): boolean;
    populateNear(arg0: number): boolean;
    populatePreceding(): boolean;
    preceding(arg0: number): void;
    previous(): void;
    reset(): void;
    reset(arg0: number, arg1: number): void;
    seek(arg0: number): boolean;
}