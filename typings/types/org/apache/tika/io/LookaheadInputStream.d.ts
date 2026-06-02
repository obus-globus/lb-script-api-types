import type { InputStream } from '../../../../java/io/InputStream.d.ts'
export class LookaheadInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream, arg1: number)
    // private buffer: number[];
    // private buffered: number;
    // private mark: number;
    // private position: number;
    // private stream: InputStream;
    available(): number;
    close(): void;
    // private fill(): void;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
}