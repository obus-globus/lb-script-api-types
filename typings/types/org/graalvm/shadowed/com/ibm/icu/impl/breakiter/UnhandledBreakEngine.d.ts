import type { CharacterIterator } from '../../../../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DictionaryBreakEngine$DequeI } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/DictionaryBreakEngine$DequeI.d.ts'
import type { LanguageBreakEngine } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/LanguageBreakEngine.d.ts'
export class UnhandledBreakEngine extends Object implements LanguageBreakEngine {
    constructor()
    // private fHandled: string[];
    findBreaks(text: CharacterIterator, startPos: number, endPos: number, foundBreaks: DictionaryBreakEngine$DequeI, isPhraseBreaking: boolean): number;
    handleChar(c: number): void;
    handles(c: number): boolean;
}