import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { LSTMBreakEngine } from '../../../../../com/ibm/icu/impl/breakiter/LSTMBreakEngine.d.ts'
import type { LSTMBreakEngine$Vectorizer } from '../../../../../com/ibm/icu/impl/breakiter/LSTMBreakEngine$Vectorizer.d.ts'
import type { CharacterIterator } from '../../../../../java/text/CharacterIterator.d.ts'
export class LSTMBreakEngine$GraphemeClusterVectorizer extends LSTMBreakEngine$Vectorizer {
    constructor(null_: LSTMBreakEngine, arg1: JavaMap<string, number>)
    // private substring(arg0: CharacterIterator, arg1: number, arg2: number): string;
    vectorize(arg0: CharacterIterator, arg1: number, arg2: number, arg3: number[], arg4: number[]): void;
}