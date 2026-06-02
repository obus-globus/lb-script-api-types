import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Streams$AppendableWriter$CurrentWrite extends Object implements CharSequence {
    static compare(paramarg0: CharSequence, paramarg1: CharSequence): number;
    private constructor()
    // private cachedString: string;
    // private chars: string[];
    /*not mapped: */ length(): number;
    chars(): IntStream;
    codePoints(): IntStream;
    get(arg0: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    isEmpty(): boolean;
    setChars(arg0: string[]): void;
    subSequence(arg0: number, arg1: number): CharSequence;
    toString(): string;
}