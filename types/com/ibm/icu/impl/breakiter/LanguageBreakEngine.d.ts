import type { DictionaryBreakEngine$DequeI } from '../../../../../com/ibm/icu/impl/breakiter/DictionaryBreakEngine$DequeI.d.ts'
import type { CharacterIterator } from '../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LanguageBreakEngine extends Object{
    findBreaks(arg0: CharacterIterator, arg1: number, arg2: number, arg3: DictionaryBreakEngine$DequeI, arg4: boolean): number;
    handles(arg0: number): boolean;
}