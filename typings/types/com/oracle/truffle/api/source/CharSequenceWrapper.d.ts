import type { IntStream } from '../../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class CharSequenceWrapper extends Object implements CharSequence {
    static compare(paramarg0: CharSequence, paramarg1: CharSequence): number;
    constructor(delegate: CharSequence)
    // private delegate: CharSequence;
    /*not mapped: */ length(): number;
    chars(): IntStream;
    codePoints(): IntStream;
    equals(obj: Object | null): boolean;
    get(index: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    hashCode(): number;
    isEmpty(): boolean;
    subSequence(start: number, end: number): CharSequence;
    toString(): string;
}