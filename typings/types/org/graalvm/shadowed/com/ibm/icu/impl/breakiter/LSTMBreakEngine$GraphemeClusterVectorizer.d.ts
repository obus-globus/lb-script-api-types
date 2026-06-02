import type { CharacterIterator } from '../../../../../../../../java/text/CharacterIterator.d.ts'
import type { LSTMBreakEngine$Vectorizer } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/LSTMBreakEngine$Vectorizer.d.ts'
export class LSTMBreakEngine$GraphemeClusterVectorizer extends LSTMBreakEngine$Vectorizer {
    constructor(null_: LSTMBreakEngine$GraphemeClusterVectorizer)
    // private substring(text: CharacterIterator, startPos: number, endPos: number): string;
    vectorize(text: CharacterIterator, startPos: number, endPos: number, offsets: number[], indicies: number[]): void;
}