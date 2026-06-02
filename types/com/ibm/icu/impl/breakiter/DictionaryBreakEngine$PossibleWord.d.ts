import type { DictionaryMatcher } from '../../../../../com/ibm/icu/impl/breakiter/DictionaryMatcher.d.ts'
import type { CharacterIterator } from '../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DictionaryBreakEngine$PossibleWord extends Object {
    constructor()
    // private count: number[];
    // private current: number;
    // private lengths: number[];
    // private mark: number;
    // private offset: number;
    // private prefix: number;
    acceptMarked(arg0: CharacterIterator): number;
    backUp(arg0: CharacterIterator): boolean;
    candidates(arg0: CharacterIterator, arg1: DictionaryMatcher, arg2: number): number;
    longestPrefix(): number;
    markCurrent(): void;
}