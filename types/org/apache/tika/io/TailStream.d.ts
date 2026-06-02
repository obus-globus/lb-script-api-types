import type { FilterInputStream } from '../../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
export class TailStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream, arg1: number)
    // private bytesRead: number;
    // private currentIndex: number;
    // private markBuffer: number[];
    // private markBytesRead: number;
    // private markIndex: number;
    // private tailBuffer: number[];
    // private tailSize: number;
    // private appendBuf(arg0: number[], arg1: number, arg2: number): void;
    // private appendByte(arg0: number): void;
    // private copyToTailBuffer(arg0: number[], arg1: number, arg2: number): void;
    getTail(): number[];
    mark(arg0: number): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private replaceTailBuffer(arg0: number[], arg1: number, arg2: number): void;
    reset(): void;
    skip(arg0: number): number;
}