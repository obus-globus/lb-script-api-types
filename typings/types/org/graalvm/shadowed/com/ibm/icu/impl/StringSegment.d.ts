import type { IntStream } from '../../../../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export class StringSegment extends Object implements CharSequence {
    constructor(str: string, foldCase: boolean)
    // private end: number;
    // private foldCase: boolean;
    readonly length: number;
    // private start: number;
    // private str: string;
    adjustOffset(delta: number): void;
    adjustOffsetByCodePoint(): void;
    asString(): string;
    chars(): IntStream;
    codePointAt(index: number): number;
    codePoints(): IntStream;
    contentEquals(other: CharSequence): boolean;
    get(index: number): string;
    getCaseSensitivePrefixLength(other: CharSequence): number;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    getCodePoint(): number;
    getCommonPrefixLength(other: CharSequence): number;
    getOffset(): number;
    // private getPrefixLengthInternal(other: CharSequence, foldCase: boolean): number;
    isEmpty(): boolean;
    resetLength(): void;
    setLength(length: number): void;
    setOffset(start: number): void;
    startsWith(other: CharSequence): boolean;
    startsWith(otherCp: number): boolean;
    startsWith(uniset: string[]): boolean;
    subSequence(start: number, end: number): CharSequence;
    toString(): string;
}