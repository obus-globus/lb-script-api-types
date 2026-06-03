import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { CharBuffer } from '../../../../../java/nio/CharBuffer.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class ClosedReader extends Reader {
    static CLOSED_READER: ClosedReader;
    static INSTANCE: ClosedReader;
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor()
    close(): void;
    read(): number;
    read(arg0: CharBuffer): number;
    read(arg0: string[]): number;
    read(arg0: string[], arg1: number, arg2: number): number;
}