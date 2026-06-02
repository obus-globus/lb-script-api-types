import type { FilterInputStream } from '../../../../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
export class TapeInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    // private blockBuffer: number[];
    // private blockSize: number;
    readonly bytesRead: number;
    // private currBlkIdx: number;
    // private isCompressed: boolean;
    // private readOffset: number;
    available(): number;
    close(): void;
    getBytesRead(): number;
    peek(): number[];
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private readBlock(arg0: boolean): void;
    // private readFully(arg0: number[], arg1: number, arg2: number): void;
    // private readRange(arg0: number): number[];
    readRecord(): number[];
    resetBlockSize(arg0: number, arg1: boolean): void;
    skip(arg0: number): number;
}