import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { CharBuffer } from '../../../../../java/nio/CharBuffer.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class BoundedReader extends Reader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(arg0: Reader, arg1: number)
    // private charsRead: number;
    // private markedAt: number;
    // private maxCharsFromTargetReader: number;
    // private readAheadLimit: number;
    // private target: Reader;
    close(): void;
    mark(arg0: number): void;
    read(): number;
    read(arg0: CharBuffer): number;
    read(arg0: string[]): number;
    read(arg0: string[], arg1: number, arg2: number): number;
    reset(): void;
}