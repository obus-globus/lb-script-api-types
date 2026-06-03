import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { CharBuffer } from '../../../../../java/nio/CharBuffer.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class NullReader extends Reader {
    static INSTANCE: NullReader;
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean, arg2: boolean)
    // private eof: boolean;
    // private mark: number;
    // private markSupported: boolean;
    readonly position: number;
    // private readLimit: number;
    readonly size: number;
    // private throwEofException: boolean;
    close(): void;
    // private doEndOfFile(): number;
    getPosition(): number;
    getSize(): number;
    mark(arg0: number): void;
    markSupported(): boolean;
    processChar(): number;
    processChars(arg0: string[], arg1: number, arg2: number): void;
    read(): number;
    read(arg0: CharBuffer): number;
    read(arg0: string[]): number;
    read(arg0: string[], arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
}