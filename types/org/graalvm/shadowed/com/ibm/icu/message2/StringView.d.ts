import type { IntStream } from '../../../../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export class StringView extends Object implements CharSequence {
    static compare(paramarg0: CharSequence, paramarg1: CharSequence): number;
    constructor(text: string)
    constructor(text: string, offset: number)
    /*not mapped: */ length(): number;
    // private offset: number;
    // private text: string;
    chars(): IntStream;
    codePoints(): IntStream;
    get(index: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    isEmpty(): boolean;
    subSequence(start: number, end: number): CharSequence;
    toString(): string;
}