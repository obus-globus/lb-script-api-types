import type { DictionaryBreakEngine$DequeI } from '../../../../../com/ibm/icu/impl/breakiter/DictionaryBreakEngine$DequeI.d.ts'
import type { LanguageBreakEngine } from '../../../../../com/ibm/icu/impl/breakiter/LanguageBreakEngine.d.ts'
import type { CharacterIterator } from '../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UnhandledBreakEngine extends Object implements LanguageBreakEngine {
    constructor()
    // private fHandled: string[];
    findBreaks(arg0: CharacterIterator, arg1: number, arg2: number, arg3: DictionaryBreakEngine$DequeI, arg4: boolean): number;
    handleChar(arg0: number): void;
    handles(arg0: number): boolean;
}