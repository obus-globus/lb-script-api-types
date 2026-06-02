import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CharsTrie$Entry } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CharsTrie$Entry.d.ts'
import type { CharsTrie$State } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CharsTrie$State.d.ts'
export class CollationIterator$SkippedState extends Object {
    constructor()
    // private newBuffer: StringBuilder;
    // private oldBuffer: StringBuilder;
    // private pos: number;
    // private skipLengthAtMatch: number;
    // private state: CharsTrie$State;
    backwardNumCodePoints(n: number): number;
    clear(): void;
    hasNext(): boolean;
    incBeyond(): void;
    isEmpty(): boolean;
    next(): number;
    recordMatch(): void;
    replaceMatch(): void;
    resetToTrieState(trie: CharsTrie$Entry[]): void;
    saveTrieState(trie: CharsTrie$Entry[]): void;
    setFirstSkipped(c: number): void;
    skip(c: number): void;
}