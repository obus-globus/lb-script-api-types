import type { IntStream } from '../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface CharSequence extends Object{
    chars(): IntStream;
    codePoints(): IntStream;
    get(index: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    isEmpty(): boolean;
    subSequence(startIndex: number, endIndex: number): CharSequence;
}