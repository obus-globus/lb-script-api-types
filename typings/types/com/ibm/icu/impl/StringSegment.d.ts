import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class StringSegment extends Object implements CharSequence {
    constructor(arg0: string, arg1: boolean)
    // private end: number;
    // private foldCase: boolean;
    readonly length: number;
    // private start: number;
    // private str: string;
    adjustOffset(arg0: number): void;
    adjustOffsetByCodePoint(): void;
    asString(): string;
    chars(): IntStream;
    codePointAt(arg0: number): number;
    codePoints(): IntStream;
    contentEquals(arg0: CharSequence): boolean;
    get(arg0: number): string;
    getCaseSensitivePrefixLength(arg0: CharSequence): number;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    getCodePoint(): number;
    getCommonPrefixLength(arg0: CharSequence): number;
    getOffset(): number;
    // private getPrefixLengthInternal(arg0: CharSequence, arg1: boolean): number;
    isEmpty(): boolean;
    resetLength(): void;
    setLength(arg0: number): void;
    setOffset(arg0: number): void;
    startsWith(arg0: string[]): boolean;
    startsWith(arg0: CharSequence): boolean;
    startsWith(arg0: number): boolean;
    subSequence(arg0: number, arg1: number): CharSequence;
    toString(): string;
}