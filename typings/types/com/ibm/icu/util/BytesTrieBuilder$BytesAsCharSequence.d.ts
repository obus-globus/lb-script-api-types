import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class BytesTrieBuilder$BytesAsCharSequence extends Object implements CharSequence {
    constructor(arg0: number[], arg1: number)
    // private len: number;
    /*not mapped: */ length(): number;
    // private s: number[];
    chars(): IntStream;
    codePoints(): IntStream;
    get(arg0: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    isEmpty(): boolean;
    subSequence(arg0: number, arg1: number): CharSequence;
}