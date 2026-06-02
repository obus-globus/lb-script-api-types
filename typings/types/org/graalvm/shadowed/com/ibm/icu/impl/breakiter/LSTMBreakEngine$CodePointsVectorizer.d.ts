import type { CharacterIterator } from '../../../../../../../../java/text/CharacterIterator.d.ts'
import type { LSTMBreakEngine$Vectorizer } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/LSTMBreakEngine$Vectorizer.d.ts'
export class LSTMBreakEngine$CodePointsVectorizer extends LSTMBreakEngine$Vectorizer {
    constructor(null_: LSTMBreakEngine$CodePointsVectorizer)
    vectorize(fIter: CharacterIterator, rangeStart: number, rangeEnd: number, offsets: number[], indicies: number[]): void;
}