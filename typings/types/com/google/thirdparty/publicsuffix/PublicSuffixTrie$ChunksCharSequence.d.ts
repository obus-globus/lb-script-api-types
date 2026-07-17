import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class PublicSuffixTrie$ChunksCharSequence extends Object implements CharSequence {
    constructor(chunks: CharSequence[], chunkShift: number)
    // private chunkMask: number;
    // private chunkShift: number;
    // private chunks: CharSequence[];
    // private length: number;
    /*not mapped: */ length(): number;
    chars(): IntStream;
    codePoints(): IntStream;
    get(index: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    isEmpty(): boolean;
    subSequence(start: number, end: number): CharSequence;
    toString(): string;
}