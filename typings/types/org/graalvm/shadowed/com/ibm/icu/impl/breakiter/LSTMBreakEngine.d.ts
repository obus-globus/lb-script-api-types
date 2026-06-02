import type { CharacterIterator } from '../../../../../../../../java/text/CharacterIterator.d.ts'
import type { DictionaryBreakEngine } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/DictionaryBreakEngine.d.ts'
import type { DictionaryBreakEngine$DequeI } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/DictionaryBreakEngine$DequeI.d.ts'
import type { LSTMBreakEngine$LSTMData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/LSTMBreakEngine$LSTMData.d.ts'
import type { LSTMBreakEngine$Vectorizer } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/LSTMBreakEngine$Vectorizer.d.ts'
import type { UResourceBundle } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/UResourceBundle.d.ts'
export class LSTMBreakEngine extends DictionaryBreakEngine {
    static create(paramscript: number, paramdata: LSTMBreakEngine$LSTMData): LSTMBreakEngine;
    static createData(paramscript: number): LSTMBreakEngine$LSTMData;
    static createData(parambundle: UResourceBundle): LSTMBreakEngine$LSTMData;
    constructor(script: number, set: string[], data: LSTMBreakEngine$LSTMData)
    // private fData: LSTMBreakEngine$LSTMData;
    // private fScript: number;
    // private fVectorizer: LSTMBreakEngine$Vectorizer;
    // private compute(W: number[][], U: number[][], B: number[], x: number[], h: number[], c: number[]): number[];
    divideUpDictionaryRange(fIter: CharacterIterator, rangeStart: number, rangeEnd: number, foundBreaks: DictionaryBreakEngine$DequeI, isPhraseBreaking: boolean): number;
    handles(c: number): boolean;
    hashCode(): number;
    // private makeVectorizer(data: LSTMBreakEngine$LSTMData): LSTMBreakEngine$Vectorizer;
}