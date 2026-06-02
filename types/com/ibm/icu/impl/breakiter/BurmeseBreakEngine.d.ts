import type { DictionaryBreakEngine } from '../../../../../com/ibm/icu/impl/breakiter/DictionaryBreakEngine.d.ts'
import type { DictionaryBreakEngine$DequeI } from '../../../../../com/ibm/icu/impl/breakiter/DictionaryBreakEngine$DequeI.d.ts'
import type { DictionaryMatcher } from '../../../../../com/ibm/icu/impl/breakiter/DictionaryMatcher.d.ts'
import type { CharacterIterator } from '../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BurmeseBreakEngine extends DictionaryBreakEngine {
    constructor()
    // private fBeginWordSet: string[];
    // private fDictionary: DictionaryMatcher;
    // private fEndWordSet: string[];
    // private fMarkSet: string[];
    divideUpDictionaryRange(arg0: CharacterIterator, arg1: number, arg2: number, arg3: DictionaryBreakEngine$DequeI, arg4: boolean): number;
    equals(arg0: Object | null): boolean;
    handles(arg0: number): boolean;
    hashCode(): number;
}