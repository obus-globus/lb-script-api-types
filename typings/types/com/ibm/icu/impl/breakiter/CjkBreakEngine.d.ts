import type { DictionaryBreakEngine } from '../../../../../com/ibm/icu/impl/breakiter/DictionaryBreakEngine.d.ts'
import type { DictionaryBreakEngine$DequeI } from '../../../../../com/ibm/icu/impl/breakiter/DictionaryBreakEngine$DequeI.d.ts'
import type { DictionaryMatcher } from '../../../../../com/ibm/icu/impl/breakiter/DictionaryMatcher.d.ts'
import type { MlBreakEngine } from '../../../../../com/ibm/icu/impl/breakiter/MlBreakEngine.d.ts'
import type { StringBuffer } from '../../../../../java/lang/StringBuffer.d.ts'
import type { CharacterIterator } from '../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CjkBreakEngine extends DictionaryBreakEngine {
    constructor(arg0: boolean)
    // private fClosePunctuationSet: string[];
    // private fDictionary: DictionaryMatcher;
    // private fDigitOrOpenPunctuationOrAlphabetSet: string[];
    // private fHangulWordSet: string[];
    // private fMlBreakEngine: MlBreakEngine;
    // private fSkipSet: string[];
    // private isCj: boolean;
    divideUpDictionaryRange(arg0: CharacterIterator, arg1: number, arg2: number, arg3: DictionaryBreakEngine$DequeI, arg4: boolean): number;
    equals(arg0: Object | null): boolean;
    // private getPatternFromText(arg0: CharacterIterator, arg1: StringBuffer, arg2: number, arg3: number): string;
    hashCode(): number;
    // private initializeJapanesePhraseParamater(): void;
    // private loadHiragana(): void;
    // private loadJapaneseExtensions(): void;
}