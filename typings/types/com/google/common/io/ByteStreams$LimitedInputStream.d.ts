import type { FilterInputStream } from '../../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
export class ByteStreams$LimitedInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(in_: InputStream, limit: number)
    // private left: number;
    // private mark: number;
    available(): number;
    mark(readLimit: number): void;
    read(): number;
    read(arg0: number[]): number;
    read(b: number[], off: number, len: number): number;
    reset(): void;
    skip(n: number): number;
}