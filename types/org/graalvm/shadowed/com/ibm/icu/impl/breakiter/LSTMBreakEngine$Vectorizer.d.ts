import type { CharacterIterator } from '../../../../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export abstract class LSTMBreakEngine$Vectorizer extends Object {
    constructor(null_: LSTMBreakEngine$Vectorizer)
    // private fDict: { [key: string]: number };
    getIndex(token: string): number;
    vectorize(fIter: CharacterIterator, rangeStart: number, rangeEnd: number, offsets: number[], indicies: number[]): void;
}