import type { FilterOutputStream } from '../../../../../java/io/FilterOutputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
export class CountingOutputStream extends FilterOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    readonly bytesWritten: number;
    count(arg0: number): void;
    getBytesWritten(): number;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}