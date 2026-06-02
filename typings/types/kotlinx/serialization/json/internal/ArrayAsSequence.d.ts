import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class ArrayAsSequence extends Object implements CharSequence {
    static compare(paramarg0: CharSequence, paramarg1: CharSequence): number;
    constructor(buffer: string[])
    // private buffer: string[];
    /*not mapped: */ getBuffer$kotlinx_serialization_json(): string[];
    length: number;
    chars(): IntStream;
    codePoints(): IntStream;
    get(index: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    isEmpty(): boolean;
    subSequence(startIndex: number, endIndex: number): CharSequence;
    substring(startIndex: number, endIndex: number): string;
    toString(): string;
    trim(newSize: number): void;
}