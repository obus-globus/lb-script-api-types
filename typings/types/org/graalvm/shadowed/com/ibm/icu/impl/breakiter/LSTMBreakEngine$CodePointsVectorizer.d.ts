import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { CharacterIterator } from '../../../../../../../../java/text/CharacterIterator.d.ts'
import type { LSTMBreakEngine } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/LSTMBreakEngine.d.ts'
import type { LSTMBreakEngine$Vectorizer } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/LSTMBreakEngine$Vectorizer.d.ts'
export class LSTMBreakEngine$CodePointsVectorizer extends LSTMBreakEngine$Vectorizer {
    constructor(null_: LSTMBreakEngine, dict: JavaMap<string, number>)
    vectorize(fIter: CharacterIterator, rangeStart: number, rangeEnd: number, offsets: number[], indicies: number[]): void;
}