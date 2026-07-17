import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LSTMBreakEngine$EmbeddingType } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/LSTMBreakEngine$EmbeddingType.d.ts'
import type { UResourceBundle } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/UResourceBundle.d.ts'
export class LSTMBreakEngine$LSTMData extends Object {
    constructor(rb: UResourceBundle)
    fBackwardB: number[];
    fBackwardU: number[][];
    fBackwardW: number[][];
    fDict: JavaMap<string, number>;
    fEmbedding: number[][];
    fForwardB: number[];
    fForwardU: number[][];
    fForwardW: number[][];
    fName: string;
    fOutputB: number[];
    fOutputW: number[][];
    fType: LSTMBreakEngine$EmbeddingType;
}