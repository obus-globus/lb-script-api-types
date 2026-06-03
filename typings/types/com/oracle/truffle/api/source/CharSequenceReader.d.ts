import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { CharBuffer } from '../../../../../java/nio/CharBuffer.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class CharSequenceReader extends Reader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(s: CharSequence)
    // private length: number;
    // private mark: number;
    // private next: number;
    // private seq: CharSequence;
    close(): void;
    // private ensureOpen(): void;
    mark(readAheadLimit: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: CharBuffer): number;
    read(arg0: string[]): number;
    read(cbuf: string[], off: number, len: number): number;
    ready(): boolean;
    reset(): void;
    skip(ns: number): number;
}