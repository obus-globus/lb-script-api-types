import type { FilterInputStream } from '../../../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
export class CountingInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    readonly bytesRead: number;
    count(arg0: number): void;
    getBytesRead(): number;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
}