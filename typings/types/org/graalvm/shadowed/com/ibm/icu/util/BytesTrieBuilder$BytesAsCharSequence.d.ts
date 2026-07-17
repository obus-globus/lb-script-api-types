import type { IntStream } from '../../../../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export class BytesTrieBuilder$BytesAsCharSequence extends Object implements CharSequence {
    constructor(sequence: number[], length: number)
    // private len: number;
    /*not mapped: */ length(): number;
    // private s: number[];
    chars(): IntStream;
    codePoints(): IntStream;
    get(i: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    isEmpty(): boolean;
    subSequence(start: number, end: number): CharSequence;
}