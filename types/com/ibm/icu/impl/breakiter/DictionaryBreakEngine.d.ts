import type { DictionaryBreakEngine$DequeI } from '../../../../../com/ibm/icu/impl/breakiter/DictionaryBreakEngine$DequeI.d.ts'
import type { LanguageBreakEngine } from '../../../../../com/ibm/icu/impl/breakiter/LanguageBreakEngine.d.ts'
import type { CharacterIterator } from '../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DictionaryBreakEngine extends Object implements LanguageBreakEngine {
    constructor()
    // private fSet: string[];
    divideUpDictionaryRange(arg0: CharacterIterator, arg1: number, arg2: number, arg3: DictionaryBreakEngine$DequeI, arg4: boolean): number;
    findBreaks(arg0: CharacterIterator, arg1: number, arg2: number, arg3: DictionaryBreakEngine$DequeI, arg4: boolean): number;
    handles(arg0: number): boolean;
    setCharacters(arg0: string[]): void;
}