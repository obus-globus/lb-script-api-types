import type { InputStream } from '../../java/io/InputStream.d.ts'
export class FilterInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    // private in: InputStream;
    available(): number;
    close(): void;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
}