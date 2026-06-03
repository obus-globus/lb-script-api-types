import type { FilterInputStream } from '../../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
export class CountingInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(in_: InputStream)
    readonly count: number;
    // private mark: number;
    getCount(): number;
    mark(readlimit: number): void;
    read(): number;
    read(arg0: number[]): number;
    read(b: number[], off: number, len: number): number;
    reset(): void;
    skip(n: number): number;
}