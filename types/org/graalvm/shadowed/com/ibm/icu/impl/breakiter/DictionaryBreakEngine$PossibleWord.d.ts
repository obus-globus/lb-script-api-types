import type { CharacterIterator } from '../../../../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DictionaryMatcher } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/DictionaryMatcher.d.ts'
export class DictionaryBreakEngine$PossibleWord extends Object {
    constructor()
    // private count: number[];
    // private current: number;
    // private lengths: number[];
    // private mark: number;
    // private offset: number;
    // private prefix: number;
    acceptMarked(fIter: CharacterIterator): number;
    backUp(fIter: CharacterIterator): boolean;
    candidates(fIter: CharacterIterator, dict: DictionaryMatcher, rangeEnd: number): number;
    longestPrefix(): number;
    markCurrent(): void;
}