import type { FilterInputStream } from '../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Inflater } from '../../../java/util/zip/Inflater.d.ts'
export class InflaterInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: Inflater)
    constructor(arg0: InputStream, arg1: Inflater, arg2: number)
    // private buf: number[];
    // private closed: boolean;
    // private inf: Inflater;
    // private len: number;
    // private reachEOF: boolean;
    // private singleByteBuf: number[];
    // private usesDefaultInflater: boolean;
    available(): number;
    close(): void;
    // private ensureOpen(): void;
    fill(): void;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
}