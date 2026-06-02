import type { CharsTrie$Entry } from '../../../../../com/ibm/icu/util/CharsTrie$Entry.d.ts'
import type { CharsTrie$State } from '../../../../../com/ibm/icu/util/CharsTrie$State.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CollationIterator$SkippedState extends Object {
    constructor()
    // private newBuffer: StringBuilder;
    // private oldBuffer: StringBuilder;
    // private pos: number;
    // private skipLengthAtMatch: number;
    // private state: CharsTrie$State;
    backwardNumCodePoints(arg0: number): number;
    clear(): void;
    hasNext(): boolean;
    incBeyond(): void;
    isEmpty(): boolean;
    next(): number;
    recordMatch(): void;
    replaceMatch(): void;
    resetToTrieState(arg0: CharsTrie$Entry[]): void;
    saveTrieState(arg0: CharsTrie$Entry[]): void;
    setFirstSkipped(arg0: number): void;
    skip(arg0: number): void;
}