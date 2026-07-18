import type { CharArrayBuilder } from '../../../../../io/ktor/http/cio/internals/CharArrayBuilder.d.ts'
import type { IntStream } from '../../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class CharArrayBuilder$SubSequenceImpl extends Object implements CharSequence {
    constructor(null_: CharArrayBuilder, start: number, end: number)
    readonly end: number;
    readonly length: number;
    getLength(): number;
    readonly start: number;
    // private stringified: string | null;
    chars(): IntStream;
    codePoints(): IntStream;
    equals(other: Object | null): boolean;
    get(index: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    hashCode(): number;
    isEmpty(): boolean;
    subSequence(startIndex: number, endIndex: number): CharSequence;
    toString(): string;
}