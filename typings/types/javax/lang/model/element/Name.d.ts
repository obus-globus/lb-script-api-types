import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export interface Name extends Object, CharSequence{
    chars(): IntStream;
    codePoints(): IntStream;
    contentEquals(arg0: CharSequence): boolean;
    get(index: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    isEmpty(): boolean;
    subSequence(startIndex: number, endIndex: number): CharSequence;
}