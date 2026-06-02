import type { DictionaryBreakEngine } from '../../../../../com/ibm/icu/impl/breakiter/DictionaryBreakEngine.d.ts'
import type { DictionaryBreakEngine$DequeI } from '../../../../../com/ibm/icu/impl/breakiter/DictionaryBreakEngine$DequeI.d.ts'
import type { LSTMBreakEngine$LSTMData } from '../../../../../com/ibm/icu/impl/breakiter/LSTMBreakEngine$LSTMData.d.ts'
import type { LSTMBreakEngine$Vectorizer } from '../../../../../com/ibm/icu/impl/breakiter/LSTMBreakEngine$Vectorizer.d.ts'
import type { UResourceBundle } from '../../../../../com/ibm/icu/util/UResourceBundle.d.ts'
import type { CharacterIterator } from '../../../../../java/text/CharacterIterator.d.ts'
export class LSTMBreakEngine extends DictionaryBreakEngine {
    static create(paramarg0: number, paramarg1: LSTMBreakEngine$LSTMData): LSTMBreakEngine;
    static createData(paramarg0: UResourceBundle): LSTMBreakEngine$LSTMData;
    static createData(paramarg0: number): LSTMBreakEngine$LSTMData;
    constructor(arg0: number, arg1: string[], arg2: LSTMBreakEngine$LSTMData)
    // private fData: LSTMBreakEngine$LSTMData;
    // private fScript: number;
    // private fVectorizer: LSTMBreakEngine$Vectorizer;
    // private compute(arg0: number[][], arg1: number[][], arg2: number[], arg3: number[], arg4: number[], arg5: number[]): number[];
    divideUpDictionaryRange(arg0: CharacterIterator, arg1: number, arg2: number, arg3: DictionaryBreakEngine$DequeI, arg4: boolean): number;
    handles(arg0: number): boolean;
    hashCode(): number;
    // private makeVectorizer(arg0: LSTMBreakEngine$LSTMData): LSTMBreakEngine$Vectorizer;
}