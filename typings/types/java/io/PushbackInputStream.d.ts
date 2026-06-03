import type { FilterInputStream } from '../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
export class PushbackInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: number)
    // private buf: number[];
    // private pos: number;
    available(): number;
    close(): void;
    // private ensureOpen(): void;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
    transferTo(arg0: OutputStream): number;
    unread(arg0: number[]): void;
    unread(arg0: number[], arg1: number, arg2: number): void;
    unread(arg0: number): void;
}