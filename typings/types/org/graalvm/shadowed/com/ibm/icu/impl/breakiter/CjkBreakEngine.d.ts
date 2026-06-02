import type { StringBuffer } from '../../../../../../../../java/lang/StringBuffer.d.ts'
import type { CharacterIterator } from '../../../../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DictionaryBreakEngine } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/DictionaryBreakEngine.d.ts'
import type { DictionaryBreakEngine$DequeI } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/DictionaryBreakEngine$DequeI.d.ts'
import type { DictionaryMatcher } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/DictionaryMatcher.d.ts'
import type { MlBreakEngine } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/MlBreakEngine.d.ts'
export class CjkBreakEngine extends DictionaryBreakEngine {
    constructor(korean: boolean)
    // private fClosePunctuationSet: string[];
    // private fDictionary: DictionaryMatcher;
    // private fDigitOrOpenPunctuationOrAlphabetSet: string[];
    // private fHangulWordSet: string[];
    // private fMlBreakEngine: MlBreakEngine;
    // private fSkipSet: string[];
    // private isCj: boolean;
    divideUpDictionaryRange(inText: CharacterIterator, startPos: number, endPos: number, foundBreaks: DictionaryBreakEngine$DequeI, isPhraseBreaking: boolean): number;
    equals(obj: Object | null): boolean;
    // private getPatternFromText(text: CharacterIterator, sb: StringBuffer, start: number, length: number): string;
    hashCode(): number;
    // private initializeJapanesePhraseParamater(): void;
    // private loadHiragana(): void;
    // private loadJapaneseExtensions(): void;
}