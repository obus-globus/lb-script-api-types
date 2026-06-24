import type { LSTMBreakEngine } from '../../../../../com/ibm/icu/impl/breakiter/LSTMBreakEngine.d.ts'
import type { CharacterIterator } from '../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class LSTMBreakEngine$Vectorizer extends Object {
    constructor(null_: LSTMBreakEngine, arg1: { [key: string]: number })
    // private fDict: { [key: string]: number };
    getIndex(arg0: string): number;
    vectorize(arg0: CharacterIterator, arg1: number, arg2: number, arg3: number[], arg4: number[]): void;
}