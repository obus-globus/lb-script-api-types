import type { LSTMBreakEngine$EmbeddingType } from '../../../../../com/ibm/icu/impl/breakiter/LSTMBreakEngine$EmbeddingType.d.ts'
import type { UResourceBundle } from '../../../../../com/ibm/icu/util/UResourceBundle.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LSTMBreakEngine$LSTMData extends Object {
    constructor(arg0: UResourceBundle)
    fBackwardB: number[];
    fBackwardU: number[][];
    fBackwardW: number[][];
    fDict: { [key: string]: number };
    fEmbedding: number[][];
    fForwardB: number[];
    fForwardU: number[][];
    fForwardW: number[][];
    fName: string;
    fOutputB: number[];
    fOutputW: number[][];
    fType: LSTMBreakEngine$EmbeddingType;
}