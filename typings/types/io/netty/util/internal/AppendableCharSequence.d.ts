import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class AppendableCharSequence extends Object implements Appendable, CharSequence {
    static compare(paramarg0: CharSequence, paramarg1: CharSequence): number;
    private constructor(arg0: string[])
    constructor(arg0: number)
    // private chars: string[];
    readonly length: number;
    // private pos: number;
    append(arg0: string): AppendableCharSequence;
    append(arg0: CharSequence): AppendableCharSequence;
    append(arg0: CharSequence, arg1: number, arg2: number): AppendableCharSequence;
    charAtUnsafe(arg0: number): string;
    chars(): IntStream;
    codePoints(): IntStream;
    get(arg0: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    isEmpty(): boolean;
    reset(): void;
    setLength(arg0: number): void;
    subSequence(arg0: number, arg1: number): AppendableCharSequence;
    subStringUnsafe(arg0: number, arg1: number): string;
    substring(arg0: number, arg1: number): string;
    toString(): string;
}