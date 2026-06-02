import type { CharacterIterator } from '../../../../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DictionaryBreakEngine } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/DictionaryBreakEngine.d.ts'
import type { DictionaryBreakEngine$DequeI } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/DictionaryBreakEngine$DequeI.d.ts'
import type { DictionaryMatcher } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/DictionaryMatcher.d.ts'
export class ThaiBreakEngine extends DictionaryBreakEngine {
    constructor()
    // private fBeginWordSet: string[];
    // private fDictionary: DictionaryMatcher;
    // private fEndWordSet: string[];
    // private fMarkSet: string[];
    // private fSuffixSet: string[];
    divideUpDictionaryRange(fIter: CharacterIterator, rangeStart: number, rangeEnd: number, foundBreaks: DictionaryBreakEngine$DequeI, isPhraseBreaking: boolean): number;
    equals(obj: Object | null): boolean;
    handles(c: number): boolean;
    hashCode(): number;
}