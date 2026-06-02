import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { CharBuffer } from '../../../../java/nio/CharBuffer.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class CharSequenceReader extends Reader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(seq: CharSequence)
    // private mark: number;
    // private pos: number;
    // private seq: CharSequence;
    // private checkOpen(): void;
    close(): void;
    // private hasRemaining(): boolean;
    mark(readAheadLimit: number): void;
    markSupported(): boolean;
    read(): number;
    read(target: CharBuffer): number;
    read(cbuf: string[], off: number, len: number): number;
    ready(): boolean;
    // private remaining(): number;
    reset(): void;
    skip(n: number): number;
}