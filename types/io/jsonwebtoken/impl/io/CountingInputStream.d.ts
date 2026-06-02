import type { FilterInputStream } from '../../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
export class CountingInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    readonly count: AtomicLong;
    // private add(arg0: number): void;
    getCount(): number;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    skip(arg0: number): number;
}