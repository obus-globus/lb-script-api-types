import type { IntStream } from '../../../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
export class CharArraySequence extends Object implements CharSequence {
    constructor(array: string[], offset: number, length: number)
    // private array: string[];
    readonly length: number;
    getLength(): number;
    // private offset: number;
    chars(): IntStream;
    codePoints(): IntStream;
    get(index: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    // private indexOutOfBounds(index: number): void;
    isEmpty(): boolean;
    subSequence(startIndex: number, endIndex: number): CharSequence;
}